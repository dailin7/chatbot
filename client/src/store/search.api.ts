import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://content.osu.edu/v2/classes",
  }),
  endpoints: (builder) => ({
    getClasses: builder.query({
      query: (formData: any) => `/search?q=${formData.searchTerm}`,
    }),
  }),
});

export const { useLazyGetClassesQuery } = api;
