import { classNames } from 'shared/lib/classNames/classNames';
import React, {
  memo, useState,
} from 'react';
import { useSelector } from 'react-redux';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import {
  Button, ButtonSize, ButtonTheme,
} from 'shared/ui/Button/Button';

import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItem } from '../../model/selector/getSidebarItem';

import cls from './Sidebar.module.scss';

interface SidebarProps {
	className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemList = useSelector(getSidebarItem);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <menu
      data-testid="sidebar"
      className={classNames(cls.Sidebar, {
        [cls.collapsed]: collapsed,
      }, [className])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>
        {sidebarItemList.map((item) => (
          <SidebarItem
            key={item.path}
            item={item}
            collapsed={collapsed}
          />
        ))}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </menu>
  );
});
