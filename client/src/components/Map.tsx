import React, { useMemo } from "react";
import {
  GoogleMap,
  useLoadScript,
} from "@react-google-maps/api";
import BusPath from "./BusPath";
import { sampleBusDetails } from "../utils/sampleBusDetails";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: `${process.env.REACT_APP_MAPS_KEY}`,
  });

  const center = useMemo(() => ({ lat: 40.0067, lng: -83.02 }), []);

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap
      zoom={14}
      center={center}
      mapContainerClassName="w-full h-[90vh]"
    >
      <BusPath
        patterns={sampleBusDetails.data.patterns}
        stops={sampleBusDetails.data.stops}
        color="blue"
      />
    </GoogleMap>
  );
};

export default Map;
