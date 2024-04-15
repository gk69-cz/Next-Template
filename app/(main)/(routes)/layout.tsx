import NavigationMobile from '@/components/component/navigation'
import Sidebar from '@/components/component/sidebar'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
  <div className='w-full relative'>
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    {children}
  </div>
  )
}

export default layout