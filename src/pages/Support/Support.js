import React, { useState } from "react";
import Frame840 from "./Frame840.png";
import india from "./India.png";
import acti from "../home/image/actipace-a.png"
import loc from "./image/Icon.svg"
import mail from "./image/icn_mail.svg.svg"
import call from "./image/icn_call.svg.svg"

function Support() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to a server
    console.log({ firstName, lastName, email, message });
    // Reset form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const [message, setMessage] = useState("");
  return (
    <div  className="relative w-full h-full">
      <div className="h-[850px]">
  
        <div className="absolute mt-0">
            <img src={Frame840} alt="" className=""></img>
        </div>

        <div className="h-[500px] w-full flex justify-center absolute mt-[290px]">
            <div className="flex h-[439px]  z-10 shadow-md w-[1000px]">
                <div className="w-[700px]">
                    <div className="bg-white p-8 rounded-l-[4px] ">
                      <h2 className="text-[24px] font-[600px] mb-4">HAPPY TO SERVE YOU</h2>
                      <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4 mt-14">
                          <div className="relative z-0 w-full  group">
                            <input
                              type="text"
                              id="firstname"
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#9DA9B0] appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                              placeholder=" "
                              required
                            />
                            <label
                              htmlFor="firstname"
                              className="peer-focus:font-medium absolute font-[500px] text-[#9DA9B0] text-[14px] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                              First Name
                            </label>
                          </div>
                          <div className="relative z-0 w-full mb-5 group">
                            <input
                              type="text"
                              id="lastname"
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#9DA9B0] appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                              placeholder=" "
                              required
                            />
                            <label
                              htmlFor="lastname"
                              className="peer-focus:font-medium absolute font-[500px] text-[#9DA9B0] text-[14px] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                              Last Name
                            </label>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-6">
                          <div className="relative z-0 w-full group">
                            <input
                              type="email"
                              id="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#9DA9B0] appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                              placeholder=" "
                              required
                            />
                            <label
                              htmlFor="email"
                              className="peer-focus:font-medium absolute font-[500px] text-[#9DA9B0] text-[14px] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                              Email
                            </label>
                          </div>
                          <div className="flex items-center mr-2">
                            <img src={india} alt="India Flag" className="w-8 h-8" />
                            <span className="ml-2 text-[#9DA9B0]">+91</span>
                            <input
                              type="number"
                              id="number"
                              value={number}
                              onChange={(e) => setNumber(e.target.value)}
                              className="block py-2.5 px-1 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#9DA9B0] appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                              placeholder=" "
                              required
                            />
                          </div>
                        </div>
                        <div className="relative z-0 w-full mt-[40px]">
                          <input
                            type="text"
                            id="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-[#9DA9B0] border-b-2 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            htmlFor="text"
                            className="peer-focus:font-medium absolute font-[500px]  text-[#9DA9B0] text-[14px] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Applying for : Write us about whatever you want to say
                          </label>
                        </div>
                        <div className="mt-8">
                          <button
                            type="submit"
                            className="bg-[#31BF5C] text-white font-[500px] py-2 px-4 rounded-[4px] text-[12px] h-[40px] w-[140px]"
                          >
                            Submit Message
                          </button>
                        </div>
                      </form>
                    </div>
                </div>
                <div className="bg-[#071D2B] w-[350px] rounded-r-[4px] realtive">
                    
                    <div className="text-[#FFFFFF] flex flex-col gap-6 mt-8 ml-7">
                    <div className="text-[24px] font-[600px] mb-3">Technical support</div>
                    <div className="flex gap-4">
                      <img src = {loc} alt="" className="h-[20px] w-[20px]"/>
                      <p className="text-[14px] font-[500px]">Dhaka-1506 Bangladesh</p>
                    </div>
                    <div className="flex gap-4 ml-1">
                      <img src = {call} alt="" className="h-[18px] w-[18px]"/>
                      <p className="text-[14px] font-[500px]">+(536) 84 95 62 45</p>
                    </div>
                    <div className="flex gap-4 ml-1">
                      <img src={mail} alt="" className="h-[18px] w-[18px]"/>
                      <p className="text-[14px] font-[500px]">Name@gmail.com</p>
                    </div>
                    </div>
                    <img src={acti} alt="" className="absoulte w-[180px] h-[220px] mt-[14px] ml-[150px]"/>
                </div>
            {/* technical support  */}
            </div>
        </div>

      </div>
    </div>
  );
}

export default Support;
