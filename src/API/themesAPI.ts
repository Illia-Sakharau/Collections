import { IThemeResp } from '@/types/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const themesAPI = createApi({
  reducerPath: 'themesAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://collectionsbe-ivz1.onrender.com/themes',
  }),
  endpoints: (build) => ({
    getAllThemes: build.query<IThemeResp[], void>({
      query: () => ({
        url: '/',
      }),
    }),
  }),
});

export default themesAPI;
export const { useGetAllThemesQuery } = themesAPI;
