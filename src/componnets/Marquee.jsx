import React from 'react'
import { motion } from 'framer-motion'

const Marquee = () => {
  return (
    <div className='w-full h-[25vw]  flex  items-center py-10 bg-[#004D43]  rounded-t-3xl     '>
        <div className=' text-white whitespace-nowrap  tracking-tighter  uppercase font-["Founders Grotesk X- Condensed"] h-[18vw] flex  items-center border-t border-b '>
         <motion.h1  initial={{x:'0%'}} animate= {{x:'-100%'}} transition={{repeat: Infinity, ease:"linear", duration: 5 }} className='text-[17vw] font-semibold leading-none'>We are Ochi</motion.h1>
         <motion.h1 initial={{x:'0%'}} animate= {{x:'-100%'}} transition={{repeat: Infinity, ease:"linear", duration: 5 }} className='text-[17vw] pl-10 font-semibold leading-none'>We are Ochi</motion.h1>
         </div>
    </div>
  )
}

export default Marquee