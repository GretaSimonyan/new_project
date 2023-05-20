import React from 'react';
import {
  ComponentStory, ComponentMeta,
} from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import {
  Button, ThemeButton,
} from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Text' };

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: ThemeButton.CLEAR,
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINE,
};

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINE,
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];
