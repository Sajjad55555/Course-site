import { FaCircleChevronRight,FaCircleChevronLeft } from "react-icons/fa6";
import Home_cards from "./home_cards";

export default function Landing_class_card() {
  return (
    <>
    <div className='w-full flex flex-wrap justify-center mt-8'>
        <div className='w-[950px]'>
            {/* title div start */}
            <div className="flex justify-between flex-wrap">
                <div className="text-2xl font-semibold ">High-Density Class.</div>
                <div className="flex gap-2">
                <div><FaCircleChevronLeft  className=" text-[#A6A6A8] hover:text-[#FF6016]" /></div>
                    <div><FaCircleChevronRight className=" text-[#A6A6A8] hover:text-[#FF6016]" /></div>
                    
                </div>
            </div>
            {/* card div start */}
            <div className="flex flex-wrap gap-2 justify-center"><Home_cards/></div>
        </div>

    </div>
    
    
    
    
    
    </>
  )
}
