import { NavRoutes } from '@/router/routes';
import { linkInfo } from '@/types/componens';
import { TFunction } from 'i18next';

export const LINKS = (t: TFunction): linkInfo[] => [
  {
    text: t('links.landing'),
    link: NavRoutes.landingPagePath,
  },
  {
    text: t('links.collections'),
    link: NavRoutes.collectionsPagePath,
  },
];
