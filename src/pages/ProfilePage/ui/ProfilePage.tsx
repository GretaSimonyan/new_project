import {
  useCallback, useEffect,
} from 'react';
import {
  useDispatch, useSelector,
} from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader, ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import {
  Text, TextTheme,
} from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

import { getProfileForm } from '../../../entities/Profile/model/selectors/getProfileForm/getProfileForm';
import { ProfilePageHeader } from '../ui/ProfilePageHeader/ProfilePageHeader';
import {
  fetchProfileData,
  getProfileError,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  ProfileCard,
  profileReducer,
  ValidateProfileError,
} from '../../../entities/Profile';
// in storybook trows error if I want to use short import

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation('profile');
  const dispatch = useDispatch();
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const validateErrorTranslates = {
    [ValidateProfileError.SERVER_ERROR]: t('Server error on save'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Incorrect region'),
    [ValidateProfileError.NO_DATA]: t('Data not specified'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('First and last name are required'),
    [ValidateProfileError.INCORRECT_AGE]: t('Incorrect age'),
  };

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({
      first: value || '',
    }));
  }, [dispatch]);

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({
      lastname: value || '',
    }));
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({
      age: Number(value || 0),
    }));
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({
      city: value || '',
    }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({
      avatar: value || '',
    }));
  }, [dispatch]);

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({
      username: value || '',
    }));
  }, [dispatch]);

  const onChangeCountry = useCallback((country?: Country) => {
    dispatch(profileActions.updateProfile({
      country,
    }));
  }, [dispatch]);

  const onChangeCurrency = useCallback((currency?: Currency) => {
    dispatch(profileActions.updateProfile({
      currency,
    }));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <ProfilePageHeader />
        {validateErrors?.length && validateErrors.map((error) => (
          <Text
            key={error}
            theme={TextTheme.ERROR}
            text={validateErrorTranslates[error]}
          />
        ))}
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeAvatar={onChangeAvatar}
          onChangeUsername={onChangeUsername}
          onChangeCountry={onChangeCountry}
          onChangeCurrency={onChangeCurrency}
          readonly={readonly}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
