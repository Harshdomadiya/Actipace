import React, { useState } from "react";
import address from "./image/address.png";
import contact from "./image/contact.png";
import email from "./image/email.png";
import Group72 from "./image/Group72.png";
import number1 from "./image/number.png";
import share from "./image/share.png";
import text from "./image/text.png";

import { useNavigate } from "react-router-dom";
// import emogy from "./image/emogy.png";

const Contact = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to a server
    // console.log({ firstName, lastName, email, message });
    // Reset form fields

    setEmail("");
    setComment("");
    setName("");
    setNumber("");
  };

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [comment, setComment] = useState("");

  const handleContact = (e) => {
    e.preventDefault(); // Prevent form submission refresh
    // Here you can validate inputs before navigation
    // navigate("/newpassword"); // Navigate to the home page
  };
  return (
    <div>
      <div className="w-1/2 h-1/2">
        <img src={number1} className="w-1/2 h-1/2"></img>
        <img src={number1} className="w-1/2 h-1/2"></img>
        <img src={number1} className="w-1/2 h-1/2"></img>
        <img src={number1} className="w-1/2 h-1/2"></img>
      </div>

      {/* <div className="flex -my-20 items-center justify-center min-h-screen bg-white">
        <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
          <form>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label
                  htmlFor="dealerCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name*
                </label>
                <input
                  id="name"
                  type="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Email"
                  className="w-full px-4 py-2 mt-2 bg-[#F3F4F6] text-sm border focus:ring focus:ring-green-200 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="dealerCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email*
                </label>
                <input
                  id="dealerCode"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className="w-full px-4 py-2 mt-2 bg-[#F3F4F6] text-sm border  focus:ring focus:ring-green-200 focus:outline-none"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="dealerCode"
                className="block text-sm font-medium text-gray-700"
              >
                Phone*
              </label>
              <input
                id="number"
                type="number"
                value={number}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Email"
                className="w-full px-4 py-2 mt-2 bg-[#F3F4F6] text-sm border   focus:ring focus:ring-green-200 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="dealerCode"
                className="block text-sm font-medium text-gray-700"
              >
                Comment*
              </label>
              <input
                id="comment"
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder=""
                className="w-full h-24 px-4 py-2 mt-2 bg-[#F3F4F6] text-sm border  focus:ring focus:ring-green-200 focus:outline-none"
              />
            </div>
            <button
              onClick={handleContact}
              className="w-full px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
            >
              Submit Message
            </button>
          </form>
        </div>
        <div className="absolute bottom-14 right-4">
          <button className="w-10 h-10 flex items-center justify-center text-white">
          
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Contact;
