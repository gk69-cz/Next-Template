"use client"
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import routes from '@/lib/routes'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
    const pathname = usePathname();
    return (
        <div className='space-y-4 py-4 flex flex-col h-full bg-[#1f4573] text-white '>
            <div className='px-3 py-2'>
                <Link href='/home' className='flex items-center pl-3 mb-14'>
                    <div className='relative w-12 h-12 mt-2'>
                        <Image
                            fill alt='logo' src='/logoAirwise.png'
                        />
                    </div>
                    <h1 className='text-2xl font-bold'>
                        Airwise
                    </h1>
                </Link>

                <div className='space-y-1'>
                    {routes.map((route) => (
                        <Link
                            href={route.href}
                            key={route.label}
                            className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer text-white hover:text-white hover:bg-white/10 rounded-lg transition", pathname === route.href ? 'text-white bg-white/10' : 'text-zinc-400')}>
                            <div className='flex item-center flex-1 text-white'>
                                <route.icon className={cn('h-5 w-5 mr-3', route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default Sidebar