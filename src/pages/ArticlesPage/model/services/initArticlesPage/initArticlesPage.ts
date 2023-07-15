import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { SortOrder } from 'shared/types';
import {
  ArticleSortField, ArticleType,
} from 'entities/Article';

import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>(
  'articlesPage/initArticlesPage',
  async (searchParams, thunkApi) => {
    const {
      getState,
      dispatch,
    } = thunkApi;

    const inited = getArticlesPageInited(getState());

    if (!inited) {
      const dispatchAction = (action: any, value: SortOrder | ArticleSortField | string | null) => {
        if (value) {
          dispatch(action(value));
        }
      };

      const orderFromUrl = searchParams.get('order') as SortOrder;
      const sortFromUrl = searchParams.get('sort') as ArticleSortField;
      const searchFromUrl = searchParams.get('search');
      const typeFromUrl = searchParams.get('type') as ArticleType;

      dispatchAction(articlesPageActions.setOrder, orderFromUrl);
      dispatchAction(articlesPageActions.setSort, sortFromUrl);
      dispatchAction(articlesPageActions.setSearch, searchFromUrl);
      dispatchAction(articlesPageActions.setType, typeFromUrl);

      dispatch(articlesPageActions.initialState());
      dispatch(fetchArticlesList({}));
    }
  },
);
