import React from "react";
import Frame840 from "./image/Frame 840.png";
import TopPC from "./image/TopPC.png";
import para1 from "./image/para1.png";
import para2 from "./image/para2.png";
import para3 from "./image/para3.png";

function Award() {
  return (
    <div>
      <div className="">
        <div className="w-1/3 absolute my-32 mx-96 ">
          <img src={para2} className="" />
        </div>
        <div className="w-1/3 absolute my-56 mx-96 ">
          <img src={para3} className="" />
        </div>
        <img src={Frame840} className=" " />
      </div>
      <div className=" my-24 mx-80 w-3/7    ">
        <img src={TopPC} classname="" />
        Our flagship security software keeps getting faster and easier to use,
        while
        <div className="mx-10">
          still giving best-in-class protection that won’t slow you down.
        </div>
      </div>
    </div>
  );
}

export default Award;
