// components/MapComponent.js
'use client'

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-curve';
import L from 'leaflet';
import Link from 'next/link';

interface AirportType {
  name: string;
  city: string;
  country: string;
  code: string;
  latitude: number;
  longitude: number;
  altitude: number;
}
interface RouteMapProps {
  selectedAirportto: AirportType;
  selectedAirportfrom: AirportType;
  startLocation: [number, number];
  endLocation: [number, number];
}

const RouteMapComponent: React.FC<RouteMapProps> = ({ selectedAirportto, selectedAirportfrom, startLocation, endLocation }) => {

  function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in kilometers
  }

  function toRadians(degrees:any) {
    return degrees * Math.PI / 180;
  }
  const distance = calculateDistance(startLocation[0], startLocation[1], endLocation[0], endLocation[1]); // Example coordinates
  useEffect(() => {
    // Ensure Leaflet icons are correctly displayed
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.imagePath='public/'
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: '/marker-icon-2x.png',
      iconUrl: '/mapPin.png',
      shadowUrl: '/shadow.png'
    });
  }, []);
 

  return (
    <div className="w-full lg:w-3/4 mx-auto float-left">
      <div className="relative" style={{ paddingTop: '56.25%' }}>
        <MapContainer center={[((startLocation[0] + endLocation[0]) / 2), ((startLocation[1] + endLocation[1]) / 2)]} zoom={2} style={{ height: '400px', width: '100%' }} className="absolute top-0 left-0 w-full h-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {startLocation && <Marker position={startLocation}><Popup><Link href={'airports' + '?' + selectedAirportfrom.name}>{selectedAirportfrom.name}</Link></Popup></Marker>}
          {endLocation && <Marker position={endLocation}><Popup><Link href={'airports' + '?' + selectedAirportfrom.name}>{selectedAirportto.name}</Link></Popup></Marker>}
        </MapContainer>
      </div>
      <div className="border border-gray-300 rounded-lg p-4 m-4 inline-block absolute top-1/3 left-3/4">
        <h2 className="text-xl font-semibold mb-2">Distance</h2>
        <p className="text-lg font-bold">{distance.toFixed(2)} km</p>
      </div>
    </div>

  );
};


export default RouteMapComponent;
