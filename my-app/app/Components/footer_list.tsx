"use client"
import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
const FooterList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white text-black p-4 border rounded h-[45px] w-[215px]">
      <div 
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleList}
      >
        <span className="font-bold">한국어</span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
        <MdKeyboardArrowDown className='text-2xl' />
        </span>
      </div>

      {isOpen && (
        <ul className="mt-2 pl-4 list-disc">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      )}
    </div>
  );
};

export default FooterList;
