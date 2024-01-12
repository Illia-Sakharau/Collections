import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div>
      <div>IMAGE</div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
