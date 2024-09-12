import React from 'react'
import Navbar from './componnets/Navbar'
import Hero from './componnets/Hero'
import Marquee from './componnets/Marquee'

const App = () => {
  return (
    <div className='w-full h-screen '>
      <Navbar/>
      <Hero/>
      <Marquee/>
    </div>
  )
}

export default App