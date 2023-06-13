import { useTranslation } from 'react-i18next';
import {
  classNames, Mods,
} from 'shared/lib/classNames/classNames';
import {
  Text,
  TextAlign,
  TextTheme,
} from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import {
  Country, CountrySelect,
} from 'entities/Country';

import {
  Currency, CurrencySelect,
} from '../../../Currency';
import { Profile } from '../../../Profile';

import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeCurrency?: (curr: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUsername,
    onChangeCurrency,
    onChangeCountry,
  } = props;
  const { t } = useTranslation('profile');
  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('An error occurred while loading the profile')}
          text={t('Try refreshing the page')}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      {isLoading ? (
        <div className={classNames('', {
          [cls.loading]: true,
        }, [className])}
        >
          <Loader />
        </div>
      ) : (
        <div>
          {data?.avatar && (
            <div className={cls.avatarWrapper}>
              <Avatar src={data?.avatar} alt="avatar" />
            </div>
          )}
          <Input
            value={data?.first}
            placeholder={t('Your name')}
            className={cls.input}
            onChange={onChangeFirstname}
            readonly={readonly}
          />
          <Input
            value={data?.lastname}
            placeholder={t('Your last name')}
            className={cls.input}
            onChange={onChangeLastname}
            readonly={readonly}
          />
          <Input
            value={data?.age}
            placeholder={t('Your age')}
            className={cls.input}
            onChange={onChangeAge}
            readonly={readonly}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
          />
          <Input
            value={data?.city}
            placeholder={t('Your city')}
            className={cls.input}
            onChange={onChangeCity}
            readonly={readonly}
          />
          <Input
            value={data?.avatar}
            placeholder={t('Avatar')}
            className={cls.input}
            onChange={onChangeAvatar}
            readonly={readonly}
          />
          <Input
            value={data?.username}
            placeholder={t('User name')}
            className={cls.input}
            onChange={onChangeUsername}
            readonly={readonly}
          />
          <CurrencySelect
            className={classNames('', {}, [className])}
            value={data?.currency}
            onChange={onChangeCurrency}
            readonly={readonly}
          />
          <CountrySelect
            value={data?.country}
            onChange={onChangeCountry}
            readonly={readonly}
          />
        </div>
      )}
    </div>
  );
};
