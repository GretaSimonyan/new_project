import React from 'react';
import {
  ComponentStory,
  ComponentMeta,
} from '@storybook/react';
import withMock from 'storybook-addon-mock';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { NotificationItem } from './NotificationItem';

export default {
  title: 'entities/Notification/NotificationItem',
  component: NotificationItem,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
  decorators: [withMock],
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  item: {
    id: '1',
    title: 'Уведомление',
    description: 'Поставь лайк и оставь комментарий под Ulbi TV',
  },
};

Normal.decorators = [
  StoreDecorator({}),
];
