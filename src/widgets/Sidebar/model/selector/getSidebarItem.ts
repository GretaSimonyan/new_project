import { createSelector } from '@reduxjs/toolkit';

import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';
import ArticlesIcon from '@/shared/assets/icons/article-20-20.svg';
import { RoutePath } from '@/shared/const/route';

import { getUserAuthData } from '../../../../entities/User';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItem = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemList: SidebarItemType[] = [
      {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'main',
      },
      {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'about',
      },
    ];

    if (userData) {
      sidebarItemList.push(
        {
          path: RoutePath.profile + userData.id,
          Icon: ProfileIcon,
          text: 'profile',
          authOnly: true,
        },
        {
          path: RoutePath.articles,
          Icon: ArticlesIcon,
          text: 'articles',
          authOnly: true,
        },
      );
    }
    return sidebarItemList;
  },
);
