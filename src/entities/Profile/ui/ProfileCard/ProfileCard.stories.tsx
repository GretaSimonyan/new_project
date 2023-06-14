import {
  ComponentMeta, ComponentStory,
} from '@storybook/react';

import { Country } from '../../../Country';
import { Currency } from '../../../Currency';
import AvatarImg from '../../../../shared/assets/tests/avatar.jpg';

import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    username: 'admin',
    age: 25,
    country: Country.Armenia,
    lastname: 'witch',
    first: 'scarlet',
    city: 'west',
    currency: Currency.AMD,
    avatar: AvatarImg,
  },
};

export const withError = Template.bind({});
withError.args = {
  error: 'error',
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
