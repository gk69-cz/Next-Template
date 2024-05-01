'use client'

import Heading from '@/components/component/heading'
import { PlaneLanding } from 'lucide-react'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Button } from "@/components/ui/button"
import Combobox from '@/components/component/combobox';
import dynamic from 'next/dynamic'
const Location = dynamic(() => import('@/components/component/location'), {
  ssr: false,
});

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
    altitude: 0,
    city: "",
    code: "",
    country: "",
    latitude: 0,
    longitude: 0,
    name: ""
  }
  const [buttonName, setButtonName] = useState("Search Airport")
  const [result, setResult] = useState(false);
  const [selectedAirport, setSelectedAirport] = useState(sampleJson);
  const [coordinates, setCoordinates] = useState<[number, number]>([0, 0]);
  const [isLoading, setisLoading] = useState(false);


  const handleAirportSelect = (airport: AirportType) => {
    setSelectedAirport(airport);
    console.log(airport);
    setCoordinates([airport.latitude, airport.longitude]);
    setisLoading(true);
    return airport;
  };
  const SubmitButtonClicked = () => {
    setResult(!result)
    if (!result) {
      setButtonName('Clear Search');

    } else {
      setButtonName('Search Airport');
      setSelectedAirport(sampleJson)
    }
  }

  return (
    <>
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
        <Button className="mt-3 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 col-span-12 lg:col-span-2 w-full" disabled={!isLoading} onClick={SubmitButtonClicked}>
          {buttonName}
        </Button>
      </div>
      <br />
      <br />
      {!result ? <div className="flex justify-center items-center">
        <p className="p-8 rounded-lg">
          please do search
        </p>
      </div> : <Location coordinates={coordinates} airport={selectedAirport} />}
    </>
  )
}

export default Airport