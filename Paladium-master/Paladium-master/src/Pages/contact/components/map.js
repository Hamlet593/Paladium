import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./map.css";

export function MapComponent() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div>
      <Map />
    </div>
  );
}

function Map() {
  return (
    <div className="map-cont">
        <GoogleMap
          className="map"
          zoom={18}
          center={{ lat: 24.47130950724465, lng: 54.34962053201383 }}
          mapContainerClassName="map-cont"
        >
          <Marker
            position={{ lat: 24.47130950724465, lng: 54.34962053201383 }}
          />
        </GoogleMap>
    </div>
  );
}

export default MapComponent;
