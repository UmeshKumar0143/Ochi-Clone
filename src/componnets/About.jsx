import React from "react";
import { FaArrowRight } from "react-icons/fa";


const About = () => {
  return (
    <div className="w-full border bg-[#CDEA68] h-[160vh]">
      <div className='Intro w-[85vw]    font-["Neue Montreal"]  mt-20 ml-12'>
        <p className="text-5xl tracking-wide  ">
          Ochi is a strategic presentation agency for forward-thinking
          businesses that need to <span className="underline">raise funds</span>{" "}
          , <span className="underline">sell prod­ucts</span>,{" "}
          <span className="underline">ex­plain com­plex ideas</span>, and{" "}
          <span className="underline">hire great peo­ple</span>.
        </p>
      </div>
      <div className="Middle-div h-[20vw] flex px-4 border-b border-zinc-400 border-t mt-8 py-6">
        <div className="w-[50%]">
          <h1>What can you expect: </h1>
        </div>
        <div className="w-[25%] flex flex-col gap-8">
          <p>
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it’s live or digital,
            delivered for one or a hundred people.
          </p>
          <p>
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
        </div>
        <div className=" flex   items-center">
            <div className="ml-16">
            <h6>S:</h6>
            <div className="flex flex-col ">
            {["Instagram","Behance","Facebook","Linkedin"].map((item,index)=><a className="underline">{item}</a>)}
            </div>
            </div>
        </div>
      </div>
      <div className="last-div w-full flex py-8">
        <div className="flex w-[50%] flex-col gap-5 ml-28 ">
            <h1 className="text-5xl ">Our approach: </h1>
            <div className='buton-div flex  font-["Neue Montreal"] items-center gap-2'> 
        <button className='px-5 border-2 flex  items-center gap-2 bg-black text-white border-zinc-700 rounded-full uppercase  py-2'>Read More<span className='-rotate-[45deg] border-zinc-700 border-2  rounded-full py-2 px-2'><FaArrowRight className='font-light text-lg' /></span></button>
        
        </div>
        </div>
        <div className="mr-10">
            <img className="rounded-lg " src={'/person.jpg'} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
