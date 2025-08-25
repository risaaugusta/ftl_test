import { configureStore } from '@reduxjs/toolkit';
import { ftlApi } from './ftl_api';
import { authApi } from './auth_api';   

export const store = configureStore({
  reducer: {
    [ftlApi.reducerPath]: ftlApi.reducer,
    [authApi.reducerPath]: authApi.reducer,   
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(ftlApi.middleware)
      .concat(authApi.middleware),           
});
