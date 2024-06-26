import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
  <div className='w-full relative mt-9 md:mt-0 sm:pt-15'>
    {children}
  </div>
  )
}

export default layout