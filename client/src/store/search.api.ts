import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICourse } from "../interfaces/ICourse";
import { ISearchResponse } from "../interfaces/ISearchResponse";

// searchTerm: "",
// term: terms[0].value,
// campus: campuses[0].value,
// subject: "",
// catalogNum: "",
export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://content.osu.edu/v2/classes",
  }),
  endpoints: (builder) => ({
    getClasses: builder.query<ICourse[], any>({
      query: ({searchTerm, term, campus, academicCareer, subject, catalogNum}:
        {searchTerm: string; term: string; campus: string; academicCareer: string; subject: string; catalogNum: string;
      }) => `/search?q=${searchTerm}&term=${term}&campus=${campus}&academic-career=${academicCareer}`,
      transformResponse: (response: ISearchResponse) => {
        return response.data.courses;
      },
    }),
  }),
});

export const { useLazyGetClassesQuery, useGetClassesQuery } = api;
