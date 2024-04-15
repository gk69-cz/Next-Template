'use client'
// to be used if needed
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import router from 'next/router'
import React from 'react'

const LangingPage = () => {
  return (
  
     <section className=" bg-cover bg-center h-screen flex items-center justify-center text-blue">
     <div className="text-center w-full lg:w-1/2 lg:ml-5">
       <h1 className="text-4xl font-bold mb-4">Welcome to Skyscanner</h1>
       <p className="text-lg mb-6">Track plane locations and get airplane-related information with ease.</p>
       <div className="space-x-4">
      
         <Button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 col-span-12 lg:col-span-2 w-full" onClick={() => router.push('/home')}>
            Home
          </Button> 
       </div>
     </div>
   </section>


  )
}

export default LangingPage