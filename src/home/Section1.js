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
import actipace_a from "./image/actipace-a.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Section1() {
  return (
    <div className="w-full h-full relative">
      <div className="flex justify-center h-[430px] items-center">
        {/* Free antivirus is your ... heading*/}
        <div className="space-y-10 flex justify-between flex-col items-center">
          <img src={Heading1} alt="" className="w-[1000px] h-13  mx-20 " />
          <div className="flex flex-col items-center font-[400px] text-[14px]">
             We believe everyone has the right to be safe online, which is why we
             offer our
             <p>
             award-winning <u> free antivirus </u> to millions of people around the
             world.
             </p>
          </div>
          <div>
          
          <button className=" bg-[#31BF5C] text-white font-Roboto rounded-[400px] w-[200px] h-[50px]">
          <FontAwesomeIcon icon="fa-solid fa-rocket"  className="bg-red-950"/>
            Free Download
          </button>
          </div>
        </div>
        
        <img src={actipace_a} alt="" className="absolute ml-[1238px] w-[280px] h-[350px] mb-[50px]" />
      </div>
      
      <div>
        <div className="flex items-center justify-center my-12 top-14 relative">
          <div class="flex items-center justify-center  h-50vh absolute -top-11">
            <div class="flex justify-center h-50vh mb-[580px] mr-[190px] absolute">
              {/* green errows over center image */}
              {/* harsh */}
              <img src={Clip} className="mr-[500px]"></img>
            </div>
            {/* black window over green image */}
            <div class="flex items-center justify-center h-50vh absolute  left-50 mb-[130px]">
              <img src={HomeEmg} className=" w-[680px] h-[420px] rounded-xl "></img>
            </div>
            {/* green image */}
            <img src={bg1} className=" w-[1000px] h-[430px] rounded-xl"></img>
          </div>
          {/* harsh */}
          {/* actipace total security image */}
          <div className="flex items-center  justify-center h-10 bottom-0 absolute">
            <div className="flex items-center  justify-center mb-[600px] absolute">
              <img src={Frame851} alt="" className="h-[600px] w-[1000px]" />
            </div>
            {/* half green image */}
            <img src={image2} alt="" className="mb-[100px]" />
          </div>
          {/*  its to easy to install big bg image*/}
          <img src={image1} alt="" className="mt-[100px]" />
        </div>
      </div>
      {/* level up  your quality  of work */}
      <div className="flex items-end justify-end ">
        <img src={Frame840} alt="" className="w-full h-13 -my-14 " />
      </div>
      {/* harsh */}
      <div className="relative h-[650px]">
        {/* <div className=" flex justify-end items-end"> */}
        <div className="flex absolute ml-[250px]">
          
            <img src={Background} alt="" className="w-[800px] h-[550px]" />

          <div>
            {/* light green pillar  */}
            <img src={Background1} alt="" className="w-[550px] h-[550px]" />
          </div>
        </div>
       
        <div className="absolute flex items-center justify-center w-full">
          {/* level up your quality work */}
          <img src={Container} alt="" className="h-[600px] w-[800px]" />
        </div>

        {/* </div> */}
      </div>
    </div>
  );
}

export default Section1;
