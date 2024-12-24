import React from "react";
import logo from "./pages/home/image/acticipace_logo.png";
import { IoGridSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  // console.log(location);

  return (
    <nav className="bg-white text-[#071D2B] w-full">
      <div className="container mx-auto flex justify-between w-[1200px] h-[80px] items-center">
        
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
        <Link to = {"/extrapage"}>
        <button className="bg-[#31BF5C] text-white font-Roboto w-[157.34px] h-[48px] flex justify-center items-center text-[14px] gap-2">
        <IoGridSharp className="w-[25px] h-[25px]"/>
          Free Download
        </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
