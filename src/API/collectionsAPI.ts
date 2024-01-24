import { RootState } from '@/store/store';
import { ICollectionsAllResp } from '@/types/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const collectionsAPI = createApi({
  reducerPath: 'collectionsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://collectionsbe-ivz1.onrender.com/collections',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).userReducer.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Collections'],
  endpoints: (build) => ({
    getAllCollections: build.query<ICollectionsAllResp[], void>({
      query: () => ({
        url: '/all',
      }),
      providesTags: ['Collections'],
    }),
  }),
});

export default collectionsAPI;
export const { useGetAllCollectionsQuery } = collectionsAPI;
