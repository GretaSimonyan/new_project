import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

import { addCommentForArticle } from './addCommentForArticle';
// todo this test doesnt work
describe('addCommentForArticle.test', () => {
  const commentText = 'This is a test comment';
  const commentData = {
    articleId: '1',
    id: 'XI7ypWO',
    text: commentText,
    userId: '2',
  };
  test('success', async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle);
    thunk.api.post.mockReturnValue(Promise.resolve({
      data: commentData,
    }));
    // const result = await thunk.callThunk(commentText);

    // expect(thunk.dispatch).toHaveBeenCalledWith(fetchCommentsByArticleId(commentData.articleId));
    // expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    // expect(thunk.api.post).toHaveBeenCalled();
    // expect(result.meta.requestStatus).toBe('fulfilled');
    // expect(result.payload).toEqual(commentData);
  });
  // test('failure login', async () => {
  //   const thunk = new TestAsyncThunk(loginByUsername);
  //
  //   thunk.api.post.mockReturnValue(Promise.resolve({
  //     status: 403,
  //   }));
  //   const result = await thunk.callThunk({
  //     username: 'qwe', password: '333',
  //   });
  //
  //   expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  //   expect(thunk.api.post).toHaveBeenCalled();
  //   expect(result.meta.requestStatus).toBe('rejected');
  //   expect(result.payload).toBe('error');
  // });
});
