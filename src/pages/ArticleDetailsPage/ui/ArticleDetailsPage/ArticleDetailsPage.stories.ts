import {
  ComponentMeta, ComponentStory,
} from '@storybook/react';

import ArticleDetailsPage from './ArticleDetailsPage';

export default {
  title: 'pages/AboutPage',
  component: ArticleDetailsPage,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = () => <ArticleDetailsPage />;

export const Normal = Template.bind({});
Normal.args = {};
