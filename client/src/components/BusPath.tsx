import React, { useState } from "react";
import { decode } from "@googlemaps/polyline-codec";
import { MarkerF, PolylineF, InfoWindowF } from "@react-google-maps/api";

import { RoutePattern, RouteStop } from "../interfaces/IBus";
import { useEffect } from "react";

const BusPath = ({
  patterns,
  stops,
  color,
}: {
  patterns: RoutePattern[];
  stops: RouteStop[];
  color: string;
}) => {
  const options = { strokeColor: color };
  const [selectedCenter, setSelectedCenter] = useState<{
    name: string;
    latitude: number;
    longitude: number;
  } | null>(null);

  useEffect(() => {
    const listener = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") {
        setSelectedCenter(null);
      }
    };
    window.addEventListener("keydown", listener);
    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <>
      {patterns.map(({ id, encodedPolyline }) => (
        <PolylineF
          key={id}
          path={decode(encodedPolyline, 5).map(([lat, lng]) => ({ lat, lng }))}
          options={options}
        />
      ))}
      {stops.map(({ id, name, latitude, longitude }) => (
        <MarkerF
          key={id}
          position={{ lat: latitude, lng: longitude }}
          icon={{
            path: google.maps.SymbolPath.CIRCLE,
            strokeColor: "red",
            scale: 3,
          }}
          onClick={(e: google.maps.MapMouseEvent) => {
            setSelectedCenter({ name, latitude, longitude });
          }}
        />
      ))}
      {selectedCenter ? (
        <div onBlur={() => setSelectedCenter(null)}>
          <InfoWindowF
            onCloseClick={() => setSelectedCenter(null)}
            position={{
              lat: selectedCenter.latitude,
              lng: selectedCenter.longitude,
            }}
          >
            <div>{selectedCenter.name}</div>
          </InfoWindowF>
        </div>
      ) : null}
    </>
  );
};

export default BusPath;
