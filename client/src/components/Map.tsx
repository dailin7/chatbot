import React, { useEffect, useMemo, useState } from "react";
import { GoogleMap, InfoWindowF, useLoadScript } from "@react-google-maps/api";
import BusPath from "./BusPath";
import { useGetRoutesQuery } from "../store/search.api";
import { useGetReverseGeocodeQuery } from "../store/google.api";

const Map = ({ routeStatus }: { routeStatus: any[] }) => {
  const {
    data: routesData,
    isFetching: isRoutesFetching,
    isError: isRoutesError,
  } = useGetRoutesQuery({});
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: `${process.env.REACT_APP_MAPS_KEY}`,
  });

  const [selectedCenter, setSelectedCenter] = useState<{
    name: string;
    lat: number;
    lng: number;
  } | null>(null);
  const {
    data: geocodeData,
    isFetching: isGeocodeFetching,
    isError: isGeocodeError,
  } = useGetReverseGeocodeQuery({
    lat: selectedCenter?.lat || 0,
    lng: selectedCenter?.lng || 0,
  });

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

  const center = useMemo(() => ({ lat: 40.006, lng: -83.018 }), []);

  if (isRoutesError) return <div>Error</div>;
  if (!isLoaded || isRoutesFetching) return <div>Loading...</div>;

  const getComponent = (type: string) => {
    if (!geocodeData) return "";

    const components = geocodeData.address_components.filter(({ types }) =>
      types.includes(type)
    );

    if (!components.length) return "";

    return components.map(({ short_name }) => short_name)[0];
  };

  const address1 = getComponent("street_number") + " " + getComponent("route");
  const address2 =
    getComponent("locality") +
    ", " +
    getComponent("administrative_area_level_1") +
    " " +
    getComponent("postal_code");

  function isVisible(code: string) {
    const route = routeStatus.find((route) => route.code === code);
    return route.visible;
  }

  const routes = routesData?.filter(({ code }) => isVisible(code));

  return (
    <GoogleMap
      zoom={13}
      center={center}
      mapContainerClassName="h-[70vh] w-full"
      clickableIcons={false}
    >
      {routes?.map(({ code, name, color }) => (
        <BusPath
          key={code}
          code={code}
          // name={name}
          color={color}
          setSelectedCenter={setSelectedCenter}
        />
      ))}
      {selectedCenter ? (
        <>
          {isGeocodeError ? <div>Error</div> : null}
          {geocodeData ? (
            <InfoWindowF
              onCloseClick={() => setSelectedCenter(null)}
              position={{
                lat: selectedCenter.lat,
                lng: selectedCenter.lng,
              }}
            >
              {isGeocodeFetching ? (
                <div>Loading...</div>
              ) : (
                <>
                  <p className="font-medium text-sm text-[#333]">
                    {selectedCenter.name}
                  </p>
                  <p className="font-normal text-[13px] text-[#333]">
                    {address1}
                  </p>
                  <p className="font-normal text-[13px] text-[#333]">
                    {address2}
                  </p>
                  <a
                    className="font-normal text-[13px] text-[#1a73e8] hover:underline"
                    href={`https://www.google.com/maps/place/?q=place_id:${geocodeData.place_id}`}
                    target="_blank"
                    rel="noreferrer"
                  >View on Google Maps</a>
                </>
              )}
            </InfoWindowF>
          ) : null}
        </>
      ) : null}
    </GoogleMap>
  );
};

export default Map;
