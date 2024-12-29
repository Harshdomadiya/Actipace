import React from "react";
import logo from "./pages/home/image/acticipace_logo.png";
import { IoGridSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import {Currency} from "./Atoms"
function Navbar() {
  const location = useLocation();
  const [curr,setCurr] = useRecoilState(Currency)
  //console.log(curr);

  return (
    <nav className="bg-white text-[#071D2B] w-full">
      <div className="container mx-auto flex justify-between w-[1300px] h-[80px] items-center">
        
          <img src={logo} alt="" className="w-[174px] h-[34px]" />
       
        <div className="flex">
          <ul className="container flex space-x-6 text-[16px]">
            <li>
              <Link to="/" className={`hover:text-gray-200 ${(location.pathname === "/")?"text-[#31BF5C]": "text-[#071D2B]"}`}>
                Home
              </Link>
            </li>
            <li>
              <a href="/product" className={`hover:text-gray-200 ${(location.pathname === "/product")?"text-[#31BF5C]": "text-[#071D2B]"}`}>
                Product
              </a>
            </li>{" "}
          
            <li>
              <a href="/login" className={`hover:text-gray-200 ${(location.pathname === ("/login" || "/signup"))?"text-[#31BF5C]": "text-[#071D2B]"}`}>
                Dealer Registration
              </a>
            </li>
            <li>
              <a href="/support" className={`hover:text-gray-200 ${(location.pathname === "/support")?"text-[#31BF5C]": "text-[#071D2B]"}`}>
                Support
              </a>
            </li>
            <li>
              <a href="/about" className={`hover:text-gray-200 ${(location.pathname === "/about")?"text-[#31BF5C]": "text-[#071D2B]"}`}>
                About
              </a>
            </li>
            <li>
              <a href="/price" className={`hover:text-gray-200 ${(location.pathname === "/price")?"text-[#31BF5C]": "text-[#071D2B]"}`}>
                Pricing
              </a>
            </li>
            <li>
              <a href="/award" className={`hover:text-gray-200 ${(location.pathname === "/award")?"text-[#31BF5C]": "text-[#071D2B]"}`}>
                Award
              </a>
            </li>
            <li>
              <a href="contact" className={`hover:text-gray-200 ${(location.pathname === "/contact")?"text-[#31BF5C]": "text-[#071D2B]"}`}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex gap-5 justify-center items-center">
        <Link to = {"/extrapage"}>
        <button className="bg-[#31BF5C] text-white font-Roboto w-[157.34px] h-[48px] flex justify-center items-center text-[14px] gap-2">
        <IoGridSharp className="w-[25px] h-[25px]"/>
          Free Download
        </button>
        </Link>

        <div className="relative inline-block ">
              <select

                  className="appearance-none w-[80px] border border-[#31BF5C]  px-4 py-2 text-gray-700 bg-white shadow-md focus:outline-none focus:ring-1 focus:ring-[#31BF5C] focus:border-[#31BF5C]"
                  id="options"
                  value={curr}
                  onChange={(e) => setCurr(e.target.value)}
              >
                <option value="INR"> INR</option>
                <option value="USD"> USD</option>
              </select>
              <div className="absolute inset-y-0 right-0  flex items-center  pointer-events-none pr-2">
                <svg
                    className="w-4 h-4 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
        </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
