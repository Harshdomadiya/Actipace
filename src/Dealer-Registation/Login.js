import React, { useState } from "react";
import eye from "./image/eye.png";
import actipace from "./image/actipace.png";
import { useNavigate } from "react-router-dom";
import emogy from "./image/emogy.png";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to a server
    // console.log({ firstName, lastName, email, message });
    // Reset form fields

    setEmail("");
    setCode("");
    setPassword("");
  };

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission refresh
    // Here you can validate inputs before navigation
    navigate("/"); // Navigate to the home page
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
        <img src={actipace} className="mx-28 my-4"></img>
        <h2 className="text-center text-xs font-sm text-gray-700">
          Access and manage your instances from
          <br />
          this actipace account.
        </h2>
        <form className="mt-6" onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="dealerCode"
              className="block text-sm font-medium text-gray-700"
            >
              Dealer Code
            </label>
            <input
              id="dealerCode"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-4 py-2 mt-2 text-sm border rounded-md focus:ring focus:ring-green-200 focus:outline-none"
            />
          </div>
          <div className="mb-4 relative">
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
          </div>
          <a
            href="/resetpassword"
            className="text-sm text-green-600 hover:underline block text-right"
          >
            Reset Password
          </a>
          <div className="mb-6">
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
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <a href="/signup" className="text-green-600 hover:underline">
            Sign up now
          </a>
        </p>
      </div>
      <div className="absolute bottom-4 right-4">
        <button className="w-10 h-10 flex items-center justify-center text-white">
          <img src={emogy}></img>
        </button>
      </div>
    </div>
  );
};

export default Login;
