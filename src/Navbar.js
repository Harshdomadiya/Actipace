import React from "react";
import logo from "./home/image/acticipace_logo.png";

function Navbar() {
  return (
    <nav className="bg-white text-[#071D2B]">
      <div className="container mx-auto flex justify-between ">
        <div className="my-10">
          <img src={logo} alt="" className="w-44 h-8 absolute top-14 left-16" />
        </div>
        <div className="flex items-center">
          <ul className="container flex space-x-4 ml-20 ">
            <li>
              <a href="#" className="hover:text-gray-200">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                Product
              </a>
            </li>{" "}
             
            <li>
              <a href="#" className="hover:text-gray-200">
                Dealer Registration
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                Award
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <button className="bg-[#31BF5C] text-white font-Roboto py-2 px-2 mx-10 my-6 left-10">
          Free Download
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
