'use client'

import * as z from "zod"
import Heading from '@/components/component/heading'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { PlaneLanding, TestTube2 } from 'lucide-react'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { formSchema } from './constants'
import { useState } from 'react';

import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import Weather from "@/components/component/weather"
import Delay from "@/components/component/delay"
import Location from "@/components/component/location"
import data from "@/lib/airports.json"
import Combobox from "@/components/component/combobox"


const Airport = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Airport: ''
    }
  });
  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (value: z.infer<typeof formSchema>) => {
    console.log(value)
  };
  const [result, setResult] = useState(null);
  const [selectedAirport, setSelectedAirport] = useState(null);
  const [coordinates, setcoordinates] = useState([0,0]);
  
  const handleAirportSelect = (airport:String) => {
    setSelectedAirport(airport);
    setcoordinates([airport.latitude,airport.longitude]);
  };

  const resultSelection = (value: String) => {
    setResult(value);
  };
  return (
    <>
      <Heading
        title="Airport Details"
        description='Explore the World with Our Airport Real-Time Updates on Location, Time, and Weather Conditions!'
        icon={PlaneLanding}
        iconColor='text-blue-500'
        bgColor='bg-blue-500/10'
      />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2 ">
          <div className="col-span-12 lg:col-span-10" >
       
          <Combobox title="Please Provide Airport name" onSelect={handleAirportSelect} />
          </div>

          <Button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 col-span-12 lg:col-span-2 w-full" disabled={isLoading}>
            Search
          </Button>
        </form>

      </Form>

      <br />
      <div className="
        rounded-lg justify-between
        border
        w-full
        p-4
        px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2
        ">

        <Button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 col-span-12 lg:col-span-2 w-full" disabled={isLoading} onClick={() => resultSelection("location")}>
          Location
        </Button>
        <Button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 col-span-12 lg:col-span-2 w-full" disabled={isLoading} onClick={() => resultSelection("Weather")}>
          Weather
        </Button>
        <Button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 col-span-12 lg:col-span-2 w-full" disabled={isLoading} onClick={() => resultSelection("Delay")}>
          Delay
        </Button>

      </div>
      <br />
      {result === null && <div className="rounded-lg
        border
        w-full
        p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-1 gap-2">  Please do search for an airport
      </div>

      }
      {result === "location" && <Location coordinates={coordinates} />}
      {result === "Weather" && <Weather />}
      {result === "Delay" && <Delay />}



    </>
  )
}

export default Airport