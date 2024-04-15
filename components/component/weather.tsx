import React from 'react'

const Weather = () => {
  return (
    <>
    <div>
  <div className="flex flex-col md:flex-row">
    <div className="
      rounded-lg 
      border
      flex-1
      p-4
      mb-4 md:mb-0
      lg:w-1/3
      md:w-full
      md:mr-4
      md:last:mr-0
      md:flex-none
      px-3 md:px-6 
      focus-within:shadow-sm 
      grid grid-cols-12 gap-2">
      wind speed
    </div>
    <div className="
      rounded-lg 
      border
      flex-1
      p-4
      lg:w-1/3
      mb-4 md:mb-0
      md:w-full
      md:mr-4
      md:last:mr-0
      md:flex-none
      px-3 md:px-6 
      focus-within:shadow-sm 
      grid grid-cols-12 gap-2">
      TEMPERATURE
    </div>
    <div className="
      rounded-lg 
      border
      flex-1
      p-4
      lg:w-1/3
      md:w-full
      md:flex-none
      px-3 md:px-6 
      focus-within:shadow-sm 
      grid grid-cols-12 gap-2">
      Visibility
    </div>
  </div>
</div>



   
    </>
  )
}

export default Weather