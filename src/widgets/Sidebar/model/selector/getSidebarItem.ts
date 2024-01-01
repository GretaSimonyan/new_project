import { createSelector } from '@reduxjs/toolkit';

import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';
import ArticlesIcon from '@/shared/assets/icons/article-20-20.svg';
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const/route';
import { getUserAuthData } from '@/entities/User';

import { SidebarItemType } from '../types/sidebar';

export const getSidebarItem = createSelector(getUserAuthData, (userData) => {
  const sidebarItemList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      Icon: MainIcon,
      text: 'main',
    },
    {
      path: getRouteAbout(),
      Icon: AboutIcon,
      text: 'about',
    },
  ];

  if (userData) {
    sidebarItemList.push(
      {
        path: getRouteProfile(userData.id),
        Icon: ProfileIcon,
        text: 'profile',
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        Icon: ArticlesIcon,
        text: 'articles',
        authOnly: true,
      },
    );
  }
  return sidebarItemList;
});
