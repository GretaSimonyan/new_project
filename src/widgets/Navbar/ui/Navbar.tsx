import React, {
  memo,
  useCallback,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { LoginModal } from '@/features/AuthByUsername';
import {
  Button,
  ButtonTheme,
} from '@/shared/ui/Button';
import {
  AppLink,
  AppLinkTheme,
} from '@/shared/ui/AppLink';
import {
  Text,
  TextTheme,
} from '@/shared/ui/Text';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { RoutePath } from '@/shared/const/route';
import { getUserAuthData } from '@/entities/User';

import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}
export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuth, setIsAuth] = useState(false);
  const authData = useSelector(getUserAuthData);

  const onCloseModal = useCallback(() => {
    setIsAuth(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuth(true);
  }, []);

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
        >
          {t('Create an article')}
        </AppLink>
        <HStack gap="16" className={cls.actions}>
          <NotificationButton />
          <AvatarDropdown />
        </HStack>
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
