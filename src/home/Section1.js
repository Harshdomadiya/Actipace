import React from "react";
import bg1 from "./image/bg1.jpg";
import Heading1 from "./image/Heading1.png";
import HomeEmg from "./image/HomeEmg.png";
import Clip from "./image/Clip.png";
import image1 from "./image/Image1.png";
import Frame851 from "./image/Frame851.png";
import image2 from "./image/Image2.png";
import Frame840 from "./image/Frame840.png";
import Background from "./image/Background.png";
import Background1 from "./image/Background(1).png";
import Container from "./image/Container.png";

function Section1() {
  return (
    <>
      <div className="flex items-center justify-center top-20 ">
        {/* awepofjweaof naew f */}
        <img src={Heading1} alt="" className="w-2/3 h-13 top-14 left-16" />
      </div>
      <div className="my-10 mx-80">
        We believe everyone has the right to be safe online, which is why we
        offer our
      </div>
      <div className="mx-96 -my-10">
        award-winning <u> free antivirus </u> to millions of people around the
        world.
      </div>
      <button className=" bg-[#31BF5C] text-white font-Roboto py-2 mx-96   px-12 my-14  rounded-3xl">
        Free Download
      </button>
      <div>
        <div className="flex items-center justify-center my-12 top-14 relative">
          <div class="flex items-center justify-center  h-50vh absolute -top-11">
            <div class="flex items-center justify-center h-50vh absolute  left-1/3 -top-16">
              {/* green errows over center image */}
              {/* harsh */}
              <img src={Clip} className=" w-10px h-10 rounded-xl"></img>
            </div>
            {/* black window over green image */}
            <div class="flex items-center justify-center h-50vh absolute  left-50 -top-10 ">
              <img src={HomeEmg} className=" w-1120px h-60 rounded-xl"></img>
            </div>
            {/* green image */}
            <img src={bg1} className=" w-1120px h-60 rounded-xl"></img>
          </div>
          {/* harsh */}
          {/* actipace total security image */}
          <div className="flex items-center  justify-center h-10 bottom-0 absolute">
            <div className="flex items-center  justify-center h-10 bottom-1/3 absolute">
              <img src={Frame851} alt="" className="w-1/2 h-100" />
            </div>
            {/* half green image */}
            <img src={image2} alt="" className="w h-100 top-3" />
          </div>
          {/*  its to easy to install big bg image*/}
          <img src={image1} alt="" className="w-100 h-1/4 top-14 left-16" />
        </div>
      </div>
      {/* level up  your quality  of work */}
      <div className="flex items-end justify-end ">
        <img src={Frame840} alt="" className="w-full h-13 -my-14" />
      </div>
      {/* harsh */}
      <div className="flex items-end  justify-end  ">
        {/* <div className=" flex justify-end items-end"> */}

        <div className="absolute left-1/3">
          <img src={Background} alt="" className="w-8/12  left-10" />
        </div>

        <div>
          {/* light green pillar  */}
          <img src={Background1} alt="" className="w-72 h-96" />
        </div>
        <div className="absolute right-96">
          {/* level up your quality work */}
          <img src={Container} alt="" className=" w-96 h-96" />
        </div>

        {/* </div> */}
      </div>
    </>
  );
}

export default Section1;
