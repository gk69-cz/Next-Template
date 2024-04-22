"use client"
import dynamic from 'next/dynamic'
import Combobox from '@/components/component/combobox'
import Heading from '@/components/component/heading'
// import RouteMapComponent from '@/components/component/routemapcontainer'
import { Button } from '@/components/ui/button'
import { Map } from 'lucide-react'
import React, { useState } from 'react'
const RouteMapComponent = dynamic(() => import('@/components/component/routemapcontainer'), {
  ssr: false,
});
interface Airport {
  name: string;
  city: string;
  country: string;
  code: string;
  latitude: number;
  longitude: number;
  altitude: number;
}
const sampleJson = {
  altitude: 52,
  city: "Madras",
  code: "MAA",
  country: "India",
  latitude: 12.990005493164062,
  longitude: 80.16929626464844,
  name: "Chennai International Airport"
}
const sampleJson2 = 
  {
    "name": "Trivandrum International Airport",
    "city": "Trivandrum",
    "country": "India",
    "code": "TRV",
    "latitude": 8.48211956024,
    "longitude": 76.9200973511,
    "altitude": 15.0
}

const Routes = () => {
  const [selectedAirportfrom, setSelectedAirportfrom] = useState(sampleJson);
  const [selectedAirportto, setSelectedAirportto] = useState(sampleJson2);
  const [toselected, settoselected] = useState(false);
  const [fromselected, setfromselected] = useState(false);
  const [tocoordinates, settocoordinates] = useState<[number, number]>([0, 0]);
  const [forcoordinates, setforcoordinates] = useState<[number, number]>([0, 0]);
  
  const [result, setResult] = useState(false);

  const handleAirportSelectTo = (airport:Airport):Airport => {
    setSelectedAirportto(airport);
    settoselected(true)
    settocoordinates([airport.latitude,airport.longitude]);
    return airport;
  };
  const handleAirportSelectFrom = (airport :Airport): Airport => {
    setSelectedAirportfrom(airport);
    setfromselected(true)
    setforcoordinates([airport.latitude,airport.longitude]);
    return airport;
  };
  const resultSelection = () => {
    setResult(true);
  };
  return (
    <>
    <Heading
        title="Check Routes"
        description='Get the details of the travel'
        icon={Map}
        iconColor='text-blue-500'
        bgColor='bg-blue-500/10'
      />
      {/* large */}
      <div className='rounded-lg border w-full p-4 grid grid-flow-col-3 md:grid-cols-3 md:gap-2 px-3 md:px-6 focus-within:shadow-sm '>
         <Combobox title="Takeoff" onSelect={handleAirportSelectTo} />
         <Combobox title="Landing" onSelect={handleAirportSelectFrom} />
         <div className='pr-2 pl-2'>
          <Button className="mt-3 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 w-full" disabled={!toselected || !fromselected} onClick={resultSelection}>
          Show Route
          </Button>
         </div>
         
      </div>

      
      <br />
     {result ?
     <RouteMapComponent selectedAirportto={selectedAirportto} selectedAirportfrom={selectedAirportfrom} startLocation={tocoordinates} endLocation={forcoordinates} />
     : <div className="flex justify-center items-center">
     <p className=" p-8 rounded-lg">
       PLEASE DO SEARCH
     </p>
   </div>}
    </>
  )
}

export default Routes