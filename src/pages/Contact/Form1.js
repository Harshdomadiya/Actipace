import React, { useState } from "react";



function Form1() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [comment, setComment] = useState("");

  const handleContact = (e) => {
    e.preventDefault();
    setEmail("");
    setComment("");
    setName("");
    setNumber(""); // Prevent form submission refresh
    // Here you can validate inputs before navigation
    // navigate("/newpassword"); // Navigate to the home page
  };
  return (
    <div className="">
      <div className="flex items-center h-[600px]">
        <div className=""></div>
        <div className="h-[546px] w-[576px] p-10 bg-white rounded-lg mt-8 mr-10">
          <form>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4 flex flex-col gap-2">
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
                  className="w-full px-4 py-2 mt-2 bg-[#F3F4F6] text-sm  focus:ring focus:ring-green-200 focus:outline-none border-[0px] rounded-[4px] h-[50px]"
                />
              </div>
              <div className="mb-4 flex flex-col gap-2">
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
                  className="w-full px-4 py-2 mt-2 bg-[#F3F4F6] text-sm  focus:ring focus:ring-green-200 focus:outline-none border-[0px] rounded-[4px] h-[50px]"
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col gap-2">
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
                className="w-full px-4 py-2 mt-2 bg-[#F3F4F6] text-sm  focus:ring focus:ring-green-200 focus:outline-none border-[0px] rounded-[4px] h-[50px]"
              />
            </div>
            <div className="mb-4 flex flex-col gap-4">
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
                className="w-full h-[160px]  bg-[#F3F4F6] text-sm  focus:ring focus:ring-green-200 focus:outline-none border-[0px] rounded-[4px]"
              />
            </div>
            <button
              onClick={handleContact}
              className="px-4 py-2 text-white bg-green-500 rounded-[4px] hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 w-[170px] h-[50px]"
            >
              Submit Message
            </button>
          </form>
        </div>
        <div className="absolute bottom-14 right-4">
          <button className="w-10 h-10 flex items-center justify-center text-white"></button>
        </div>
      </div>
    </div>
  );
}

export default Form1;
