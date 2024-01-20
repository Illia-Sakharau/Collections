import { ILoginReques, IRegistrationReques, IAuthUserInfo } from '@/types/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://collectionsbe-ivz1.onrender.com/auth',
  }),
  endpoints: (build) => ({
    login: build.mutation<IAuthUserInfo, ILoginReques>({
      query: (body) => ({
        url: `/login`,
        method: 'POST',
        body,
      }),
    }),

    registration: build.mutation<IAuthUserInfo, IRegistrationReques>({
      query: (body) => ({
        url: `/registration`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export default authAPI;
export const { useLoginMutation, useRegistrationMutation } = authAPI;
