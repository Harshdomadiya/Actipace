import React from "react";
import Frame836 from "./image/Frame 836.png";
import Frame853 from "./image/Frame 853.png";
import emogy from "./image/emogy.png";

function Product() {
  return (
    <div>
      <div className="">
        <img src={Frame836} />
      </div>
      <div>
        <img src={Frame853} className="" />
        <div className="absolute bottom-2 right-4">
          <button className="w-10 h-10 flex items-center justify-center text-white">
            <img src={emogy}></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
