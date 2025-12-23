import React from 'react'

import leftImg from "../images/left_img.png";
import rightImg from "../images/right_img.png";

import write_code from "../images/write_code.png";
import join from "../images/join.png";


export default function TwoFeatureCards() {
  return (
    <section className="bg-[#26262B] p-8">
      <div className="mx-auto max-w-7xl px-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left Card */}
        <div className="bg-[#f5f1e8] rounded-2xl  flex flex-col justify-center  ">
         <div className=''>
             <img
            src={leftImg}
            alt="Write code"
            className="rounded-xl w-[750px] "
          />
         </div>
          <div className='w-[80%] m-auto mb-18'>
              <img
            src={write_code}
            alt="Write code"
            className="rounded-xl w-20 h-20 "
          />
          

          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            Write code
          </h3>
          <p className="text-gray-700">
            Create applications in more than 25 languages
          </p>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-[#3c517d] rounded-2xl text-white ">
           <div className='w-[80%] m-auto mt-16'>
             <img className='w-16 h-16 mb-4' src={join} alt="" srcset="" />
          <h3 className="text-2xl font-semibold mb-2">
            Join meetings in a click
          </h3>
          <p className="text-white/80 mb-6">
            Quickly access links to your meetings from menu bar
          </p>
           </div>
<div className='mt-14'>
    
          <img
            src={rightImg}
            alt="Meetings"
            className="rounded-xl w-full"
          />
</div>
        </div>

      </div>
      <button className='text-white flex gap-4 items-center m-auto mt-20 text-xl space-x-4.5 cursor-pointer'><svg width="27" height="21" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_277)">
<path d="M15 2L24.688 10.5L15 19M2 10.606H24.316" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_277">
<rect width="27" height="21" fill="white"/>
</clipPath>
</defs>
</svg>
View all superpowers</button>
<div className='flex justify-between gap-40 w-[65%] text-gray-200 m-auto mt-20  '>
    <p className='text-4xl font-bold'>Your Setapp journey.</p>
    <p className='text-lg w-[45%] text-gray-300'>Type in your task into Setapp search and get instant app
recommendations.</p>
</div>
<hr className="border-gray-400 mt-20 w-[65%] m-auto" />
    </section>
  );
}
