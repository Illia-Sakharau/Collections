import { ILoginReques, IRegistrationReques, IUserInfo } from '@/types/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/auth',
  }),
  endpoints: (build) => ({
    login: build.mutation<IUserInfo, ILoginReques>({
      query: (body) => ({
        url: `/login`,
        method: 'POST',
        body,
      }),
    }),

    registration: build.mutation<IUserInfo, IRegistrationReques>({
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
