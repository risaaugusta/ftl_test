import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface LoginResponse {
  status: string;
  message: string;
  timestamp: string;  
  data: [];  
}

const BASE_URL = 'https://uat-api.ftlgym.com/api/v1/test/login';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, { email: string; password: string }>({
      query: (credentials) => ({
        url: '',           
        method: 'POST',
        body: credentials, 
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
