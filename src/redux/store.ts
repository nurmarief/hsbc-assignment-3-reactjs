import { configureStore } from '@reduxjs/toolkit';
import authSlice from './features/authSlice';
import { videosAPI } from './api/videos';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [videosAPI.reducerPath]: videosAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    videosAPI.middleware,
  ]),
})