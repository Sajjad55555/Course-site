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
    <>
      <div className="w-full flex flex-wrap justify-center mt-8">
        <div className="w-[1050px]">
          {/* title div start */}
          <div className="flex justify-between flex-wrap">
            <div className="text-2xl font-semibold">High-Density Class.</div>
            <div className="flex gap-2">
              <div>
                <FaCircleChevronLeft
                  className="text-[#A6A6A8] hover:text-[#FF6016] cursor-pointer"
                  onClick={handleScrollLeft}
                />
              </div>
              <div>
                <FaCircleChevronRight
                  className="text-[#A6A6A8] hover:text-[#FF6016] cursor-pointer"
                  onClick={handleScrollRight}
                />
              </div>
            </div>
          </div>
          {/* card div start */}
          <div
            ref={cardContainerRef}
            className="flex gap-4 overflow-x-hidden mt-4"
          >
            <HomeCards />
          </div>
        </div>
      </div>
    </>
  );
}

// Removed CSS related to scrollbar hiding as it's no longer needed.
