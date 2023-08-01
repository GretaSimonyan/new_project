import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

import { initArticlesPage } from './initArticlesPage';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage.test', () => {
  const searchParams = new URLSearchParams();
  searchParams.append('order', 'asc');
  searchParams.append('sort', 'date');
  searchParams.append('search', 'keyword');
  test('inited', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        _inited: true,
      },
    });

    await thunk.callThunk(searchParams);

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });

  test('is not inited', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        _inited: false,
      },
    });

    await thunk.callThunk(searchParams);

    expect(thunk.dispatch).toBeCalledTimes(7);
    expect(fetchArticlesList).toHaveBeenCalled();
  });
});
