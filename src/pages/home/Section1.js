import React from "react";
import bg1 from "./image/cleanup_bg.jpg.svg";
import Heading1 from "./image/Heading1.png";
import HomeEmg from "./image/Home.svg";
import Clip from "./image/Clip.png";
import image1 from "./image/Image1.png";
import Frame851 from "./image/Frame851.png";
import image2 from "./image/Image2.png";
import Frame840 from "./image/Frame840.png";
import Background from "./image/Background.png";
import Background1 from "./image/Background(1).png";
import actipace_a from "./image/actipace-a.png";
import heading2 from "./image/Heading 2.svg";
import frame1 from "./image/Frame 1.svg"
import { Link } from "react-router-dom";
import { IoGridSharp } from "react-icons/io5";

function Section1() {
  return (
    <div className="w-full h-full relative">
      <div className="flex justify-center h-[430px] items-center">
        {/* Free antivirus is your ... heading*/}
        <div className="space-y-10 flex justify-between flex-col items-center">
          <img src={Heading1} alt="head" className="w-[1000px] h-13  mx-20 " />
          <div className="flex flex-col items-center font-[400px] text-[14px]">
             We believe everyone has the right to be safe online, which is why we
             offer our
             <p>
             award-winning <u> free antivirus </u> to millions of people around the
             world.
             </p>
          </div>
          <div>
          <Link to={"/extrapage"}>
          <button className=" bg-[#31BF5C] text-white font-Roboto rounded-[400px] w-[200px] h-[50px] flex justify-center items-center gap-3 text-[14px] hover:scale-95 transition-all duration-200">
            <IoGridSharp className="w-[25px] h-[25px]"/>
            Free Download
          </button>
          </Link>
          </div>
        </div>
        
        <img src={actipace_a} alt="a" className="absolute ml-[1238px] w-[280px] h-[350px] mb-[50px]" />
      </div>
      
      <div className="relative">
        <div className="flex items-center justify-center my-12 top-14 relative">
          <div className="flex items-center justify-center  h-50vh absolute -top-11">
            <div className="flex justify-center h-50vh mb-[580px] mr-[190px] absolute">
              {/* green errows over center image */}
              {/* harsh */}
              <img src={Clip} alt="C" className="mr-[430px]"></img>
            </div>
            {/* black window over green image */}
            <div className="flex items-center justify-center h-50vh absolute  left-50 mb-[130px]">
              <img src={HomeEmg} alt="home" className=" w-[680px] h-[420px] rounded-xl "></img>
            </div>
            {/* green image */}
            <img src={bg1} alt="bg1" className=" w-[1000px] h-[430px] rounded-xl"></img>
          </div>
          {/* harsh */}
          {/* actipace total security image */}
          <div className="flex items-center  justify-center h-10 bottom-0 absolute">
            <div className="flex items-center  justify-center mb-[600px] absolute">
              <img src={Frame851} alt="851" className="h-[600px] w-[1000px]" />
            </div>
            {/* half green image */}
            <img src={image2} alt="i2" className="mb-[100px]" />
          </div>
          {/*  its to easy to install big bg image*/}
          <img src={image1} alt="i1" className="mt-[100px]" />
        </div>
      </div>
      {/* level up  your quality  of work */}
      <div className="flex items-end justify-end ">
        <img src={Frame840} alt="840" className="w-full h-13 -my-14 " />
        
      </div>
      
      {/* harsh */}
      <div className="relative h-[650px]">
        {/* <div className=" flex justify-end items-end"> */}
        <div className="flex absolute ml-[250px]">
          
            <img src={Background} alt="B" className="w-[800px] h-[550px]" />

          <div>
            {/* light green pillar  */}
            <img src={Background1} alt="B" className="w-[550px] h-[550px]" />
          </div>
        </div>
       
        <div className="absolute flex items-center flex-col justify-center w-full mt-[50px] gap-5">
          {/* level up your quality work */}
          
          <img src={heading2} alt="C" className="h-[70px] w-[800px]" />
          <img src={frame1} alt="" className=" w-[800px] h-[410px] border rounded-[10px] shadow-custom3 object-cover"/>
          
        </div>

        {/* </div> */}
      </div>
    </div>
  );
}

export default Section1;
