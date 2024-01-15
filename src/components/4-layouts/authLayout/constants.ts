import { NavRoutes } from '@/router/routes';
import { linkInfo } from '@/types/componens';
import { TFunction } from 'i18next';

export const LINKS = (t: TFunction): linkInfo[] => [
  {
    text: t('links.login'),
    link: NavRoutes.loginPagePath,
  },
  {
    text: t('links.registration'),
    link: NavRoutes.registrationPagePath,
  },
];
