// components/MapComponent.js
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

interface MapComponentProps {
    coordinates: [number, number];
  }

const MapComponent: React.FC<MapComponentProps> = ({ coordinates }) => {
  useEffect(() => {
    // Ensure Leaflet icons are correctly displayed
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.imagePath='public/'
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: '/mapPin.png',
      iconUrl: '/marker-icon.png',
      shadowUrl: '/shadow.png'
    });
  }, []);

  return (
    <MapContainer center={coordinates} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coordinates}>
        <Popup>Location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
