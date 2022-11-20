import React, { Dispatch } from "react";
import { decode } from "@googlemaps/polyline-codec";
import { MarkerF, PolylineF, InfoWindowF } from "@react-google-maps/api";

import {
  useGetRouteBussesQuery,
  useGetRouteDetailsQuery,
} from "../store/search.api";
import busIcon from "../images/busIcon.svg";

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
  const {
    data: details,
    isFetching: isDetailsFetching,
    isError: isDetailsError,
  } = useGetRouteDetailsQuery(code);

  const { data: vehicles } = useGetRouteBussesQuery(code, {
    pollingInterval: 5000,
  });

  if (isDetailsFetching || isDetailsError || !details) return <div></div>;

  return (
    <>
      {details.patterns.map(({ id, encodedPolyline }) => (
        <PolylineF
          key={id}
          path={decode(encodedPolyline, 5).map(([lat, lng]) => ({ lat, lng }))}
          options={{ strokeColor: color }}
        />
      ))}
      {details.stops.map(({ id, name, latitude: lat, longitude: lng }) => (
        <MarkerF
          key={id}
          position={{ lat, lng }}
          icon={{
            path: google.maps.SymbolPath.CIRCLE,
            fillColor: color,
            fillOpacity: 1,
            strokeColor: "red",
            scale: 4,
          }}
          onClick={() => {
            setSelectedCenter({ name, lat, lng });
          }}
          zIndex={1}
        />
      ))}
      {vehicles?.map(({ id, heading, latitude: lat, longitude: lng }) => (
        <div key={id}>
          <MarkerF
            position={{ lat, lng }}
            icon={{
              path: google.maps.SymbolPath.CIRCLE,
              fillColor: color,
              fillOpacity: 1,
              strokeColor: color,
              strokeOpacity: 0.5,
              strokeWeight: 8,
              scale: 8,
            }}
            zIndex={2}
          />
            <MarkerF
              position={{ lat, lng }}
              icon={{
                path: google.maps.SymbolPath.FORWARD_OPEN_ARROW,
                strokeColor: "white",
                scale: 2,
                rotation: heading,
                anchor: new google.maps.Point(0, 2.5),
              }}
              zIndex={2}
            />
        </div>
      ))}
    </>
  );
};

export default BusPath;
