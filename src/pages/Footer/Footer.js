import React from "react";
import fecebook from "./fecebook.png";
import insta from "./insta.png";
import twitter from "./twitter.png";
import youtube from "./youtube.png";
import flag from "./flag.png";
import actipace from "./Layer_1.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-16 w-full h-96 text-white">
      <div className="container mx-auto px-2">
        <div className="flex flex-col md:flex-row justify-around">
          <div className="mb-8 md:mb-0">
            <a href="/" className="text-2xl font-bold">
              <img src={actipace} alt=""></img>
            </a>
            <div className="flex items-center mt-4">
              <img src={flag} alt="India Flag" className="w-6 h-6 mr-2" />
              <span>India (English)</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 ml-2"
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
            <div className="flex mt-4 -mx-4">
              <a href={fecebook} className="mr-4">
                {/* <i className="fab fa-facebook">fsfefe</i> */}
                <img src={fecebook} alt=""></img>
              </a>
              <a href="/" className="mr-4">
                <i className="fab fa-instagram"></i>
                <img src={insta} alt=""></img>
              </a>
              <a href="/" className="mr-4">
                <i className="fab fa-twitter"></i>
                <img src={twitter} alt=""></img>
              </a>
              <a href="/" className="mr-4">
                <i className="fab fa-youtube"></i>
                <img src={youtube} alt=""></img>
              </a>
            </div>
          </div>

          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Developed By</h3>
            <div className="font-Helvetic text-sm mb-4">
              <p>G-100, HTC Market, Anjana</p>
              <p>Farm, Mithi Khadi Road, Surat,</p>
              <p>Gujarat, India</p>
            </div>
          </div>

          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className=" font-Helvetic text-sm mb-4">
              <li>
                <a href="/">Customer Service</a>
              </li>
              <li>
                <a href="/">FAQs</a>
              </li>
              <li>
                <a href="/">Renewals</a>
              </li>
            </ul>
          </div>

          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">About</h3>
            <ul className=" font-Helvetic text-sm mb-4">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a href="/">Your Privacy</a>
              </li>
              <li>
                <a href="/">Download</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-8 -my-10">
          <p>&copy; Copyright 2024 Actipace Security - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
