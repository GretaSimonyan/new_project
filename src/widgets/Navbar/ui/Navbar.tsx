import React, {
  useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { LoginModal } from 'features/AuthByUsername';
import {
  Button, ButtonTheme,
} from 'shared/ui/Button/Button';
import {
  useDispatch, useSelector,
} from 'react-redux';

import {
  getUserAuthData, userActions,
} from '../../../entities/User';

import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuth, setIsAuth] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuth(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuth(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          className={cls.links}
          onClick={onLogout}
        >
          {t('Log Out')}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        {t('Log In')}
      </Button>

      <LoginModal
        isOpen={isAuth}
        onClose={onCloseModal}
      />
    </div>
  );
};
