import React, { useEffect } from 'react'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import MapComponent from './mapcontainer';

const Location = (props) => {
 
  return (
    
    <>
       <div className="rounded-lg
        border
        w-full
        p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-1 gap-2">
      <h1>Show Location on Map</h1>
      <MapComponent coordinates ={props.coordinates} />
    </div>
  </>   
  )
}
export default Location