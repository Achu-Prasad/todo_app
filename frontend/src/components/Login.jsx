import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import SignupPage from "../pages/SignupPage";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Email: " + email);
    console.log("Password: " + password);
  }

  return (
    <div className=" relative flex flex-col justify-center items-center w-[400px] h-[350px] border-black bg-green-200 bg-opacity-25 mx-[30px] my-[30px] p-2 rounded-[25px] shadow-md shadow-right shadow-gray-300">
      <img
          className="absolute right-[-90px] top-[-30px] z-[0] w-[150px] h-[150px]"
          src="./src/assets/images/Asset 1.png"
          alt="Todo app logo"
        />
      <form onSubmit={handleSubmit}>

        <h2 className="order-1 flex justify-center font-bold text-3xl text-[#5D846D] mt-2 mb-5">
          Signin
        </h2>

        <div className="flex flex-col justify-start">
          <label htmlFor="password" className="font-regular text-[#959B95]">
            email:
          </label>
          <input
            className="font-semibold text-white bg-[#91C1A7] rounded-lg px-4 mt-1 mb-4 focus:outline-none focus:border-green-500 w-[300px] h-[35px]"
            type="text"
            value={email}
            id ="email"
            autoComplete="false"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="password" className="font-regular text-[#959B95]">
            password:
          </label>
          <input
            className="font-semibold text-white bg-[#528C75] rounded-lg px-4 mt-1 mb-4 focus:outline-none focus:border-green-500 w-[300px] h-[35px]"
            type="password"
            id ="password"
            autoComplete="false"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className="flex flex-row justify-between w-[300px] my-2 ">
          <Link to= '/signup'>
          <button
            className="bg-[#00D355] hover:bg-[#528C75] text-white font-poppins font-bold py-2 px-4 rounded-md w-[100px]"
            type="button"
          >
            Sign up
          </button></Link>
          

          <button 
            className="bg-[#00D355] hover:bg-[#528C75] text-white font-poppins font-bold py-2 px-4 rounded-md w-[100px]"
            type="submit"
          >
            Sign in
          </button>
        </div>
      </form>

      <p className=" font-poppins font-lightbold text-[14px] flex justify-center my-4 text-[#959B95]">
        Forgot something ? <span className="text-[#528C75]"> Reset it !</span>
      </p>

    </div>
  );
};

export default Login;
