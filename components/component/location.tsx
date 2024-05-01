import React, { useState } from 'react'
import 'leaflet/dist/leaflet.css';
import MapComponent from './mapcontainer';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight, Map } from 'lucide-react';
import { Button } from '../ui/button';

interface AirportType {
  name: string;
  city: string;
  country: string;
  code: string;
  latitude: number;
  longitude: number;
  altitude: number;
}

interface LocationProps {
  coordinates: [number, number]; // Tuple type representing coordinates
  airport: AirportType; // Type representing airport data
}
const Location: React.FC<LocationProps> = (props) => {
  const googleMapsLink = `https://www.google.com/maps?q=${props.coordinates[0]},${props.coordinates[1]}`;

  const map = {
    label: 'View in Map',
    icon: Map,
    color: 'text-blue-500',
    bgcolor: 'bg-blue-500/10'
  }
  const [toggle, setToggle] = useState(false);
  const [mapview, setMapView] = useState(true);
  const [buttonName, setButtonname] = useState('details');

  return (
    <>
     <Button className='w-5 h-5 md:hidden bg-white-200'
      onClick={() => { 
        setToggle(!toggle); 
        setMapView(!mapview);
        if(!mapview){
          setButtonname('details');
        }else{
          setButtonname('map')
        }
        }} >
          {buttonName}
        </Button>
      <div className="rounded-lg border w-full lg:w-3/4 mx-auto float-left p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-1 gap-2">

        {mapview &&
          <div className="relative">
            <MapComponent coordinates={props.coordinates} />
          </div>
        }
        <div className="hidden md:block">
          <div className="mt-7 border border-gray-300 rounded-lg p-4 inline-block absolute top-1/3 left-3/4" style={{ height: '420px' }}>
            {/* <div className="border border-gray-300 rounded-lg p-4 m-4 shadow-lg"> */}
            <h2 className="text-lg mb-2">{props.airport.name}</h2>
            <p className="text-md mb-2">In the diverse and culturally rich nation of {props.airport.country}, where vibrant cityscapes blend with serene countryside, lies {props.airport.name}, a bustling hub of travel and adventure.This airport offers travelers a gateway to the world. It is {props.airport.altitude} meters above sea level, passengers embark on journeys filled with anticipation and wonder, leaving behind the familiar and venturing into the boundless skies</p>
          </div>
        </div>
          <div className="block md:hidden text-center">
            <div className="mt-7 border border-gray-300 inline-block top-1/3 pt-21 z-50-999999 p-4" >
              {/* <div className="border border-gray-300 rounded-lg p-4 m-4 shadow-lg"> */}
              <h2 className="text-lg mb-2">{props.airport.name}</h2>
              <p className="text-md mb-2">In the diverse and culturally rich nation of {props.airport.country}, where vibrant cityscapes blend with serene countryside, lies {props.airport.name}, a bustling hub of travel and adventure.This airport offers travelers a gateway to the world. It is {props.airport.altitude} meters above sea level, passengers embark on journeys filled with anticipation and wonder, leaving behind the familiar and venturing into the boundless skies</p>      
            </div>
          </div>
      </div>
    </>
  )
}
export default Location