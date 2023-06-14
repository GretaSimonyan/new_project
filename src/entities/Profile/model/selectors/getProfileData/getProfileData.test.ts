import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
// import AvatarImg from 'shared/assets/tests/avatar.jpg';

import { getProfileData } from './getProfileData';

const data = {
  username: 'admin',
  age: 25,
  country: Country.Armenia,
  lastname: 'witch',
  first: 'scarlet',
  city: 'west',
  currency: Currency.AMD,
};

describe('getProfileData.test', () => {
  test('should return data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
