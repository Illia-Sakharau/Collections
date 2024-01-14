import useAuth from '@/hooks/useAuth';
import { NavRoutes } from '@/router/routes';
import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

type Props = {
  children: ReactNode;
};

export default ({ children }: Props) => {
  const { isAdmin } = useAuth();
  const location = useLocation();

  if (!isAdmin) {
    return <Navigate to={NavRoutes.loginPagePath} state={{ from: location }} />;
  }

  return children;
};
