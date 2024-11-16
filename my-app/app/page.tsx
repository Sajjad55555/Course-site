import Navebar from "./Components/Navbar ";
import Footer from "./Components/footer";
import Landing from "./Components/landing";
import Landing_class_card from "./Components/landing_class_card";
export default function Home() {
  return (
    <div >
<Navebar/>
<Landing/>
{/* event banner div start*/}
<div className="w-full flex justify-center mt-10">
  <div className="w-[950px] h-[100px] bg-[#FF6016] items-center flex justify-center">
    <div className=" uppercase text-white text-[30px]">event banner</div>
  </div>
</div>
{/* event banner div end*/}
{/* card div start*/}
<div className="">
  <Landing_class_card/>
  <Landing_class_card/>
  <Landing_class_card/>
</div>
{/* card div end*/}
{/* footer section */}
<div className="mt-16">
  <Footer/>
</div>

    </div>
  );
}
