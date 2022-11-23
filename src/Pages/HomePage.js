import React from 'react'
import RoomExmp from '../Components/HomeComps/RoomExmp'
import Landing from '../Components/HomeComps/Landing'
import SectionOne from '../Components/HomeComps/SectionOne'
import SectionTwo from '../Components/HomeComps/SectionTwo'

function HomePage() {
  return (
    <div>
       <Landing/>
       <SectionOne/>
       <SectionTwo/>
       <RoomExmp/>
    </div>
  )
}

export default HomePage