import { userSlice } from '@/store/reducers/userSlice';
import { useAppDispatch, useAppSelector } from './redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavRoutes } from '@/router/routes';

export default () => {
  const { setUser, removeUser } = userSlice.actions;
  const dispatch = useAppDispatch();
  const { name, isAdmin } = useAppSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage =
    location.state?.from?.pathname || NavRoutes.collectionsPagePath;

  const isAuth = !!name;
  const userName = name;
  const logoutAction = () => {
    dispatch(removeUser());
    localStorage.removeItem('username');
    localStorage.removeItem('isAdmin');
  };
  const loginAction = () => {
    dispatch(setUser({ name: 'test1', isAdmin: true }));
    localStorage.setItem('username', 'test1');
    // localStorage.setItem('isAdmin', 'true');
    navigate(fromPage, { replace: true });
    console.log(123);
  };
  const registrationAction = () => {
    dispatch(setUser({ name: 'test1', isAdmin: true }));
    localStorage.setItem('username', 'test1');
    localStorage.setItem('isAdmin', 'true');
    navigate(fromPage, { replace: true });
  };

  return {
    isAuth,
    isAdmin,
    userName,
    logoutAction,
    loginAction,
    registrationAction,
  };
};
