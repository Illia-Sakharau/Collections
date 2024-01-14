import { userSlice } from '@/store/reducers/userSlice';
import { useAppDispatch, useAppSelector } from './redux';

export default () => {
  const { setUser, removeUser } = userSlice.actions;
  const dispatch = useAppDispatch();
  const { name, isAdmin } = useAppSelector((state) => state.userReducer);

  const isAuth = !!name;
  const userName = name;
  const logoutAction = () => {
    dispatch(removeUser());
    localStorage.removeItem('username');
    localStorage.removeItem('isAdmin');
  };
  const loginActin = () => {
    dispatch(setUser({ name: 'test1', isAdmin: true }));
    localStorage.setItem('username', 'test1');
    localStorage.setItem('isAdmin', 'true');
  };
  const registrationAction = () => {
    dispatch(setUser({ name: 'test1', isAdmin: true }));
    localStorage.setItem('username', 'test1');
    localStorage.setItem('isAdmin', 'true');
  };

  return {
    isAuth,
    isAdmin,
    userName,
    logoutAction,
    loginActin,
    registrationAction,
  };
};
