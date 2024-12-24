import React from "react";
import Border1 from "./image/Border1.png";
import Border2 from "./image/Border2.png";
import Border3 from "./image/Border3.png";
import Border4 from "./image/Border4.png";
import Border5 from "./image/Border5.png";
import Border6 from "./image/Border6.png";
import Section from "./image/Section.png";
import SectionErrow from "./image/SectionErrow.png";
import Section2 from "./image/Section2.png";
import Section3 from "./image/Section3.png";
import secondaryarrow from "./image/secondaryarrow.png";
import { Link } from "react-router-dom";

function Grid() {
  return (
    <>
      {/* <div className="grid grid-cols-1"> */}
      <div className="grid  grid-cols-3 gap-8 w-[1000px]  container mx-64  px-4">
        <img src={Border1} alt=""></img>
        <img src={Border2} alt=""></img>
        <img src={Border3} alt=""></img>
        <img src={Border4} alt=""></img>
        <img src={Border5} alt=""></img>
        <img src={Border6} alt=""></img>
      </div>
      <div className="w-2/3 container mx-48 px-4">
        <img src={SectionErrow} alt="" className="w-24"></img>
      </div>
      <div className="relative h-[800px]">
        <div className="flex items-center justify-center flex-col">
          <img src={Section} alt="" className="w-[1100px]"></img>
          <div className="absolute mr-[250px] mt-[700px]">
            <img src={Section2} alt=""></img>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-center w-full">
          <img src={Section3} alt="" className="w-[1000px]"></img>
        </div>
        <div className="flex  flex-col items-center gap-4 mt-[30px] mb-[30px]">
          <div className="">
            <Link to="/extrapage"><button className="bg-[#31BF5C] text-white font-Roboto py-3 px-3  rounded-md">
              Start now - It's free
            </button></Link>
          </div>
          <div >
            <img src={secondaryarrow} alt="" className=""></img>
          </div>
          <div className="flex justify-center flex-col items-center text-[11px]">
            <div className="font-Inter ">No credit card required</div>
            <div>Instant access</div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Grid;
