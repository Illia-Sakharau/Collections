import { createBrowserRouter } from 'react-router-dom';
import { NavRoutes } from './routes';
import RootLayout from '@layouts/RootLayout';
import AuthLayout from '@/components/4-layouts/authLayout/AuthLayout';
import ErrorPage from '@pages/ErrorPage';
import LandingPage from '@pages/LandingPage';
import LoginPage from '@pages/LoginPage';
import RegistrationPage from '@pages/RegistrationPage';
import CollectionsPage from '@/pages/collectionsPage/CollectionsPage';
import CollectionPage from '@pages/CollectionPage';
import NotFoundPage from '@pages/NotFoundPage';
import SearchPage from '@pages/SearchPage';
import UsersPage from '@/pages/UsersPage';
import RequireAuth from '@/hocs/RequireAuth';
import RequireAdmin from '@/hocs/RequireAdmin';

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
        element: (
          <RequireAuth>
            <CollectionsPage />
          </RequireAuth>
        ),
      },
      {
        path: '/collection/:id',
        element: <CollectionPage />,
      },
      {
        path: NavRoutes.usersPagePath,
        element: (
          <RequireAdmin>
            <UsersPage />
          </RequireAdmin>
        ),
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
];

export const routesConfig = createBrowserRouter(routes);
