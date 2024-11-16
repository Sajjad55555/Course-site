import React from 'react';
import Navbar3 from '../Components/Navbar3';
import Header from '../Components/header';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineHeadsetMic, MdOutlineUpload } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import Comprehensiv from '../Components/comprehensiv';
import AboutCards from '../Components/aboutCard';


export default function AboutUs() {
  return (
    <div className='relative w-full h-auto'>
      {/* Navbar */}
      <Navbar3 />

      {/* Header Section */}
      <Header />

      {/* Slide Bar */}
      <div className='absolute top-[794px] right-8 transform -translate-y-1/2 flex flex-col gap-2'>
        <div className='w-[50px] h-[50px] rounded-full bg-[#296DEA] text-white text-2xl flex items-center hover:text-blue-500 justify-center cursor-pointer'>
          <CiHeart />
        </div>
        <div className='w-[50px] h-[50px] rounded-full bg-[#296DEA] text-white text-2xl flex items-center hover:text-blue-500 justify-center cursor-pointer'>
          <AiOutlineShoppingCart />
        </div>
        <div className='w-[50px] h-[50px] rounded-full bg-[#296DEA] text-white text-2xl flex items-center hover:text-blue-500 justify-center cursor-pointer'>
          <MdOutlineHeadsetMic />
        </div>
        <div className='w-[50px] h-[50px] rounded-full bg-[#296DEA] text-white text-2xl flex items-center hover:text-blue-500 justify-center cursor-pointer'>
          <MdOutlineUpload />
        </div>
      </div>

      {/* Body Section start */}
      <div className='w-full h-auto flex justify-center mt-10 '>
        <div className='w-full max-w-[1000px] flex flex-col items-center md:items-start'>
           <div className='font-semibold text-xl'>Comprehinsive Marketing Class</div>
           <div className='flex flex-wrap gap-2 mt-4'> <Comprehensiv/></div>
           <div className='flex flex-wrap gap-6  justify-center'>
            <AboutCards/>
           </div>
        </div>
      </div>
      {/* Body Section end */}
      {/* footer Section start */}


      
      {/* Body Section end */}
    </div>
  );
}
