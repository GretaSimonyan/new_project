import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '../../../../entities/Article';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation('article-details');
  const { id } = useParams<{id: string}>();

  return (
    <div className={classNames('', {}, [className])}>
      {id ? <ArticleDetails id={id} /> : t('Article not found') }
    </div>
  );
};

export default memo(ArticleDetailsPage);
