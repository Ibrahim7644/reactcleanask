import React from "react";
import "./Map.css";

import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "300px",
  height: "300px",
};

const center = {
  lat: 27.2046,
  lng: 77.4977,
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAdJVydfWiCfkLYlkhFUWRU8m0rd07IaRc",
  });
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <>
      <div class="card mapCard">
        <div class="card-body text-center">
          {/* Map start */}

          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
          />

          {/* Map end  */}
        </div>
      </div>
    </>
  ) : (
    <></>
  );
}
export default React.memo(Map);
