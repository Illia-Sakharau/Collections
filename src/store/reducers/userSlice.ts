import authAPI from '@/API/authAPI';
import { IAuthUserInfo } from '@/types/api';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const localUser = localStorage.getItem('user');
const nullUser: IAuthUserInfo = {
  id: null,
  name: null,
  email: null,
  is_admin: null,
  token: null,
};

const initialState: IAuthUserInfo = localUser
  ? JSON.parse(localUser)
  : { ...nullUser };

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(_state, action: PayloadAction<IAuthUserInfo>) {
      return action.payload;
    },
    setIsAdmin(state, action: PayloadAction<boolean>) {
      state.is_admin = action.payload;
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
