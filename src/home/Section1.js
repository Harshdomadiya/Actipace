import React from "react";
import bg1 from "./bg1.jpg";
import logo from "./acticipace_logo.png";
import Heading1 from "./Heading1.png";
import HomeEmg from "./HomeEmg.png";
import Clip from "./Clip.png";
import image1 from "./Image1.png";
import image2 from "./Frame851.png";

function Section1() {
  return (
    <>
      <div className="flex items-center justify-center top-20 ">
        {/* awepofjweaof naew f */}
        <img src={Heading1} alt="" className="w-2/3 h-13 top-14 left-16" />
      </div>
      <div className="my-10">
        We believe everyone has the right to be safe online, which is why we
        offer our <br />
        award-winning <u> free antivirus </u> to millions of people around the
        world.
      </div>

      <button className="bg-[#31BF5C] text-white font-Roboto py-2 px-2 mx-10 my-6 top-10 left-10 rounded-3xl">
        Free Download
      </button>
      <div class="flex items-center justify-center h-50vh relative top-44">
        <div class="flex items-center justify-center h-50vh absolute  left-1/3 -top-16">
          <img src={Clip} className=" w-10px h-10 rounded-xl"></img>
        </div>
        <div class="flex items-center justify-center h-50vh absolute  left-50 -top-10 ">
          <img src={HomeEmg} className=" w-1120px h-60 rounded-xl"></img>
        </div>
        <img src={bg1} className=" w-1120px h-60 rounded-xl"></img>
      </div>
      <div className="flex items-center justify-center top-14">
        {/* awepofjweaof naew f */}
        <img src={image1} alt="" className="w-full h-13 top-14 left-16" />
      </div>
      <div className="flex items-center justify-center top-4">
        {/* awepofjweaof naew f */}
        <img src={image2} alt="" className="w-1120px h-60 " />
      </div>
    </>
  );
}

export default Section1;
