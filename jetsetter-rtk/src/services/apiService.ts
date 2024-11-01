// you'll usually have a service per API, not endpoint
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const itemApi = createApi({
  reducerPath: 'itemsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => {
    return {
      getItems: builder.query<{ items: Item[] }, void>({
        query: () => 'items',
      }),
    };
  },
});

export const { useGetItemsQuery } = itemApi;
