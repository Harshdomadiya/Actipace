import React from "react";
import bg1 from "./bg1.jpg";
import logo from "./acticipace_logo.png";
import Heading1 from "./Heading1.png";
import HomeEmg from "./HomeEmg.png";
import Clip from "./Clip.png";
import image1 from "./Image1.png";
import Frame851 from "./Frame851.png";
import image2 from "./Image2.png";
import Frame840 from "./Frame840.png";
import Background from "./Background.png";
import Background1 from "./Background(1).png";
import Container from "./Container.png";

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
      <div>
        <div className="flex items-center justify-center my-12 top-14 relative">
          <div class="flex items-center justify-center  h-50vh absolute -top-11">
            <div class="flex items-center justify-center h-50vh absolute  left-1/3 -top-16">
              {/* green errows over center image */}
              <img src={Clip} className=" w-10px h-10 rounded-xl"></img>
            </div>
            {/* black window over green image */}
            <div class="flex items-center justify-center h-50vh absolute  left-50 -top-10 ">
              <img src={HomeEmg} className=" w-1120px h-60 rounded-xl"></img>
            </div>
            {/* green image */}
            <img src={bg1} className=" w-1120px h-60 rounded-xl"></img>
          </div>
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
      <div className="flex ">
        <div className="absolute flex items-end justify-end my-96">
          <div className=" flex justify-end items-end">
            <div>
              <div className="absolute flex items-center justify-center top-2 right-5">
                <img src={Container} alt="" className="w-1/3" />
              </div>
              <img
                src={Background}
                alt=""
                className="w-1/2 flex items-center justify-center top-2 right-5"
              />
            </div>
            <div>
              <img src={Background1} alt="" className="w-40 h-96" />
            </div>
          </div>
        </div>
        <img src={Frame840} alt="" className="w-full h-13 -my-14" />
      </div>
    </>
  );
}

export default Section1;
