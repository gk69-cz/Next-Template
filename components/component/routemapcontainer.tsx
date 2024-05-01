'use client'
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-curve';
import L from 'leaflet';
import { ArrowLeft, ArrowRight } from 'lucide-react';

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
    return R * c;
  }

  function toRadians(degrees: any) {
    return degrees * Math.PI / 180;
  }
  const distance = calculateDistance(startLocation[0], startLocation[1], endLocation[0], endLocation[1]); // Example coordinates
  useEffect(() => {
    // Ensure Leaflet icons are correctly displayed
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.imagePath = 'public/'
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: '/marker-icon-2x.png',
      iconUrl: '/mapPin.png',
      shadowUrl: '/shadow.png'
    });
  }, []);

  const [toggle, setToggle] = useState(false);
  const [mapview, setMapView] = useState(true);


  return (
    <div className="rounded-lg border w-full lg:w-3/4 mx-auto float-left p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-1 gap-2">
      <div className="relative" style={{ paddingTop: '56.25%' }}>
        <MapContainer center={[((startLocation[0] + endLocation[0]) / 2), ((startLocation[1] + endLocation[1]) / 2)]} zoom={4} style={{ height: '400px', width: '100%' }} className="absolute top-0 left-0 w-full h-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {startLocation && <Marker position={startLocation}><Popup>{selectedAirportto.name}</Popup></Marker>}
          {endLocation && <Marker position={endLocation}><Popup>{selectedAirportfrom.name}</Popup></Marker>}
        </MapContainer>
      </div>
      <div className="hidden md:block text-center">
        <div className=" border border-gray-300 rounded-lg p-4 inline-block absolute top-1/3 left-3/4" style={{ height: '400px' }}>
          <h2 className="text-lg mb-2">Route Details</h2>
          <p className="text-md mb-2">In the diverse and culturally rich nation of , where vibrant cityscapes blend with serene countryside, lies , a bustling hub of travel and adventure.This airport offers travelers a gateway to the world. It is  meters above sea level, passengers embark on journeys filled with anticipation and wonder, leaving behind the familiar and venturing into the boundless skies</p>
          <div className="mt-[-10] flex items-center mb-4">
          </div>
        </div>
      </div>

      <div className="block md:hidden text-center mt-64">
        <div className=" border border-gray-300 rounded-lg p-4 inline-block top-2/3 left-3/4" style={{ height: '400px' }}>
          <h2 className="text-lg mb-2">Route Details</h2>
          <p className="text-md mb-2">In the diverse and culturally rich nation of , where vibrant cityscapes blend with serene countryside, lies , a bustling hub of travel and adventure.This airport offers travelers a gateway to the world. It is  meters above sea level, passengers embark on journeys filled with anticipation and wonder, leaving behind the familiar and venturing into the boundless skies</p>
          <div className="mt-[-10] flex items-center mb-4">
          </div>
        </div>
      </div>
        
    
    </div>
  );
};


export default RouteMapComponent;
