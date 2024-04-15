"use client"
import Combobox from '@/components/component/combobox'
import Heading from '@/components/component/heading'
import RouteMapComponent from '@/components/component/routemapcontainer'
import { Button } from '@/components/ui/button'
import { Map } from 'lucide-react'
import React, { useState } from 'react'

const Routes = () => {
  const [selectedAirportfrom, setSelectedAirportfrom] = useState(null);
  const [selectedAirportto, setSelectedAirportto] = useState(null);
  const [toselected, settoselected] = useState(false);
  const [fromselected, setfromselected] = useState(false);
  const [tocoordinates, settocoordinates] = useState([0,0]);
  const [forcoordinates, setforcoordinates] = useState([0,0]);
  const [result, setResult] = useState(false);


  const handleAirportSelectTo = (airportto) => {
    setSelectedAirportto(airportto);
    settoselected(true)
    settocoordinates([airportto.latitude,airportto.longitude]);
    // Do something with the selected airport value
  };
  const handleAirportSelectFrom = (airportfrom) => {
    setSelectedAirportfrom(airportfrom);
    setfromselected(true)
    setforcoordinates([airportfrom.latitude,airportfrom.longitude]);
    // Do something with the selected airport value
  };
  const resultSelection = () => {
    setResult(true);
    console.log(forcoordinates);
    console.log(tocoordinates);
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
      
      <div className='
        rounded-lg 
        border
        w-full
        p-4
        px-3 md:px-6 focus-within:shadow-sm grid col-span-2 gap-2
        "'>
         <Combobox title="Start Airport"onSelect={handleAirportSelectTo} />
         <Combobox title="End Destination" onSelect={handleAirportSelectFrom} />
         <Button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 col-span-12 lg:col-span-2 w-full" disabled={!toselected || !fromselected} onClick={() => resultSelection()}>
          Get Route
        </Button>
    
      </div>
      <br />
      {result === null && <div className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-1 gap-2">  Please do search for an airport
      </div>
      }
      {result &&  <RouteMapComponent selectedAirportto={selectedAirportto} selectedAirportfrom={selectedAirportfrom} startLocation={tocoordinates} endLocation={forcoordinates} />}
    </>
  )
}

export default Routes