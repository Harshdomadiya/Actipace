import React from "react";
import bg1 from "./image/cleanup_bg.jpg.svg";
import Heading1 from "./image/Heading1.png";
import HomeEmg from "./image/Home.svg";
import Clip from "./image/Clip.png";
import image1 from "./image/Image1.png";
import image2 from "./image/Image2.png";
import Frame840 from "./image/Frame 840.svg";
import Background from "./image/Background.png";
import Background1 from "./image/Background(1).png";
import actipace_a from "./image/actipace-a.png";
import heading2 from "./image/Heading 2.svg";
import frame1 from "./image/video_homepage.webm.png"
import { Link, useNavigate } from "react-router-dom";
import { IoGridSharp } from "react-icons/io5";
import WhyChooseUs from "./slider/WhyChooseUs"

function Section1() {
  const navigate = useNavigate();

  return (
    <div className="w-full lg:h-full relative">
      <div className="hidden lg:w-full lg:absolute  lg:h-[350px] lg:flex lg:justify-end">
        <img src={actipace_a} alt="a" className="absolute w-[280px] h-[350px]" />
        </div>
      <div className="mt-[56px] flex lg:justify-center lg:h-[430px] lg:items-center lg:mt-0">
        {/* Free antivirus is your ... heading*/}
        <div className="space-y-10 flex justify-between flex-col items-center">
          <img src={Heading1} alt="head" className="lg:w-[1000px] lg:h-13  lg:mx-20 " />
          <div className="flex flex-col items-center font-[400px] text-[10px] lg:text-[14px] lg:flex-col lg:items-center">
             We believe everyone has the right to be safe online, which is why we
             offer our
             <p>
             award-winning <u> free antivirus </u> to millions of people around the
             world.
             </p>
          </div>
          <div>
          <Link to={"/download"}>
          <button className=" bg-[#31BF5C] text-white font-Roboto rounded-[400px] w-[200px] h-[50px] flex justify-center items-center gap-3 text-[14px] hover:scale-95 transition-all duration-200">
            <IoGridSharp className="w-[25px] h-[25px]"/>
            Free Download
          </button>
          </Link>
          </div>
        </div>
        
      </div>
      
      <div className="relative  z-10">
        <div className="flex items-center justify-center my-12 lg:top-14 relative">
          <div className="flex items-center justify-center  h-50vh absolute -top-11">
            <div className="w-[70px] mb-[330px] ml-[160px] flex justify-center lg:w-full lg:h-50vh lg:mb-[580px] lg:mr-[190px] lg:ml-0 absolute">
              {/* green errows over center image */}
              {/* harsh */}
              <img src={Clip} alt="C" className="mr-[430px]"></img>
            </div>  
            {/* black window over green image */}
            <div className="flex items-center justify-center h-50vh absolute  left-50 mb-[130px]">
              <img src={HomeEmg} alt="home" className="w-[250px]  lg:w-[680px] lg:h-[420px] rounded-xl "></img>
            </div>
            {/* green image */}
            <img src={bg1} alt="bg1" className="p-3 w-[1000px] h-[430px] rounded-xl lg:p-0"></img>
          </div>
          {/* harsh */}
          {/* actipace total security image */}
          <div className="flex items-center  justify-center h-10 bottom-0 absolute ">
            <div className="flex items-center mb-[100px]  justify-center lg:mb-[600px] absolute">
              <WhyChooseUs className="h-[300px] w-[300px]  lg:h-[600px] lg:w-[1000px]" t1={"Actipace"} t2={"Total Security"}/>
              
            </div>
            
            <img src={image2} alt="i2" className="mt-[140px] h-[200px] lg:h-[450px]  lg:mb-[100px] lg:mt-0" />
          </div>
          {/*  its to easy to install big bg image*/}
          <img src={image1} alt="i1" className="mt-[130px] h-[500px] lg:h-[1280px] lg:mt-[100px] object-cover" />
        </div>
      </div>
      <div className="w-full h-[320px] lg:h-[510px] relative z-8 mt-[-105px] lg:mt-[-50px] " >
          <img src={Frame840} alt="840" className="absolute h-[550px]  lg:w-full lg:object-cover" />
          <div className="absolute z-11 mt-[250px] flex justify-center items-center w-full lg:mt-[441px]">
              <button onClick={()=>navigate("/download")} className="text-[11px] absolute w-[120px]  h-[35px] text-[#31BF5C] bg-white font-Roboto rounded-[400px] lg:w-[220px] lg:h-[55px] flex justify-center font-semibold items-center gap-3 lg:text-[14px]">
                <IoGridSharp className="w-[20px] h-[20px] lg:w-[25px] lg:h-[25px]"/>
                Free Download
              </button>
          </div>
      </div>
      <div className="relative lg:h-[650px]">
        
        <div className="flex absolute ml-[20px] lg:ml-[250px]">
          
            <img src={Background} alt="B" className="lg:w-[800px] lg:h-[550px]" />

          <div>
            {/* light green pillar  */}
            <img src={Background1} alt="B" className="lg:w-[550px] lg:h-[550px]" />
          </div>
        </div>
       
        <div className="absolute flex items-center flex-col gap-4 justify-center w-full mt-[35px] lg:mt-[65px] lg:gap-7">
          {/* level up your quality work */}
          
          <img src={heading2} alt="C" className="w-[300px] lg:h-[70px] lg:w-[800px]" />
          <img src={frame1} alt="" className="w-[300px] lg:h-[450px] lg:w-[800px] rounded-[10px]  object-cover"/>
          
        </div>

        {/* </div> */}
      </div>
    </div>
  );
}

export default Section1;
