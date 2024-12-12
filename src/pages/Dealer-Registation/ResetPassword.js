import React, { useState } from "react";
import eye from "./image/eye.png";
import actipace from "./image/actipace.png";
import { useNavigate } from "react-router-dom";
import emogy from "./image/emogy.png";

const ResetPassword = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to a server
    // console.log({ firstName, lastName, email, message });
    // Reset form fields

    setEmail("");
  };

  const [email, setEmail] = useState("");

  const handleNewPassword = (e) => {
    e.preventDefault(); // Prevent form submission refresh
    // Here you can validate inputs before navigation
    navigate("/newpassword"); // Navigate to the home page
  };
  return (
    <div className="flex -my-20 items-center justify-center min-h-screen bg-green-50">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
        <img src={actipace} className="mx-24 my-4"></img>
        <h2 className="text-center text-md font-bold text-gray-700">
          Forgot Password
        </h2>
        <h2 className="text-center my-3 text-xs font-xs text-gray-300">
          Enter your registered email id to get a link to
          <br />
          reset your password.
        </h2>
        <form className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="dealerCode"
              className="block text-sm font-medium text-gray-700"
            >
              Your email id
            </label>
            <input
              id="dealerCode"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="w-full px-4 py-2 mt-2 text-sm border rounded-md focus:ring focus:ring-green-200 focus:outline-none"
            />
          </div>

          <button
            onClick={handleNewPassword}
            className="w-full px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
          >
            Get Reset Link
          </button>
        </form>
      </div>
      <div className="absolute bottom-14 right-4">
        <button className="w-10 h-10 flex items-center justify-center text-white">
          <img src={emogy}></img>
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
