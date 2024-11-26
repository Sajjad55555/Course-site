'use client';

import { useRef } from "react";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import HomeCards from "./home_cards";

export default function LandingClassCard() {
  // Create a reference for the scrollable container
  const cardContainerRef = useRef<HTMLDivElement | null>(null);

  // Function to handle right scroll
  const handleScrollRight = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: 300, // Adjust scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  // Function to handle left scroll
  const handleScrollLeft = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: -300, // Adjust scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full flex justify-center mt-8">
      <div className="max-w-full w-[1050px] px-4">
        {/* title div start */}
        <div className="flex justify-between items-center">
          <div className="text-2xl font-semibold">High-Density Class</div>
          <div className="flex gap-2">
            <FaCircleChevronLeft
              className="text-[#A6A6A8] hover:text-[#FF6016] cursor-pointer"
              onClick={handleScrollLeft}
            />
            <FaCircleChevronRight
              className="text-[#A6A6A8] hover:text-[#FF6016] cursor-pointer"
              onClick={handleScrollRight}
            />
          </div>
        </div>
        {/* card div start */}
        <div
          ref={cardContainerRef}
          className="flex gap-4 overflow-x-auto mt-4 pb-2"
        >
          <HomeCards />
        </div>
      </div>
    </div>
  );
}
