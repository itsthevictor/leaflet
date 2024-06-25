import { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import osm from "./osm-providers";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useGeolocation } from "./helpers";

function App() {
  const [center, setCenter] = useState({
    lat: 45.6409743,
    lng: 25.6315502,
  });
  const zoom = 14;
  const mapRef = useRef();
  const location = useGeolocation();
  console.log(location.coordinates);
  const coord = location.coordinates;
  return (
    <div className="leaflet-container">
      <MapContainer center={center} zoom={zoom} ref={mapRef}>
        <TileLayer
          url={osm.maptiler.url}
          attribution={osm.maptiler.attribution}
        />
        <Marker position={center} />
        <Marker position={location.coordinates} />
      </MapContainer>
    </div>
  );
}

export default App;
