import React from "react";
import a from "../home/image/actipace-a.png"
import rm from "./image/Frame 848.png"
import tex from "./image/Group 77.svg"
import { Link } from "react-router-dom";

const Product = () => {
    return (
      <div className="relative w-full h-full">
        <div className="absolute">
                        <img src={a} alt="" className="ml-[1238px] w-[280px] h-[350px] mt-[-50px]"/>
          </div>
        <div className="w-full h-[500px]">
            
            <div className="flex  justify-center gap-20 mt-[50px]">

                <div className="flex flex-col gap-10 mt-[40px]">

                    <div className="">
                        <img
                            src={tex}
                            alt="Actipace Antivirus"
                            className="w-[550px] h-[70px]"
                        />
                    </div>


                    <p className="w-[550px] h-[30px] font-[400px] text-[15px] text-[#071D2B] ml-[30px]">
                        We believe that wherever you live, whatever you love, wherever you’re
                        going, and whatever you do, you have the right to live freely and
                        safely online.
                    </p>


                    <div className="flex gap-6 ml-[30px] mt-4 z-10">
                       <Link to="/price"> <button type="submit" className="px-6 py-3 bg-green-600 text-white font-semibold  hover:bg-green-700 rounded-[400px] w-[220px] h-[50px] shadow-custom2">
                            Actipace Total Security
                        </button></Link><Link to="/price">
                        <button className="px-6 py-3 bg-green-600 text-white font-semibold  hover:bg-green-700 rounded-[400px] w-[220px] h-[50px] shadow-custom2">
                            Actipace Antivirus
                        </button></Link>
                    </div>
                </div>
                
                <div className="">
                        <img
                            src={rm}
                            alt="Actipace Demo"
                            className="h-[400px] w-[400px]"
                        />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Product;