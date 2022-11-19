import React, { Dispatch } from "react";
import { decode } from "@googlemaps/polyline-codec";
import { MarkerF, PolylineF, InfoWindowF } from "@react-google-maps/api";

import { useGetRouteDetailsQuery } from "../store/search.api";

const BusPath = ({
  code,
  name,
  color,
  setSelectedCenter,
}: {
  code: string;
  name: string;
  color: string;
  setSelectedCenter: Dispatch<any>;
}) => {
  const { data, isFetching, isError } = useGetRouteDetailsQuery(code);
  if (isFetching || isError || !data) return <div></div>;

  return (
    <>
      {data.patterns.map(({ id, encodedPolyline }) => (
        <PolylineF
          key={id}
          path={decode(encodedPolyline, 5).map(([lat, lng]) => ({ lat, lng }))}
          options={{ strokeColor: color }}
        />
      ))}
      {data.stops.map(({ id, name, latitude, longitude }) => (
        <MarkerF
          key={id}
          position={{ lat: latitude, lng: longitude }}
          icon={{
            path: google.maps.SymbolPath.CIRCLE,
            strokeColor: "red",
            scale: 4,
          }}
          onClick={() => {
            setSelectedCenter({ name, latitude, longitude });
          }}
        />
      ))}
    </>
  );
};

export default BusPath;
