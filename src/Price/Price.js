import React from "react";
import bg1 from "./image/Bg-1.png";
import bg2 from "./image/Bg-2.png";
import bg3 from "./image/Bg-3.png";
import sec1 from "./image/Section1.png";
import sec2 from "./image/Section.png";
import emogy from "./image/emogy.png";
import actipace_a from "./image/actipace-a.png";

function Price() {
  return (
    <div className="ml-10 mx-10">
      <div className="flex items-center justify-center container">
        <img src={sec1} className="w-2/3 mx-40" />
        <img src={actipace_a} alt="" className="w-1/6 " />
      </div>
      <div className="absolute bottom-4 right-4">
        <button className="w-10 h-10 flex items-center justify-center text-white">
          <img src={emogy}></img>
        </button>
      </div>
      <div className="w-2/3 mx-56 grid grid-cols-1 md:grid-cols-3 gap-2">
        <div>
          <img src={bg1} className="w-245.09 h-767.24" />
        </div>
        <div>
          <img src={bg2} className="w-248.37 h-767.24" />
        </div>
        <div>
          <img src={bg3} className="w-243.45 h-767.24" />
        </div>
      </div>

      <div className="w-2/3 mx-32 my-10">
        <img src={sec2} className="ml-14 w-1200 h-421 top-1458 left-300" />
      </div>
    </div>
  );
}

export default Price;
