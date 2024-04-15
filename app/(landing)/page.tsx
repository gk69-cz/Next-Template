'use client'
// to be used if needed
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import router from 'next/router'
import React from 'react'
import Image from 'next/image'

const LangingPage = () => {
  return (
  
<section className="w-full mt-56 bg-white">
  <div className="text-center">
  <h2 className='text-2xl md:text-4xl font-bold text-center'>  
            <Image alt='logo' src='/logoAirwise.png' width={60} height={60} className='inline'/>
       Welcome to Airwise
        </h2>
    <p className="text-lg mb-6">Your destination for seamless travel experiences</p>
    <div className="flex justify-center">
      <Link href={'/home'}>
      <Button className="bg-blue-500 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300">
        Get Started
      </Button>
      </Link>
    </div>
  </div>
</section>


  )
}

export default LangingPage