"use client"
const moment = require('moment');
import Heading from '@/components/component/heading'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Loader, Ticket } from 'lucide-react'
import React, { useState } from 'react'
import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from '@/lib/utils'
import Combobox from '@/components/component/combobox'
import Popup from '@/components/component/popup';
import BestData from '@/components/component/bestoffers';


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

const Bestofferes = () => {
  const [selectedAirportfrom, setSelectedAirportfrom] = useState(sampleJson);
  const [selectedAirportto, setSelectedAirportto] = useState(sampleJson);
  const [startdate, setstartdate] = React.useState<Date>();
  const [originLocationCode, setOriginLocationCode] = useState("");
  const [destinationLocationCode, setDestinationLocationCode] = useState("");
  const [sampleData, setsampleData] = useState(false);
  const [adults, setadults] = useState("1");
  const [count, setCount] = useState(0);
  const [isloading, setisLoading] = useState(false);
  const [isMobloading, setisMobLoading] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [modalValue, setModalValue] = useState(false);

  const [search, setSearch] = useState(true);
  const [buttonName, setButtonName] = useState("Check For Offers");
  const modalResults = (modalValue: boolean) => {
    setModalValue(modalValue)
    setShowModal(false);
    return modalValue;
  };


  const handleAirportSelectTo = (airportTo: Airport): Airport => {
    setCount(count + 1)
    setSelectedAirportto(airportTo);
    setDestinationLocationCode(airportTo.code);
    console.log(count)
    if (count >= 1) { setisMobLoading(true); }
    return airportTo;
  };
  const handleAirportSelectFrom = (airportFrom: Airport): Airport => {
    setCount(count + 1)
    setSelectedAirportfrom(airportFrom);
    setOriginLocationCode(airportFrom.code);
    console.log(count)
    if (count >= 1) { setisMobLoading(true); }
    return airportFrom;
  };
  // api call
  const [offers, setoffers] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = "https://test.api.amadeus.com/v2/shopping/flight-offers?";
  const fetchData = async () => {
    setSearch(!search);
    if (search) {
      setSearch(false);
      setButtonName("Clear Search");
      setShowModal(true)
      const link = url + 'originLocationCode=' + selectedAirportfrom.code + '&destinationLocationCode=' + selectedAirportto.code + '&departureDate=' + moment(startdate).format('YYYY-MM-DD') + '&adults=' + adults + '&nonStop=false&max=250';
      setLoading(true);
      try {
        const response = await fetch(link, {
          headers: {
            Authorization: `Bearer ${process.env.AMADEUS_API_KEY}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
      } catch (error) {
        setsampleData(true)
      }
    } else {
      setShowModal(false);
      setSearch(true);
      setButtonName("Check For Offers");
    }
  }


  return (
    <>
      <Heading
        title="Best Offers"
        description='Stay ahead of time and get your best offers'
        icon={Ticket}
        iconColor='text-blue-500'
        bgColor='bg-blue-500/10'
      />
      <div className='block md:hidden'>
        <Combobox title="TakeOff" onSelect={handleAirportSelectTo} />
        <Combobox title="Destination" onSelect={handleAirportSelectFrom} />
        <div className="relative grid grid-cols-2 gap-12 mb-2 mr-2 ml-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[165px] justify-start text-left font-normal sm:w-[55px]",
                  !startdate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {startdate ? format(startdate, "PPP") : <span>Start Date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
              <Select
                onValueChange={() => {
                  setCount(count + 1)
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="0">Today</SelectItem>
                  <SelectItem value="1">Tomorrow</SelectItem>
                  <SelectItem value="3">In 3 days</SelectItem>
                  <SelectItem value="7">In a week</SelectItem>
                </SelectContent>
              </Select>
              <div className="rounded-md border">
                <Calendar mode="single" selected={startdate} onSelect={setstartdate} />
              </div>
            </PopoverContent>
          </Popover>
          <Input type="number" placeholder="Adults" onChange={e => { setadults(e.currentTarget.value.toString()); }} />
        </div>
        <div className='text-center'>
          <Button disabled={!isMobloading} onClick={fetchData} className='bg-blue-500 hover:bg-blue-600 active:bg-blue-700 relative  w-[8865] md:w-[165px]'>
            {buttonName}
          </Button>
        </div>

      </div>

      {/* Responsive layout for large devices */}
      <div className='hidden lg:block rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid col-span-2 gap-2'>
        <div className='hidden md:grid md:grid-cols-2 md:gap-4'>
          <Combobox title="Take off" onSelect={handleAirportSelectTo} />
          <Combobox title="Destination" onSelect={handleAirportSelectFrom} />
        </div>

        <div className='pl-3 grid grid-cols-3 gap-3'>
          <div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !startdate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {startdate ? format(startdate, "PPP") : <span>Start Date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
                <Select
                  onValueChange={(value) =>
                    setstartdate(addDays(new Date(), parseInt(value)))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="0">Today</SelectItem>
                    <SelectItem value="1">Tomorrow</SelectItem>
                    <SelectItem value="3">In 3 days</SelectItem>
                    <SelectItem value="7">In a week</SelectItem>
                  </SelectContent>
                </Select>
                <div className="rounded-md border">
                  <Calendar mode="single" selected={startdate} onSelect={setstartdate} />
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <div>
            <Input type="number" placeholder="Number of Adults" onChange={e => { setadults(e.currentTarget.value.toString()); }} />
          </div>
          <div className='text-center'>
            <Button className='bg-blue-500 hover:bg-blue-600 active:bg-blue-700' disabled={!isMobloading} onClick={fetchData}>
              {buttonName}
            </Button>
          </div>
        </div>
      </div>
      <br />
      <div className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm">
        {!(sampleData == true) ? 'Search for details' :
          <BestData
            flagStart={selectedAirportfrom.country}
            flagEnd={selectedAirportto.country}
            nameStart={selectedAirportfrom.name}
            timeStart='2:30'
            dateStart= {moment(startdate).format('YYYY-MM-DD')}
            nameEnd={selectedAirportto.name}
            timeEnd='5:40'
            dateEnd={moment(startdate).format('YYYY-MM-DD')}
          />}

      </div>
      {showModal &&
        <Popup
          title="Mock Data Preview"
          message="It conveys the idea of exploring fabricated flight information in a clear and engaging manner"
          onSelect={modalResults}
        />
      }


    </>
  )
}

export default Bestofferes
