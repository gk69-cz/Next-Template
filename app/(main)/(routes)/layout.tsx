import NavigationMobile from '@/components/component/navigation'
import Sidebar from '@/components/component/sidebar'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
  <div className='w-full relative sm:mt-0 sm:pt-15'>
    {children}
  </div>
  )
}

export default layout