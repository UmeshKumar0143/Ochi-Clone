import React from 'react'
import Navbar from './componnets/Navbar'
import Hero from './componnets/Hero'
import Marquee from './componnets/Marquee'
import About from './componnets/About'
import Eyes from './componnets/Eyes'
import Projects from './componnets/Projects'

const App = () => {
  return (
    <div className='w-full h-screen '>
      <Navbar/>
      <Hero/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Projects/>
    </div>
  )
}

export default App