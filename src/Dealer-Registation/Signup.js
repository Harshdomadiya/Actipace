import React, { useState } from "react";
import eye from "./image/eye.png";
import actipace from "./image/actipace.png";
import emogy from "./image/emogy.png";

import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to a server
    // console.log({ firstName, lastName, email, message });
    // Reset form fields
    setNumber("");
    setCuntry("");
    setAddress("");
    setCity("");
    setPINcode("");
    setState("");
    setEmail("");
    setCode("");
    setPassword("");
  };

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [numer, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCuntry] = useState("");
  const [PINcode, setPINcode] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSignup = (e) => {
    e.preventDefault(); // Prevent form submission refresh
    // Here you can validate inputs before navigation
     // Navigate to the home page
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="w-96 h-7/8 p-8 bg-white rounded-lg shadow-md my-[50px]">
        <img src={actipace} className="mx-24 "></img>
        <form className="w-full" onSubmit={handleSignup}>
          <div className="bg-[#D1ECF1] h-18 my-5 py-5 rounded-xl">
            <h2 className="text-center text-xs font-semibold text-gray-700 mb-4">
              Access and man age your instances from <br /> this actipace
              account.
            </h2>
          </div>
          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-4 py-2 mt-2 text-sm border rounded-md focus:ring focus:ring-green-200 focus:outline-none"
            />
          </div>

          {/* Mobile Number */}
          <div className="mb-4">
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile No.
            </label>
            <input
              id="mobile"
              type="text"
              value={numer}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Mobile No"
              className="w-full px-4 py-2 mt-2 text-sm border rounded-md focus:ring focus:ring-green-200 focus:outline-none"
            />
          </div>

          {/* Password */}
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <div className="flex justify-center">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-2 mt-2 text-sm border rounded-md focus:ring focus:ring-green-200 focus:outline-none"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className=" cursor-auto inset-y-0 right-2    text-sm text-green-600"
            >
              <img src={eye} className="w-9 h-9 my-2"></img>
            </button>
          </div>

          {/* Address */}
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              id="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
              className="w-full px-4 py-2 mt-2 text-sm border rounded-md focus:ring focus:ring-green-200 focus:outline-none"
            />
          </div>

          {/* City and State */}
          <div className="mb-4 flex gap-2">
            <div className="w-1/2">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                id="city"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="City"
                className="w-full px-4 py-2 mt-2 text-sm border rounded-md focus:ring focus:ring-green-200 focus:outline-none"
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700"
              >
                State
              </label>
              <input
                id="state"
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="State"
                className="w-full px-4 py-2 mt-2 text-sm border rounded-md focus:ring focus:ring-green-200 focus:outline-none"
              />
            </div>
          </div>

          {/* Country and PIN Code */}
          <div className="mb-4 flex gap-2">
            <div className="w-1/2">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country
              </label>
              <input
                id="country"
                type="text"
                value={country}
                onChange={(e) => setCuntry(e.target.value)}
                placeholder="Country"
                className="w-full px-4 py-2 mt-2 text-sm border rounded-md focus:ring focus:ring-green-200 focus:outline-none"
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="pinCode"
                className="block text-sm font-medium text-gray-700"
              >
                PIN Code
              </label>
              <input
                id="pinCode"
                type="number"
                value={PINcode}
                onChange={(e) => setPINcode(e.target.value)}
                placeholder="PIN Code"
                className="w-full px-4 py-2 mt-2 text-sm border rounded-md focus:ring focus:ring-green-200 focus:outline-none"
              />
            </div>
          </div>

          {/* Captcha */}
          <div className="mb-4">
            <img
              src="https://via.placeholder.com/150x50"
              alt="captcha"
              className="mb-2"
            />
            <button className="text-sm text-green-600 hover:underline">
              Refresh Captcha
            </button>
          </div>

          {/* Enter Code */}
          <div className="mb-4">
            <label
              htmlFor="code"
              className="block text-sm font-medium text-gray-700"
            >
              Enter Code
            </label>
            <input
              id="code"
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Code"
              className="w-full px-4 py-2 mt-2 text-sm border rounded-md focus:ring focus:ring-green-200 focus:outline-none"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-4 text-center text-sm text-gray-500">
          Already a user?{" "}
          <a href="/login" className="text-green-600 hover:underline">
            Login here
          </a>
        </p>
      </div>

      {/* Chat Icon */}
      <div className="absolute bottom-4 right-4">
        <button className="w-10 h-10 flex items-center justify-center text-white">
          <img src={emogy}></img>
        </button>
      </div>
    </div>
  );
};

export default Signup;
