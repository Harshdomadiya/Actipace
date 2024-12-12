import React from "react";
import background from "./image/Background.png";
import bg2 from "./image/Bg2.png";
import mission from "./image/Mission.png";
import section from "./image/Section.png";
import vision from "./image/Vision.png";
import emogy from "./image/emogy.png";
import actipace_a from "./image/actipace-a.png";

function About() {
  return (
    <div>
      <div className="ml-20 flex items-center justify-center container">
        <img src={section} className="w-2/3 mx-8" />
        <img src={actipace_a} alt="" className="w-1/6 " />
      </div>
      <div className="absolute bottom-4 right-24 ">
        <button className="w-10 h-10 flex items-center justify-center text-white">
          <img src={emogy}></img>
        </button>
      </div>
      <div className="flex justify-center items-center w-3/6 h-3/4 mx-80 my-10">
        <img src={bg2} className="" />
      </div>
      <div>
        <img src={background} />
      </div>
      <div>
        <img src={vision} />
      </div>
      <div>
        <img src={mission} />
      </div>
    </div>
  );
}

export default About;
