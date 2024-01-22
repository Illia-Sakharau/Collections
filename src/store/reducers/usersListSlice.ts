import usersAPI from '@/API/usersAPI';
import { IResponseError, IUserInfo } from '@/types/api';
import { createSlice } from '@reduxjs/toolkit';

type UsersState = {
  isLoading: boolean;
  error: IResponseError | undefined;
  users: IUserInfo[] | undefined;
};

const initialState: UsersState = {
  isLoading: false,
  error: undefined,
  users: undefined,
};

export const usersListSlice = createSlice({
  name: 'usersList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(usersAPI.endpoints.getAllUsers.matchPending, (state) => {
        state.isLoading = true;
        state.error = undefined;
        state.users = undefined;
      })
      .addMatcher(
        usersAPI.endpoints.getAllUsers.matchFulfilled,
        (state, { payload }) => {
          state.isLoading = false;
          state.users = payload;
        }
      )
      .addMatcher(
        usersAPI.endpoints.getAllUsers.matchRejected,
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload as IResponseError;
        }
      )
      .addMatcher(usersAPI.endpoints.deleteUsers.matchPending, (state) => {
        state.isLoading = true;
        state.error = undefined;
        state.users = undefined;
      })
      .addMatcher(usersAPI.endpoints.setUsersState.matchPending, (state) => {
        state.isLoading = true;
        state.error = undefined;
        state.users = undefined;
      });
  },
});

export const usersListReducer = usersListSlice.reducer;
