import {
  createSlice, PayloadAction,
} from '@reduxjs/toolkit';

import { fetchArticleById } from '../services/fetchArticleById';
import { Article } from '../types/Article';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const articleDetailsSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: articleDetailsAction } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
