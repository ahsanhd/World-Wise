import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import Button from "./Button";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CitiesContext";
import PropTypes from "prop-types";
import { useGeolocation } from "../hooks/useGeoLocation";
import { useURLPosition } from "../hooks/useURLPosition";

function Map() {
  //
  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState([60, 0]);
  const {
    getPosition,
    isLoading: isLoadingPosition,
    position: geolocationPosition,
  } = useGeolocation();

  const [mapLat, mapLng] = useURLPosition();

  useEffect(
    function () {
      if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    },
    [mapLat, mapLng]
  );

  useEffect(
    function () {
      if (geolocationPosition)
        setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
    },
    [geolocationPosition]
  );

  return (
    <div className={styles.mapContainer}>
      {!geolocationPosition && (
        <Button type="position" onClick={getPosition}>
          {isLoadingPosition ? "Loading..." : " Use Your Position"}
        </Button>
      )}
      <MapContainer
        center={mapPosition}
        zoom={8}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span> <span>{city.cityName}</span>
            </Popup>
            <SetCenter position={mapPosition} />
            <DetectClick />
          </Marker>
        ))}
        {geolocationPosition && (
          <Marker position={geolocationPosition} key={geolocationPosition.lat}>
            <Popup>
              <span>Your Current Place</span> <span></span>
            </Popup>
            <SetCenter position={mapPosition} />
            <DetectClick />
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}

function SetCenter({ position }) {
  const map = useMap();
  map.setView(position);
  // console.log(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvent({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}

export default Map;

SetCenter.propTypes = {
  position: PropTypes.array,
};
