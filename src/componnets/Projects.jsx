import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
const Projects = () => {
  return (
    <div className='w-full h-[120vw]'>
        <div className='Top-Heading w-full h-[13vw] flex px-10 items-center border-b-[2px]'>
                <h1 className='text-5xl  font-["Neue Montreal"]  '>Featured projects</h1>
        </div>

        <div className='projects-container-1 h-[40vw] w-full items-center px-4 gap-5 flex   '>
            <div className='w-1/2 py-5 projects relative px-5 h-[40vw]' >
            <div className='Sub-heading flex items-center gap-2'>
            <div className='w-2 h-2 rounded-full bg-black'></div>
            <h6>Cardboard Spaceship</h6>
            </div>
            <div className='Text absolute items-center justify-center  flex -translate-x-1/2 left-full top-1/2  bg-red-500 w-[25vw]  '>
            {'Cardboard'.split("").map((item,index)=><span className='text-[#CDEA68] uppercase font-semibold font-["Neue Montreal"] text-5xl '>{item}</span>)}
            </div>
            <div className='img py-5'>
                    <img className='rounded-xl' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
            </div>
            <div className="buttons gap-2 flex ">
            <button className='px-4  border-2 border-zinc-700 rounded-full uppercase text-sm  py-1'>Branded Template</button>
            <button className='px-4 border-2 border-zinc-700 rounded-full uppercase text-sm    py-1'>Sales Deck</button>
            <button className='px-4 border-2 border-zinc-700 rounded-full uppercase  text-sm   py-1'>Social Media Templates</button>
            </div>
            </div>
            <div className='w-1/2 py-5 projects-2 px-5 h-[40vw]' >
            <div className='Sub-heading flex items-center gap-2'>
            <div className='w-2 h-2 rounded-full bg-black'></div>
            <h6>AH2 & Matt Horn</h6>
            </div>
            <div className='img py-5'>
                    <img className='rounded-xl' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" alt="" />
            </div>
            <div className="buttons gap-2 flex ">
            <button className='px-4  border-2 border-zinc-700 rounded-full uppercase text-sm  py-1'>Pitch Deck</button>
            </div>
            </div>
        </div>
        
        <div className='projects-container-2 mt-24 h-[40vw] w-full items-center px-4 gap-5 flex   '>
            <div className='w-1/2 py-5 projects px-5 h-[40vw]' >
            <div className='Sub-heading flex items-center gap-2'>
            <div className='w-2 h-2 rounded-full bg-black'></div>
            <h6>FYDE</h6>
            </div>
            <div className='img py-5'>
                    <img className='rounded-xl' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
            </div>
            <div className="buttons gap-2 flex ">
            <button className='px-4  border-2 border-zinc-700 rounded-full uppercase text-sm  py-1'>Audit</button>
            <button className='px-4 border-2 border-zinc-700 rounded-full uppercase text-sm    py-1'>Copy Writing </button>
            <button className='px-4 border-2 border-zinc-700 rounded-full uppercase  text-sm   py-1'>Sales Deck</button>
            <button className='px-4 border-2 border-zinc-700 rounded-full uppercase  text-sm   py-1'>Slides Design</button>
            </div>
            </div>
            <div className='w-1/2 py-5 projects px-5 h-[40vw]' >
            <div className='Sub-heading flex items-center gap-2'>
            <div className='w-2 h-2 rounded-full bg-black'></div>
            <h6>VISE</h6>
            </div>
            <div className='img py-5'>
                    <img className='rounded-xl' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
            </div>
            <div className="buttons gap-2 flex ">
            <button className='px-4  border-2 border-zinc-700 rounded-full uppercase text-sm  py-1'>Agency</button>
            <button className='px-4  border-2 border-zinc-700 rounded-full uppercase text-sm  py-1'>Company Representation</button>
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