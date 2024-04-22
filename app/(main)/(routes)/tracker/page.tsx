'use client'

import * as z from "zod"
import Heading from '@/components/component/heading'
import { Search } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios';
import Combobox from "@/components/component/combobox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
const moment = require('moment');
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
import { cn } from "@/lib/utils"
import Loading from "../loading"

const Routeone = () => {

  const [flights, setFlights] = useState([]);
  const [flightName, setFlightName] = useState("")
  const [loading, setLoading] = useState(false);
  const [buttonName, setButtonName] = useState("Locate")
  const url = "https://test.api.amadeus.com/v2/schedule/flights?";

  const [date, setdate] = React.useState<Date>();
  const fetchData = async () => {
    const flightname = flightName.split('-');
    const link = url + 'carrierCode=' + flightname[0] + '&flightNumber=' + flightname[1] + '&scheduledDepartureDate=' + moment(date).format('YYYY-MM-DD');
    setButtonName('Clear Search')
    try {
      const response = await fetch(link, {
        headers: {
          Authorization: `Bearer ${process.env.AMADEUS_API_KEY}`, // Replace YOUR_AUTH_TOKEN_HERE with your actual authorization token
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();

    } catch (error) {

    }

  }

  return (
    <div>
      <Heading
        title="Flight Tracker"
        description='Stay ahead of the curve with our Flight Tracker – your window to real-time skies and seamless journeys.'
        icon={Search}
        iconColor='text-blue-500'
        bgColor='bg-blue-500/10'
      />
        <div className="relative grid grid-cols-1 gap-2  md:grid-cols-3 md:gap-12 mb-2 mr-2 ml-2">
              <Input type="text" placeholder="Flight Number" onChange={e => { setFlightName(e.currentTarget.value) }} />
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
                <Select
                  onValueChange={(value) =>
                    setdate(addDays(new Date(), parseInt(value)))
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
                  <Calendar mode="single" selected={date} onSelect={setdate} />
                </div>
              </PopoverContent>
            </Popover>
          <div className='text-center'>
            <Button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700" onClick={fetchData} disabled={!loading}>
            {buttonName}      </Button>          </div>
        </div>
      <br />
      <div className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm">
        {loading ? <Loading /> : 'Test Api credentials have been expired'}
      </div>
    </div>
  )
}

export default Routeone