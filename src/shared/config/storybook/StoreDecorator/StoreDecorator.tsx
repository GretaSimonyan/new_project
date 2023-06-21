import { Story } from '@storybook/react';
import {
  StateSchema, StoreProvider,
} from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import { articleDetailsReducer } from '../../../../entities/Article/model/slice/articleDetailsSlice';

const defaultReducers: ReducersList = {
  loginForm: loginReducer,
  articleDetails: articleDetailsReducer,
};
export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
  <StoreProvider
    initialState={state}
    asyncReducers={{
      ...defaultReducers, ...asyncReducers,
    }}
  >
    <StoryComponent />
  </StoreProvider>
);
