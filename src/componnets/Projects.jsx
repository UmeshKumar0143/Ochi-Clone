import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import {motion} from 'framer-motion'
const Projects = () => {
  const [isHovering, setishovering] = useState(false);
  const [isHovering2, setishovering2] = useState(false);
  return (
    <div className='w-full h-[120vw]'>
        <div className='Top-Heading w-full h-[13vw] flex px-10 items-center border-b-[2px]'>
                <h1 className='text-5xl  font-["Neue Montreal"]  '>Featured projects</h1>
        </div>
  
        <div className='projects-container-1 h-[40vw] w-full items-center px-4 gap-5 flex   '>
            <div onMouseEnter={()=>setishovering(true)}
                 onMouseLeave={()=>setishovering(false)}
            className='  w-1/2 py-5 projects-1 relative px-5 h-[40vw]' >
            <div className='Sub-heading flex items-center gap-2'>
            <div className='w-2 h-2 rounded-full bg-black'></div>
            <h6>Cardboard Spaceship</h6>
            </div>
            <div className='Text absolute items-center justify-center  flex -translate-x-1/2 left-full top-1/2 overflow-hidden z-[10] w-[35vw]  '>
            {'Cardboard'.split("").map((item,index)=><motion.span initial={{y:"100%"}}  animate={isHovering?{y:"0%"}: {y:"100%"}} transition={{ease: 'easeInOut' , delay: index*.04}} className='text-[#CDEA68]  uppercase font-semibold inline-block font-["Neue Montreal"] text-7xl '>{item}</motion.span>)}
            </div>
            <div className='img py-5'>
                    <img className='rounded-xl hover:scale-95 hover: cursor-pointer transition-all ease-in-out duration-105' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
            </div>
            <div className="buttons gap-2 flex ">
            <button className='px-4  border-2 border-zinc-700 rounded-full uppercase text-sm  py-1'>Branded Template</button>
            <button className='px-4 border-2 border-zinc-700 rounded-full uppercase text-sm    py-1'>Sales Deck</button>
            <button className='px-4 border-2 border-zinc-700 rounded-full uppercase  text-sm   py-1'>Social Media Templates</button>
            </div>
            </div>

            <div onMouseEnter={()=>setishovering2(true)}
                 onMouseLeave={()=>setishovering2(false)} className='w-1/2 py-5 projects-2 px-5 h-[40vw] relative  ' >
            <div className='Sub-heading flex items-center gap-2'>
            <div className='w-2 h-2 rounded-full relative bg-black'></div>
            <h6>AH2 & Matt Horn</h6>
            
            </div>
            <div className='Text absolute items-center justify-center  flex translate-x-1/2 right-full z-[10] top-1/2 overflow-hidden  w-[35vw]  '>
            {'AH2 & Matt Horn'.split("").map((item,index)=><motion.span initial={{y:"100%"}}  animate={isHovering2?{y:"0%"}: {y:"100%"}} transition={{ease: 'easeInOut' , delay: index*.04}} className='text-[#CDEA68] uppercase font-semibold inline-block font-["Neue Montreal"] text-7xl '>{item}</motion.span>)}
            </div>
            <div className='img py-5'>
                    <img className='rounded-xl hover:scale-95 hover: cursor-pointer transition-all ease-in-out duration-105' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" alt="" />
            </div>
            <div className="buttons gap-2 flex ">
            <button className='px-4  border-2 border-zinc-700 rounded-full uppercase text-sm  py-1'>Pitch Deck</button>
            </div>
            </div>
        </div>

        <div className='footer mt-32 flex justify-center items-center  h-[10vw] w-full '>
        <button className='pl-5 pr-2 border-2 flex  items-center gap-2 bg-black text-white border-zinc-700  rounded-full uppercase  py-2'>View all case studies<span className='-rotate-[45deg] border-zinc-700 border-2 bg-white rounded-full py-2 px-2 '><FaArrowRight className='font-light text-lg text-zinc-600' /></span></button>

        </div>

    </div>
  )
}

export default Projects 