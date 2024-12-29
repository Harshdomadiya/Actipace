import {React,useState} from "react";
import logo from "./pages/home/image/acticipace_logo.png";
import { IoGridSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import {Currency} from "./Atoms"
import ID from "./pages/Support/India.png"
import UD from "./pages/Support/Flag_of_the_United_States.png"
import { FaChevronDown } from "react-icons/fa"; 

function Navbar() {

  const location = useLocation();
  const [curr,setCurr] = useRecoilState(Currency)
  const [isOpen, setIsOpen] = useState(false); 

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (value) => {
    setCurr(value); // Update the selected value
    setIsOpen(false); // Close the dropdown
  };

  const options = [
    { value: "INR", label: "INR", img:ID }, // Replace `ID` with the image URL for INR
    { value: "USD", label: "USD", img:UD }, // Replace `UD` with the image URL for USD
  ];
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

        <div className="relative inline-block">
      {/* Selected Option */}
      <button
        className="appearance-none w-[120px] h-[47px] border border-[#31BF5C] px-4 py-2 text-gray-700 bg-white shadow-md focus:outline-none focus:ring-1 focus:ring-[#31BF5C] focus:border-[#31BF5C] flex items-center justify-between"
        onClick={toggleDropdown}
      >
        <img
          src={options.find((o) => o.value === curr)?.img}
          alt={curr}
          className="w-6 h-6 mr-2"
        />
        {curr}
        <FaChevronDown className="text-gray-500"/>
      </button>

      {/* Dropdown Options */}
      {isOpen && (
        <ul className="absolute w-[120px] border border-[#31BF5C] bg-white shadow-md mt-2 z-10">
          {options.map((option) => (
            <li
              key={option.value}
              className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOptionClick(option.value)}
            >
              <img src={option.img} alt={option.label} className="w-6 h-6 mr-2" />
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
