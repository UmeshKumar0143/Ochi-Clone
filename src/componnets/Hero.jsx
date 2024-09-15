import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import {motion} from 'framer-motion'
const Hero = () => {
  return (
    <div className=''>
      <div className='mt-20 ml-16'> 
        {["We Create","Eye-Opening","Presentations"].map((item,index)=>{
         return <div className=' flex items-center'>
          {index == 1 && <motion.div initial ={{width: '0'}} animate ={{width: '7.5vw'}} transition={{ease:[0.76,0,0.24,1], duration:1 }} to className='h-[5vw] mt-4 w-[7.5vw] bg-red-500' ></motion.div>}
         <h1 className='text-[7vw] uppercase font-["Founders_Grotesk_X- Condensed"] font-bold tracking-tighter  leading-[7vw]'>{item}</h1>
         </div>
        })}
        </div>
        <div className='Below-Part border-zinc-500 px-5 border-t-[1px] flex py-2 justify-between items-center mt-20'>
          {["For Public and Private companies", "From the first pitch to IPO"].map((item,index)=><p className='text-sm capitalize  font-normal '>{item}</p>)}

         <div className='buton-div flex  font-["Neue Montreal"] items-center gap-2'> 
        <button className='px-5 border-2 border-zinc-700 rounded-full uppercase  py-1'>Start the project</button>
        <button className='-rotate-[45deg] border-zinc-700 border-2  rounded-full py-2 px-2'><FaArrowRight className='font-light text-lg' /></button>
        </div>
        </div>

    </div>
  )
}

export default Hero