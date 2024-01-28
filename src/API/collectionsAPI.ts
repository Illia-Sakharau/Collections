import { RootState } from '@/store/store';
import { ICollectionsAllResp, ICreateColletionReques } from '@/types/api';
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
  tagTypes: ['AllCollections', 'MyCollections'],
  endpoints: (build) => ({
    getAllCollections: build.query<ICollectionsAllResp[], void>({
      query: () => ({
        url: '/all',
      }),
      providesTags: ['AllCollections'],
    }),
    getMyCollections: build.query<ICollectionsAllResp[], void>({
      query: () => ({
        url: '/my',
      }),
      providesTags: ['MyCollections'],
    }),
    createCollection: build.mutation<
      ICollectionsAllResp,
      ICreateColletionReques
    >({
      query: (body) => ({
        url: `/create`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['AllCollections', 'MyCollections'],
    }),
    deleteCollections: build.mutation<number[], number[]>({
      query: (IDs) => ({
        url: `/delete`,
        method: 'DELETE',
        body: {
          IDs,
        },
      }),
      invalidatesTags: ['AllCollections', 'MyCollections'],
    }),
  }),
});

export default collectionsAPI;
export const {
  useGetAllCollectionsQuery,
  useGetMyCollectionsQuery,
  useCreateCollectionMutation,
  useDeleteCollectionsMutation
} = collectionsAPI;
