import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Text,
  TextSize,
} from 'shared/ui/Text/Text';

import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import {
  Article, ArticleView,
} from '../../model/types/article';

import cls from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string;
	articles: Article[];
	isLoading?: boolean;
	view?: ArticleView;
  // target?: AnchorHTMLAttributes<HTMLAnchorElement>;
  target?: string;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.GRID ? 9 : 3)
  .fill(0)
  .map((item, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <ArticleListItemSkeleton className={cls.card} view={view} key={index} />
  ));

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.GRID,
    target,
  } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {
        (!isLoading && !articles.length) ? (
          <Text
            size={TextSize.L}
            title={t('Article not found')}
          />
        ) : (
          <>
            {articles.length > 0 ? articles.map((article) => (
              <ArticleListItem
                target={target}
                article={article}
                view={view}
                key={article.id}
                className={cls.card}
              />
            )) : null}
            {isLoading && getSkeletons(view)}
          </>
        )
      }
    </div>
  );
});
