import React, {
  memo,
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
  AppLink, AppLinkTheme,
} from 'shared/ui/AppLink/AppLink';
import {
  Text, TextTheme,
} from 'shared/ui/Text/Text';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';

import {
  getUserAuthData, userActions,
} from '../../../entities/User';

import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}
export const Navbar = memo(({ className }: NavbarProps) => {
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
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Text
          className={cls.appName}
          title={t('App')}
          theme={TextTheme.INVERTED}
        />
        <AppLink
          to={RoutePath.article_create}
          theme={AppLinkTheme.SECONDARY}
          className={cls.createBtn}
        >
          {t('Create an article')}
        </AppLink>
        <Dropdown
          direction="bottom left"
          className={cls.dropdown}
          items={[
            {
              content: t('Profile'),
              href: RoutePath.profile + authData.id,
            },
            {
              content: t('Log Out'),
              onClick: onLogout,
            },
          ]}
          trigger={<Avatar size={30} src={authData.avatar} />}
        />
      </header>
    );
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        {t('Log In')}
      </Button>
      { isAuth && (
        <LoginModal
          isOpen={isAuth}
          onClose={onCloseModal}
        />
      )}
    </header>
  );
});
