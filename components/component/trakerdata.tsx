import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface TrackedData {
    countryArrival: string;
    countryDeparture: string;
    airportArrival: string;
    airportDeparture: string;
    terminalArrival: string;
    terminalDeparture: string;
    departureTime: string;
    arivalTime: string;
    longitudeArival: string;
    langitudeArival: string;
    longitudeDeparture: string;
    langitudeDeparture: string;
  }


  const FlightInfo: React.FC<TrackedData> = (props) => {

    const googleMapsLink = `https://www.google.com/maps?q=${(76.9200973511+89.42459869380001)/2},${(8.48211956024+27.403200149499998)/2}`;

  return (
    <div className="items-center grid grid-cols-5">
       <div className="ml-4 text-center">
        <p>Country: {props.countryDeparture}</p>
        <p>Airport: {props.airportDeparture}</p>
        <p>Terminal: {props.terminalDeparture}</p>
        <p>Departure Time: {props.departureTime}</p>
      </div>
      <div className="flex text-center">
        <div className="w-24 ml-10 h-8 border border-gray-600 flex justify-center items-center">{props.countryDeparture}</div>
        <ArrowRight/>
       
      </div>
      <div className="text-2xl flex"> <Link href={googleMapsLink} rel="noopener noreferrer" target="_blank">✈️ View on Maps </Link> <ArrowRight/></div> 
      
      <div className="flex items-center">
        
        <div className="w-24 h-8 border border-gray-600 flex justify-center items-center">{props.countryArrival}</div>
      </div>
      <div className="ml-4 text-center">
      <p>Country: {props.countryArrival}</p>
        <p>Airport: {props.airportArrival}</p>
        <p>Terminal: {props.terminalArrival}</p>
        <p>Departure Time: {props.arivalTime}</p>
      </div>
    </div>
  );
};

export default FlightInfo;
