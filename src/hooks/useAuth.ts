import { userSlice } from '@/store/reducers/userSlice';
import { useAppDispatch, useAppSelector } from './redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavRoutes } from '@/router/routes';
import { useLoginMutation, useRegistrationMutation } from '@/API/authAPI';
// import { useEffect } from 'react';
import { ILoginReques, IRegistrationReques } from '@/types/api';

export default () => {
  const [login, loginProps] = useLoginMutation();
  const [registration, registrationProps] = useRegistrationMutation();
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

  const loginAction = (props: ILoginReques) => {
    login(props)
      .unwrap()
      .then((fulfilled) => {
        localStorage.setItem('user', JSON.stringify(fulfilled));
        navigate(fromPage, { replace: true });
      });
  };

  const registrationAction = (props: IRegistrationReques) => {
    registration(props)
      .unwrap()
      .then((fulfilled) => {
        localStorage.setItem('user', JSON.stringify(fulfilled));
        navigate(fromPage, { replace: true });
      });
  };

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
