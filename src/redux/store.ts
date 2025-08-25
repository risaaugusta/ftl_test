import { configureStore } from '@reduxjs/toolkit';
import { ftlApi } from './ftl_api';

export const store = configureStore({
  reducer: {
    [ftlApi.reducerPath]: ftlApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ftlApi.middleware),
});
