import React, { useEffect, useState } from 'react'

const Eyes = () => {
    const [rotate , setRotate] =  useState(0)

useEffect(()=>{
    window.addEventListener('mousemove',(e)=>{
        let mouseX = e.clientX;
        let mouseY = e.clientY;

        let deltaX = mouseX - window.innerWidth/2;
        let deltaY = mouseY - window.innerHeight/2;

        var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI) ;
        setRotate(angle-180);
        console.log(rotate)
    })
})
  return (
    <div className='w-full h-screen '>
        <div className='Img-bg bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] bg-cover bg-center w-full h-full relative '>
            <div className='Eyes w-1/3 top-1/2  left-1/2 -translate-x-[50%] -translate-y-[50%] items-center justify-center  flex gap-5 absolute'>
            <div className='Eyes-white w-[15vw] flex items-center justify-center h-[15vw] bg-zinc-50 rounded-full '>
               <div className='Eyes-black w-2/3 h-2/3 bg-black rounded-full relative '>
               <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}}  className='line  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full   h-10'>
                        <div className='Eye-white w-10 h-10  rounded-full bg-zinc-50'></div>
                </div>
               </div>
            </div>
            <div className='Eyes-white w-[15vw] flex items-center justify-center h-[15vw] bg-zinc-50 rounded-full '>
               <div className='Eyes-black w-2/3 h-2/3 bg-black rounded-full relative'>
               <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}}  className='line  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full   h-10'>
                        <div className='Eye-white w-10 h-10  rounded-full bg-zinc-50'></div>
                </div>
               </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes 