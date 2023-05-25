import React, {
  useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import {
  Button, ButtonTheme,
} from 'shared/ui/Button/Button';

import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuth, setIsAuth] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuth((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onToggleModal}
      >
        {t('Войти')}
      </Button>

      <Modal
        isOpen={isAuth}
        onClose={onToggleModal}
        /* eslint-disable-next-line */
      >
        Lorem ipsum dolor sit amet
      </Modal>
    </div>
  );
};
