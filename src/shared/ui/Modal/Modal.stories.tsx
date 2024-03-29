import React from 'react';
import {
  ComponentMeta, ComponentStory,
} from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children: 'lorem ipsum......',
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children: 'lorem ipsum......',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
