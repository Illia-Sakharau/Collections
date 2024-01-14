import useAuth from '@/hooks/useAuth';
import { NavRoutes } from '@/router/routes';
import { Navigate } from 'react-router-dom';

export default () => {
  const { isAuth, loginAction } = useAuth();

  if (isAuth) {
    return <Navigate to={NavRoutes.landingPagePath} />;
  }

  return (
    <div>
      LOGIN PAGE
      <button
        onClick={() => {
          loginAction();
        }}
      >
        Login
      </button>
    </div>
  );
};
