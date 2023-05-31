import {
  memo, useCallback,
} from 'react';
import {
  useDispatch, useSelector,
} from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
  Button, ButtonTheme,
} from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import {
  Text, TextTheme,
} from 'shared/ui/Text/Text';

import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';

import cls from './LoginForm.module.scss';

export interface LoginFormProps {
	className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    username,
    password,
    error,
    isLoading,
  } = useSelector(getLoginState);

  const onChangeUsername = useCallback((val: string) => {
    dispatch(loginActions.setUsername(val));
  }, [dispatch]);

  const onChangePassword = useCallback((val: string) => {
    dispatch(loginActions.setPassword(val));
  }, [dispatch]);

  const onLoginCLick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Authorisation form')} />
      {error && <Text text={t('You entered an incorrect username or password')} theme={TextTheme.ERROR} />}
      <Input
        autofocus
        type="text"
        className={cls.input}
        placeholder={t('Введите username')}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        type="text"
        className={cls.input}
        placeholder={t('Введите пароль')}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        className={cls.loginBtn}
        onClick={onLoginCLick}
        disabled={isLoading}
      >
        {t('Log In')}
      </Button>
    </div>
  );
});
