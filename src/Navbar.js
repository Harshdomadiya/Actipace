import React from "react";
import logo from "./home/image/acticipace_logo.png";

function Navbar() {
  return (
    <nav className="bg-white text-[#071D2B] w-full">
      <div className="container mx-auto flex justify-between w-[1200px] h-[80px] items-center">
        
          <img src={logo} alt="" className="w-[174px] h-[34px]" />
       
        <div className="flex">
          <ul className="container flex space-x-6 font-medium ">
            <li>
              <a href="/" className="hover:text-gray-200">
                Home
              </a>
            </li>
            <li>
              <a href="/product" className="hover:text-gray-200">
                Product
              </a>
            </li>{" "}
          
            <li>
              <a href="/login" className="hover:text-gray-200">
                Dealer Registration
              </a>
            </li>
            <li>
              <a href="/support" className="hover:text-gray-200">
                Support
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-200">
                About
              </a>
            </li>
            <li>
              <a href="/price" className="hover:text-gray-200">
                Pricing
              </a>
            </li>
            <li>
              <a href="/award" className="hover:text-gray-200">
                Award
              </a>
            </li>
            <li>
              <a href="contact" className="hover:text-gray-200">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <button className="bg-[#31BF5C] text-white font-Roboto w-[157.34px] h-[48px]">
          Free Download
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
