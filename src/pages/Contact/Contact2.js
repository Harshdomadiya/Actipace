import React from "react";
import ContInfo from "./image/Group 76.svg"
import Contact from "./image/Symbol.svg"
import email from "./image/Symbol-2.svg"
import location from "./image/Symbol-3.svg"
import share from "./image/Symbol-4.svg"
import facebook from "./image/Link.svg"
import twi from "./image/Link-2.svg"
import picsart from "./image/Link-3.svg"
import v from "./image/Link-4.svg"
function Contact2() {
  return (
    <div className="">
      <div className="w-[400px]">
                        <img
                            src={ContInfo}
                            alt="Contact Information"
                            className="w-[300px] mb-4"
                        />
                        <p className="text-[#071D2B] font-normal text-[14px]">
                            Get in touch and we’ll get back to you as soon as we can. We look
                            forward to hearing from you!
                        </p>


                        <div className="mt-8 space-y-3 text-[#071D2B]">
                            {/* Phone Number */}
                            <div className="p-4 bg-white rounded-[4px] shadow-custom flex items-center h-[70px]">
                                <div className="text-green-500 text-xs mr-4">
                                    <img src={Contact} alt=""/>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[1rem] ">Phone Number</h3>
                                    <p className=" text-xs">+(536) 84 95 62 45</p>
                                </div>
                            </div>
                            {/* Email Address */}
                            <div className="p-4 bg-white rounded-[4px] shadow-custom flex items-center h-[70px]">
                                <div className="text-green-500 text-xl mr-4">
                                    <img src={email} alt=""/>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[1rem] ">Email Address</h3>
                                    <p className=" text-xs">Name@gmail.com</p>
                                </div>
                            </div>
                            {/* Local Address */}
                            <div className="p-4 bg-white rounded-[4px] shadow-custom flex items-center h-[70px]">
                                <div className="text-green-500 text-xl mr-4">
                                   <img src={location} alt=""/>
                                </div>
                                <div>
                                    <h3 className="font-semibold  text-[1rem] ">Local Address</h3>
                                    <p className=" text-xs">Dhaka-1506 Bangladesh</p>
                                </div>
                            </div>
                            {/* Social Share */}
                            <div className="p-4 bg-white rounded-[4px] shadow-custom flex items-center h-[70px]">
                                <div className="text-green-500 text-xl mr-4">
                                    <img src={share} alt=""/>
                                </div>
                                <div className="flex-col">
                                    <div>
                                        <h3 className="font-semibold  text-[1rem]">Share</h3>
                                    </div>
                                    <div className="flex space-x-2">
                                        <img src={facebook} alt=""/>
                                        <img src={twi} alt=""/>
                                        <img src={picsart} alt=""/>
                                        <img src={v} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    </div>
  );
}

export default Contact2;
