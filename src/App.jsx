import React from 'react'
import Navbar from './componnets/Navbar'
import Hero from './componnets/Hero'
import Marquee from './componnets/Marquee'
import About from './componnets/About'

const App = () => {
  return (
    <div className='w-full h-screen '>
      <Navbar/>
      <Hero/>
      <Marquee/>
      <About/>
    </div>
  )
}

export default App