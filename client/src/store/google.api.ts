import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GeocodeResult, GeocodeResults } from "../interfaces/IGoogle";

export const googleApi = createApi({
  reducerPath: "googleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://maps.googleapis.com/maps/api",
  }),
  endpoints: (builder) => ({
    getReverseGeocode: builder.query<GeocodeResult | null, any>({
      query: ({ lat, lng }: { lat: string; lng: string }) =>
        `/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_MAPS_KEY}`,
      transformResponse: (response: GeocodeResults) => {
        if (response.results.length) {
          return response.results[0];
        }
        return null;
      },
    }),
  }),
});

export const { useGetReverseGeocodeQuery } = googleApi;
