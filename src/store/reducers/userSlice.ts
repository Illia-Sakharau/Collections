import authAPI from '@/API/authAPI';
import { IUserInfo } from '@/types/api';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const localUser = localStorage.getItem('user');
const nullUser: IUserInfo = {
  id: null,
  name: null,
  email: null,
  is_admin: null,
  token: null,
};

const initialState: IUserInfo = localUser
  ? JSON.parse(localUser)
  : { ...nullUser };

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(_state, action: PayloadAction<IUserInfo>) {
      return action.payload;
    },
    removeUser() {
      return { ...nullUser };
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authAPI.endpoints.login.matchFulfilled,
        (_state, { payload }) => payload
      )
      .addMatcher(
        authAPI.endpoints.registration.matchFulfilled,
        (_state, { payload }) => payload
      );
  },
});

export const userReducer = userSlice.reducer;
