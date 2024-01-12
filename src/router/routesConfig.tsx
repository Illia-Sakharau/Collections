import { createBrowserRouter } from 'react-router-dom';
import { NavRoutes } from './routes';
import RootLayout from '@layouts/RootLayout';
import AuthLayout from '@layouts/AuthLayout';
import ErrorPage from '@pages/ErrorPage';
import LandingPage from '@pages/LandingPage';
import LoginPage from '@pages/LoginPage';
import RegistrationPage from '@pages/RegistrationPage';
import CollectionsPage from '@pages/CollectionsPage';
import CollectionPage from '@pages/CollectionPage';
import NotFoundPage from '@pages/NotFoundPage';
import SearchPage from '@pages/SearchPage';
import UsersPage from '@/pages/UsersPage';

export const routes = [
  {
    path: NavRoutes.landingPagePath,
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: '/auth',
        element: <AuthLayout />,
        children: [
          {
            path: NavRoutes.loginPagePath,
            element: <LoginPage />,
          },
          {
            path: NavRoutes.registrationPagePath,
            element: <RegistrationPage />,
          },
        ],
      },
      {
        path: NavRoutes.searchPagePath,
        element: <SearchPage />,
      },
      {
        path: NavRoutes.collectionsPagePath,
        element: <CollectionsPage />,
      },
      {
        path: '/collection/:id',
        element: <CollectionPage />,
      },
      {
        path: NavRoutes.usersPagePath,
        element: <UsersPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
];

export const routesConfig = createBrowserRouter(routes);
