import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { Country } from '../../../entities/Country';
import { Currency } from '../../../entities/Currency';
import AvatarImg from '../../../shared/assets/tests/avatar.jpg';

import ProfilePage from './ProfilePage';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
  <ProfilePage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
  StoreDecorator({
    profile: {
      form: {
        username: 'admin',
        age: 25,
        country: Country.Armenia,
        lastname: 'witch',
        first: 'scarlet',
        city: 'west',
        currency: Currency.AMD,
        avatar: AvatarImg,
      },
    },
  }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: {
        username: 'admin',
        age: 25,
        country: Country.Armenia,
        lastname: 'witch',
        first: 'scarlet',
        city: 'west',
        currency: Currency.AMD,
        avatar: AvatarImg,
      },
    },
  }),
];
