import { APP_LINKS } from "../utils/constant";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

export default function Navbar() {
  return (
    <>
      <div className="w-full h-auto md:h-[80px] font-[Pretendard] bg-[#FF6016] text-black flex flex-wrap items-center justify-between px-4 md:px-[200px]">
        {/* Home div */}
        <div className="text-center md:text-left">
          <span className="font-bold text-lg">spatial</span> <br className="md:hidden" />
          <span className="font-light">density</span>
        </div>

        {/* Links div */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-10 mt-2 md:mt-0">
          {APP_LINKS.map((link, index) => (
            <Link href={link.href} key={index}>
              <p className="font-normal text-sm md:text-base">{link.name}</p>
            </Link>
          ))}
        </div>

        {/* Input div */}
        <div className="relative ">
          <input
            type="text"
            
            className="h-[40px] w-[200px] md:w-[319px] border border-gray-300 px-3"
          />
          <div className="absolute right-2 top-2 text-2xl text-slate-500">
            <CiSearch />
          </div>
        </div>

        {/* Login div */}
        <div className="flex flex-col md:flex-row gap-2 mt-2 md:mt-0 text-center">
          <div className="cursor-pointer">Partnership Inquiry</div>
          <div className="cursor-pointer">Login</div>
        </div>
      </div>
    </>
  );
}







// import { APP_LINKS } from "../utils/constant";
// import Link from "next/link";
// import { CiSearch } from "react-icons/ci";
// export function InputDemo() {
//   return;
// }

// function Navebar() {
//   return (
    
//     <div className="flex flex-col h-[80px] md:flex-row font-[Pretendard]  text-black p-2 justify-center bg-[#FF6016]">
   
//     <div className="">spatial <br /> density</div>
    
//     {/* Navigation Links */}
//        <div className="flex flex-wrap gap-4 md:gap-10 justify-center  mx-20 items-center ">
//         {APP_LINKS.map((link, index) => (
//           <Link href={link.href} key={index}>
//             <p className="font-normal text-sm md:text-base">{link.name}</p>
//           </Link>
//         ))}
//       </div>
//       <div className="relative inline-block">
//   <input 
//     type="text" 
//     placeholder="" 
//     className="h-[40px] w-[319px]  border mt-2 -left-[1px] border-gray-300 focus:outline-none "
//   />
//   <div className="absolute right-2 top-[28px] text-3xl transform -translate-y-1/2 text-slate-500">
//     <CiSearch />
//   </div>
// </div>
//       <div className="flex gap-2 w-[63px] h-[23px] top-[28px] mx-4 ">
//       <div>Partnership Inquiry</div>
//       <div className="">Login</div>
//       </div>

      
      

   
    
//     </div>
//   );
// }

// export default Navebar;
