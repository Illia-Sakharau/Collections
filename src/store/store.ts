import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducers/userSlice';
import authAPI from '@/API/authAPI';
import usersAPI from '@/API/usersAPI';
import { usersListReducer } from './reducers/usersListSlice';
import { collectionsListReducer } from './reducers/CollectionsListSlice';
import collectionsAPI from '@/API/collectionsAPI';

const rootReducer = combineReducers({
  userReducer,
  usersListReducer,
  collectionsListReducer,
  [authAPI.reducerPath]: authAPI.reducer,
  [usersAPI.reducerPath]: usersAPI.reducer,
  [collectionsAPI.reducerPath]: collectionsAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultsMiddleware) =>
      getDefaultsMiddleware()
        .concat(authAPI.middleware)
        .concat(usersAPI.middleware)
        .concat(collectionsAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispath = AppStore['dispatch'];
