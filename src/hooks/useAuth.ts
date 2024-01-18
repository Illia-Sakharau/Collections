import { userSlice } from '@/store/reducers/userSlice';
import { useAppDispatch, useAppSelector } from './redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavRoutes } from '@/router/routes';
import { useLoginMutation, useRegistrationMutation } from '@/API/authAPI';
import { useEffect } from 'react';

export default () => {
  const [loginAction, loginProps] = useLoginMutation();
  const [registrationAction, registrationProps] = useRegistrationMutation();
  const { removeUser } = userSlice.actions;
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage =
    location.state?.from?.pathname || NavRoutes.collectionsPagePath;

  const logoutAction = () => {
    dispatch(removeUser());
    localStorage.removeItem('user');
  };

  useEffect(() => {
    if (user.token) {
      localStorage.setItem('user', JSON.stringify(user));
      navigate(fromPage, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return {
    isAuth: !!user.token,
    isAdmin: user.is_admin,
    user,
    loginProps,
    registrationProps,
    logoutAction,
    loginAction,
    registrationAction,
  };
};
