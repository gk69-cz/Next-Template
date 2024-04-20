'use client'

import Heading from '@/components/component/heading'
import { PlaneLanding } from 'lucide-react'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Button } from "@/components/ui/button"
import Location from "@/components/component/location"
import Combobox from '@/components/component/combobox';

const Airport = () => {
  interface AirportType {
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
  const [result, setResult] = useState(false);
  const [selectedAirport, setSelectedAirport] = useState(sampleJson);
  const [coordinates, setCoordinates] = useState<[number, number]>([0, 0]);
  const [isLoading, setisLoading] = useState(false);


  const handleAirportSelect = (airport: AirportType) => {
    console.log(airport)
    setSelectedAirport(airport);
    setCoordinates([airport.latitude, airport.longitude]);
    setisLoading(true);
    return airport;
  };

  return (
    <>if
      <Heading
        title="Airport Details"
        description='Explore the World with Our Airport Real-Time Updates on Location, Time, and Weather Conditions!'
        icon={PlaneLanding}
        iconColor='text-blue-500'
        bgColor='bg-blue-500/10'
      />
  
    
         <div className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2 ">
      <div className="col-span-12 lg:col-span-10" >
       
      <Combobox title="Start Airport" onSelect={handleAirportSelect} />
      </div>
      <Button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 col-span-12 lg:col-span-2 w-full" disabled={!isLoading} onClick={() => setResult(true)}>
        Search
      </Button>
      </div>
      <br />
      <br />
      {/* {!result ? <div className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-1 gap-2">  Please do search for an airport
      </div>:<Location coordinates={coordinates} airport={selectedAirport}/>} */}
    </>
  )
}

export default Airport