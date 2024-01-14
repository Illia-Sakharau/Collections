import { useAppDispatch } from '@/hooks/redux';
import { userSlice } from '@/store/reducers/UserSlice';

export default () => {
  const { setUser } = userSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <div>
      LOGIN PAGE
      <button
        onClick={() => {
          dispatch(setUser({ name: 'test1', isAdmin: true }));
        }}
      >
        Login
      </button>
    </div>
  );
};
