'use client'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { ArrowRight, LayoutDashboard,Ticket,Map,PlaneLanding,Search,BookOpenText } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import Image from 'next/image'

const tools = [
  {
    label:'Tracker',
    icon:Search,
    href:'/tracker',
    color:'text-blue-500',
    bgcolor:'bg-blue-500/10',
  },
  {
    label:'Best Offers',
    icon:Ticket,
    href:'/bestoffer',
    color:'text-blue-500',
    bgcolor:'bg-blue-500/10',
  },
  {
    label:"Routes",
    icon:Map,
    href:'/routes',
    color:'text-blue-500',
    bgcolor:'bg-blue-500/10',
  },
  {
    label:"Airport's",
    icon:PlaneLanding,
    href:'/tracker',
    color:'text-blue-500',
    bgcolor:'bg-blue-500/10',
  },
  {
    label:'About',
    icon:BookOpenText,
    href:'/about',
    color:'text-blue-500',
    bgcolor:'bg-blue-500/10',
  },
]
const Home = () => {
  const router = useRouter()
  
  return (<>
  
      <div className='mb-8 space-y-4'>
        <h2 className='text-2xl md:text-4xl font-bold text-center'>
       
            <Image alt='logo' src='/logoAirwise.png' width={60} height={60} className='inline'/>
      
        Airwise
        </h2>
        <p className='text-muted-foreground font-light text-sm md:text-lg text-center'>
        Track the skies with Airwise: your ultimate destination for real-time flight information and aviation insights.
        </p>
      </div>
      <div className='px-4 md:px-20 lg:px-32 space-y-4'>
        {tools.map((tools) => (
          <Card 
          onClick={()=>(
            router.push(tools.href)
          )}
          key={tools.href}
          className='p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer'>
            <div className='flex item-center gap-x-4'>
              <div className={cn("p-2 w-fit rounded-md",tools.bgcolor)}>
                <tools.icon className={cn('w-8 h-8',tools.color)}/>
              </div>
              <div className='font-semibold'>
                  {tools.label}
              </div>
            </div>
            <ArrowRight className='w-5 h-5'/>
          </Card>
        ))}
      </div>

      </>

  )
}

export default Home