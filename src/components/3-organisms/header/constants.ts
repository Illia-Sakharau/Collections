import { NavRoutes } from '@/router/routes';
import { linkInfo } from '@/types/componens';
import { TFunction } from 'i18next';

export const ANON_LINKS = (t: TFunction): linkInfo[] => [
  {
    text: t('links.landing'),
    link: NavRoutes.landingPagePath,
  },
];

export const AUTH_LINKS = (t: TFunction): linkInfo[] => [
  {
    text: t('links.landing'),
    link: NavRoutes.landingPagePath,
  },
  {
    text: t('links.collections'),
    link: NavRoutes.collectionsPagePath,
  },
];

export const ADMIN_LINKS = (t: TFunction): linkInfo[] => [
  {
    text: t('links.landing'),
    link: NavRoutes.landingPagePath,
  },
  {
    text: t('links.collections'),
    link: NavRoutes.collectionsPagePath,
  },
  {
    text: t('links.users'),
    link: NavRoutes.usersPagePath,
  },
];
