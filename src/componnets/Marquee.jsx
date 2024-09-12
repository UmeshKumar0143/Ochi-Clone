import React from 'react'

const Marquee = () => {
  return (
    <div className='w-full h-[25vw]  flex  items-center py-10 bg-[#004D43]  rounded-t-3xl     '>
        <div className='overflow-hidden text-white whitespace-nowrap  tracking-tighter  uppercase font-["Founders Grotesk X- Condensed"] h-[18vw] flex gap-6 items-center border-t border-b '>
         <h1 className='text-[17vw] font-semibold leading-none'>We are Ochi</h1>
         <h1 className='text-[17vw] font-semibold leading-none'>We are Ochi</h1>
         </div>
    </div>
  )
}

export default Marquee