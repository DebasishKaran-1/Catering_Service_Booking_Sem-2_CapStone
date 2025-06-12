import { useState } from 'react'
import HeroSection  from './Component/HeroSection.jsx'
import HowItWorks  from './Component/HowItWorks.jsx'
import Navbar  from './Component/Navbar.jsx'
import Cusines  from './Component/PopularCuisines.jsx'

function App() {


  return (
    <>
      <Navbar/>
      <HeroSection/>
      <HowItWorks/>
      <Cusines/>
    </>
  )
}

export default App
