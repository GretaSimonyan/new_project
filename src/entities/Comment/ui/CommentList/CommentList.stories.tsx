import {
  ComponentMeta, ComponentStory,
} from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { CommentList } from './CommentList';

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  comments: [
    {
      text: 'asd asd',
      id: '23',
      user: {
        id: '1',
        username: 'Jormungat',
      },
    },
    {
      text: 'comment',
      id: '2',
      user: {
        id: '2',
        username: 'Alia',
      },
    },
  ],
};
Normal.decorators = [StoreDecorator({})];
