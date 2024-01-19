import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducers/userSlice';
import authAPI from '@/API/authAPI';
import usersAPI from '@/API/usersAPI';

const rootReducer = combineReducers({
  userReducer,
  [authAPI.reducerPath]: authAPI.reducer,
  [usersAPI.reducerPath]: usersAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultsMiddleware) =>
      getDefaultsMiddleware()
        .concat(authAPI.middleware)
        .concat(usersAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispath = AppStore['dispatch'];
