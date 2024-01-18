import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducers/userSlice';
import authAPI from '@/API/authAPI';

const rootReducer = combineReducers({
  userReducer,
  [authAPI.reducerPath]: authAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultsMiddleware) =>
      getDefaultsMiddleware().concat(authAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispath = AppStore['dispatch'];
