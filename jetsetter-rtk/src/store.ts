import { configureStore } from '@reduxjs/toolkit';
import { itemApi } from './services/apiService';

export const store = configureStore({
  reducer: {
    [itemApi.reducerPath]: itemApi.reducer,
  },
  // If you want to add now middleware to the store, you can do so here
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(itemApi.middleware);
  },
});
