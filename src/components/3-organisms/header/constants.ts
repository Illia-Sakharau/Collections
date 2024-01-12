import { NavRoutes } from '@/router/routes';
import { linkInfo } from '@/types/componens';

export const LINKS: linkInfo[] = [
  {
    text: 'Home',
    link: NavRoutes.landingPagePath,
  },
  {
    text: 'Collections',
    link: NavRoutes.collectionsPagePath,
  },
];
