import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducers/userSlice';
import { usersListReducer } from './reducers/usersListSlice';
import { collectionsListReducer } from './reducers/CollectionsListSlice';
import authAPI from '@/API/authAPI';
import usersAPI from '@/API/usersAPI';
import collectionsAPI from '@/API/collectionsAPI';
import themesAPI from '@/API/themesAPI';

const rootReducer = combineReducers({
  userReducer,
  usersListReducer,
  collectionsListReducer,
  [authAPI.reducerPath]: authAPI.reducer,
  [usersAPI.reducerPath]: usersAPI.reducer,
  [collectionsAPI.reducerPath]: collectionsAPI.reducer,
  [themesAPI.reducerPath]: themesAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultsMiddleware) =>
      getDefaultsMiddleware()
        .concat(authAPI.middleware)
        .concat(usersAPI.middleware)
        .concat(collectionsAPI.middleware)
        .concat(themesAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispath = AppStore['dispatch'];
