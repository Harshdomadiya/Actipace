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

function Grid() {
  return (
    <>
      {/* <div className="grid grid-cols-1"> */}
      <div className="grid  grid-cols-3 gap-3 w-1/2  container mx-80 my-10 px-4">
        <img src={Border1}></img>
        <img src={Border2}></img>
        <img src={Border3}></img>
        <img src={Border4}></img>
        <img src={Border5}></img>
        <img src={Border6}></img>
      </div>
      <div className="w-2/3 container mx-64 px-4">
        <img src={SectionErrow} className="w-24"></img>
      </div>
      <div>
        <div className=" w-3/5 container mx-64 px-4">
          <img src={Section}></img>
          <div className="w-full h-full -mx-10 -my-10">
            <img src={Section2}></img>
          </div>
        </div>
      </div>
      <div className="w-1/2 mx-80 my-20">
        <img src={Section3} className="w-full"></img>
      </div>
      <div className="flex justify-center -my-10">
        <button className="bg-[#31BF5C] text-white font-Roboto py-3 px-3 mx-12 rounded-md">
          Start now - It's free
        </button>
      </div>
      <div className="my-12 mx-96">
        <img src={secondaryarrow} className="w-3 mx-60 my-10 "></img>
      </div>
      <div className="my-5 flex justify-center">
        <div className="font-Inter ">No credit card required</div>
        {/* <br /> */}
        {/* <div>Instant access</div> */}
      </div>
      <div className="my-5 flex justify-center">
        {/* <div className="font-Inter ">No credit card required</div> */}
        {/* <br /> */}
        <div>Instant access</div>
      </div>
    </>
  );
}

export default Grid;
