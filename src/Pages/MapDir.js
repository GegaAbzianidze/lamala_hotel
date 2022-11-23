import React, { useState } from "react";
import { MapContainer, TileLayer } from 'react-leaflet'
import "../App.css"
import Routing from "../Components/Routing";

function MapDir() {
    const position = [43.072082,42.609486]
    const [longLat, setLongLat] = useState([])

    console.log(`${longLat}`)

  return (
    <div className="flex">
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="w-[70vw] h-[calc(100vh-76px)]">
     <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Routing longLat={longLat}/>
  </MapContainer>
  <div className="block w-[30vw] h-full">
  <button className="w-full h-20 border-b-2 border-gray-400 text-xl" onMouseOver={() => setLongLat([43.094894, 42.597367])}>Waterfall</button>
  <button className="w-full h-20 border-b-2 border-gray-400 text-xl" onMouseOver={() => setLongLat([43.031810,42.587736])}>Church</button>
  </div>
  </div>
  ); 
}
 
export default MapDir;
