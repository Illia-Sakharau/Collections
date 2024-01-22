import { RootState } from '@/store/store';
import { IUpdateUsersReques, IUserInfo } from '@/types/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const usersAPI = createApi({
  reducerPath: 'usersAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://collectionsbe-ivz1.onrender.com/users',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).userReducer.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Users'],
  endpoints: (build) => ({
    getAllUsers: build.query<IUserInfo[], void>({
      query: () => ({
        url: '/all',
      }),
      providesTags: ['Users'],
    }),

    deleteUsers: build.mutation<IUserInfo[], number[]>({
      query: (IDs) => ({
        url: `/delete`,
        method: 'DELETE',
        body: {
          IDs,
        },
      }),
      invalidatesTags: ['Users'],
    }),

    updateUsers: build.mutation<IUserInfo[], IUpdateUsersReques>({
      query: (body) => ({
        url: `/update`,
        method: 'PATCH',
        body: body,
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});

export default usersAPI;
export const {
  useGetAllUsersQuery,
  useDeleteUsersMutation,
  useUpdateUsersMutation,
} = usersAPI;
