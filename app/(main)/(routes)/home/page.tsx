'use client'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { ArrowRight, LayoutDashboard } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const tools = [
  {
    label:'Tracker',
    icon:LayoutDashboard,
    href:'/tracker',
    color:'text-violet-500',
    bgcolor:'bg-violet-500/10',
  },
  {
    label:'tracker',
    icon:LayoutDashboard,
    href:'/tracker',
    color:'text-violet-500',
    bgcolor:'bg-violet-500/10',
  },
  {
    label:'tracker',
    icon:LayoutDashboard,
    href:'/tracker',
    color:'text-violet-500',
    bgcolor:'bg-violet-500/10',
  },
  {
    label:'book',
    icon:LayoutDashboard,
    href:'/book',
    color:'text-violet-500',
    bgcolor:'bg-violet-500/10',
  },
  {
    label:'tracker',
    icon:LayoutDashboard,
    href:'/tracker',
    color:'text-violet-500',
    bgcolor:'bg-violet-500/10',
  },
]
const home = () => {
  const router = useRouter()
  
  return (<>
  
      <div className='mb-8 space-y-4'>
        <h2 className='text-2xl md:text-4xl font-bold text-center'>
        SKYTRACK
        </h2>
        <p className='text-muted-foreground font-light text-sm md:text-lg text-center'>
        "Track the skies with SkyTrack: your ultimate destination for real-time flight information and aviation insights."
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

export default home