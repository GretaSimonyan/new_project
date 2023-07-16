import {
  memo, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  useNavigate,
  useParams,
} from 'react-router-dom';
import {
  Text,
  TextSize,
} from 'shared/ui/Text/Text';
import {
  DynamicModuleLoader, ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  useDispatch, useSelector,
} from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { AddCommentForm } from 'features/addCommentForm';
import {
  Button,
  ButtonTheme,
} from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page/Page';

import { articleDetailsPageReducer } from '../../model/slices';
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations';
import { getArticleRecommendations } from '../../model/slices/articleDetailsPageRecommendationsSlice';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { CommentList } from '../../../../entities/Comment';
import {
  ArticleDetails, ArticleList,
} from '../../../../entities/Article';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';

import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation('article-details');
  const { id } = useParams<{id: string}>();
  const comments = useSelector(getArticleComments.selectAll);
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);
  const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames('', {}, [className])}>
        <Button
          theme={ButtonTheme.OUTLINE}
          onClick={onBackToList}
        >
          {t('Return')}
        </Button>
        {id ? (
          <>
            <ArticleDetails id={id} />
            <Text
              size={TextSize.L}
              className={cls.commentTitle}
              title={t('Recommendations')}
            />
            <ArticleList
              articles={recommendations}
              isLoading={recommendationsIsLoading}
              className={cls.recommendations}
              target="_blank"
            />
            <Text
              size={TextSize.L}
              className={cls.commentTitle}
              title={t('Comments')}
            />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList
              isLoading={isLoading}
              comments={comments}
            />
          </>
        ) : t('Article not found') }
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
