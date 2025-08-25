// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
 
// const BASE_URL = 'https://uat-api.ftlgym.com/api/v1/test/jadwalruangan';

// export const ftlApi = createApi({
//   reducerPath: 'ftlApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: BASE_URL,
//   }),
//   endpoints: (builder) => ({
//     getImages: builder.query({
//       query: ({ query, page }) => ({
//         url: '',
//         params: { 
//           q: query, 
//           page, 
//         },
//       }),
//     }),
//   }),
// });

// export const { useGetImagesQuery } = ftlApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Meeting {
  waktu_mulai: string;
  waktu_selesai: string;
  nama_ruangan: string;
}

interface MeetingsResponse {
  status: string;
  message: string;
  timestamp: string;
  data: Meeting[];
}

const BASE_URL = 'https://uat-api.ftlgym.com/api/v1/test/jadwalruangan';

export const ftlApi = createApi({
  reducerPath: 'ftlApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getMeetings: builder.query<Meeting[], void>({
      query: () => '', // karena BASE_URL sudah lengkap
      transformResponse: (response: MeetingsResponse) => response.data, // ambil array `data` saja
    }),
  }),
});

export const { useGetMeetingsQuery } = ftlApi;
