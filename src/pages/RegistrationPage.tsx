import RegistrationForm from '@organisms/registrationForm/RegistrationForm';
import useAuth from '@/hooks/useAuth';
import { NavRoutes } from '@/router/routes';
import { Navigate } from 'react-router-dom';

export default () => {
  const { isAuth } = useAuth();

  if (isAuth) {
    return <Navigate to={NavRoutes.landingPagePath} />;
  }

  return <RegistrationForm />;
};
