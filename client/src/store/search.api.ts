import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AllRoutes, Route, RouteData, RouteDetail } from "../interfaces/IBus";
import { ICourse } from "../interfaces/ICourse";
import { ISearchResponse } from "../interfaces/ISearchResponse";

export const osuApi = createApi({
  reducerPath: "ousApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://content.osu.edu/v2",
  }),
  endpoints: (builder) => ({
    getClasses: builder.query<ICourse[], any>({
      query: ({
        searchTerm,
        term,
        campus,
        academicCareer,
        subject,
        catalogNum,
      }: {
        searchTerm: string;
        term: string;
        campus: string;
        academicCareer: string;
        subject: string;
        catalogNum: string;
      }) =>
        `/classes/search?q=${searchTerm}&term=${term}&campus=${campus}&academic-career=${academicCareer}`,
      transformResponse: (response: ISearchResponse) => {
        return response.data.courses;
      },
    }),

    getRoutes: builder.query<Route[], any>({
      query: () => "/bus/routes",
      transformResponse: (response: AllRoutes) => {
        return response.data.routes;
      },
    }),

    getRouteDetails: builder.query<RouteData, any>({
      query: (route: string) => `bus/routes/${route}`,
      transformResponse: (response: RouteDetail) => {
        return response.data;
      },
    }),
  }),
});

export const {
  useLazyGetClassesQuery,
  useGetClassesQuery,
  useGetRoutesQuery,
  useGetRouteDetailsQuery,
} = osuApi;
