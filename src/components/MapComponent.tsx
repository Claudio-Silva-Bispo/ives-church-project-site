// components/MapComponent.tsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

// Certifique-se de importar o CSS do Leaflet
import 'leaflet/dist/leaflet.css';

const MapComponent: React.FC = () => {
  // Coordenadas de Seattle
  const seattleCoords: LatLngExpression = [47.6062, -122.3321];

  return (
    <MapContainer center={seattleCoords} zoom={12} className="h-full w-full">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={seattleCoords}>
        <Popup>Seattle, WA, EUA</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
