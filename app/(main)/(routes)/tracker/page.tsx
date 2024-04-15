'use client'

import * as z from "zod"
import Heading from '@/components/component/heading'
import { Search } from 'lucide-react'
import React from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { formSchema } from './constants'
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
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
import { cn } from "@/lib/utils"


const Routeone = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Airlines: '',
      Number:''
    }
  });


  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (value: z.infer<typeof formSchema>) => {
    console.log(value)
  };
  const [date, setDate] = React.useState<Date>()

  return (
    <div>
      <Heading
        title="Flight Tracker"
        description='Stay ahead of the curve with our Flight Tracker – your window to real-time skies and seamless journeys.'
        icon={Search}
        iconColor='text-blue-500'
        bgColor='bg-blue-500/10'
      />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="
        rounded-lg
        border
        w-full
        p-4
        px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2
        "
        >
          <FormField
            name="Airlines"
            render={({ field }) => (
              <FormItem className="col-span-12 lg:col-span-10">
                <FormControl className="m-0 p-0">
                  <Input className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                    disabled={isLoading}
                    placeholder="AA - American airlines"
                    {...field}
                  />

                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="Number"
            render={({ field }) => (
              <FormItem className="col-span-12 lg:col-span-10">
                <FormControl className="m-0 p-0">
                  <Input className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                    disabled={isLoading}
                    placeholder="Flight Number"
                    {...field}
                  />

                </FormControl>
              </FormItem>
            )}
          />
          <div className="space-y-2 col-span-6 lg:col-span-10">
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
                  {date ? format(date, "PPP") : <span>Start Date</span>}
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

          <Button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 col-span-12 lg:col-span-2 w-full" disabled={isLoading}>
          Search
          </Button>
        </form>

      </Form>
      <br />
      <div className="
        rounded-lg
        border
        w-full
        p-4
        px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2
        ">
       
       <p>Result</p>
      </div>
    </div>
  )
}

export default Routeone