'use client'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import Sidebar from "@/components/component/sidebar";
import { Sheet, SheetTrigger,SheetContent } from '../ui/sheet'


const NavigationMobile = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  },[]);

  if(!isMounted){
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <div> {/* Replace <button> with <div> */}
          <Button variant='ghost' size='icon' className='md:hidden absolute top-6'>
            <Menu />
          </Button>
        </div> {/* End of replacement */}
      </SheetTrigger>
      <SheetContent side='left' className='p-0'>
        <Sidebar/>
      </SheetContent>
    </Sheet>
  

  )
}

export default NavigationMobile