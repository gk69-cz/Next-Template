"use client"

import Heading from '@/components/component/heading'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Ticket } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
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
import { formSchema } from './constants'
import { DateRange } from 'react-day-picker'
import { cn } from '@/lib/utils'
import { z } from 'zod'
import Combobox from '@/components/component/combobox'

const routetwo = () => {
  const [date, setDate] = React.useState<Date>()
  const [selectedAirportfrom, setSelectedAirportfrom] = useState(null);
  const [selectedAirportto, setSelectedAirportto] = useState(null);
  const [toselected, settoselected] = useState(false);
  const [fromselected, setfromselected] = useState(false);
  const [startdate, setstartdate] = React.useState<Date>()
  const [enddate, setenddate] = React.useState<Date>()

  const handleAirportSelectTo = (airportto) => {
    setSelectedAirportto(airportto);
    settoselected(true)
    // Do something with the selected airport value
  };
  const handleAirportSelectFrom = (airportfrom) => {
    setSelectedAirportfrom(airportfrom);
    setfromselected(true)
    // Do something with the selected airport value
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Flight: ''
    }
  });


  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (value: z.infer<typeof formSchema>) => {
    console.log(value)
  };


  return (
    <>
      <Heading
        title="Best Offers"
        description='Stay ahead of time and get your best offers'
        icon={Ticket}
        iconColor='text-blue-500'
        bgColor='bg-blue-500/10'
      />
       {/* Responsive layout for small and medium devices */}
       <div className='sm:block md:hidden'>
        <Combobox title="Please Provide From" onSelect={handleAirportSelectTo} />
        <Combobox title="Please Provide To" onSelect={handleAirportSelectFrom} />
        <div className="p-4">
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
                  <Calendar mode="single" selected={date} onSelect={setstartdate} />
                </div>
              </PopoverContent>
            </Popover>
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
                  {enddate ? format(enddate, "PPP") : <span>End Date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
                <Select
                  onValueChange={(value) =>
                    setenddate(addDays(new Date(), parseInt(value)))
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
                  <Calendar mode="single" selected={date} onSelect={setenddate} />
                </div>
              </PopoverContent>
            </Popover>
        </div>
        <div className="p-4">
          <Button disabled={isLoading && toselected && fromselected}>
            Check
          </Button>
        </div>
      </div>
    
       {/* Responsive layout for large devices */}
       <div className='hidden md:grid md:grid-cols-2 md:gap-4'>
       <Combobox title="Please Provide From" onSelect={handleAirportSelectTo} />
        <Combobox title="Please Provide To" onSelect={handleAirportSelectFrom} />
       
        <div className="p-4">
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
                  {startdate ? format(startdate, "PPP") : <span>Start Date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
                <Select
                  onValueChange={(value) =>
                    setDate(addDays(new Date(), parseInt(value)))
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
                  <Calendar mode="single" selected={date} onSelect={setDate} />
                </div>
              </PopoverContent>
            </Popover>
        </div>
        <div className="p-4">
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
                  {enddate ? format(enddate, "PPP") : <span>End Date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
                <Select
                  onValueChange={(value) =>
                    setDate(addDays(new Date(), parseInt(value)))
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
                  <Calendar mode="single" selected={date} onSelect={setDate} />
                </div>
              </PopoverContent>
            </Popover>
        </div>
        <div className="p-4">
          <Button disabled={isLoading && toselected && fromselected}>
            Check
          </Button>
        </div>
      </div>

      <div className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2">
       
       <p>Result</p>
       </div>

    </>
  )
}

export default routetwo
