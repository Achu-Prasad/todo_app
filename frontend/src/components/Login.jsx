import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Email: " + email);
    console.log("Password: " + password);
  }

  return (
    <div className="flex flex-col justify-center items-center w-[400px] h-[350px] border-black bg-white bg-opacity-25 mx-[30px] my-[30px] p-2 rounded-[25px] shadow-md shadow-right shadow-gray-300">
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
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className="flex flex-row justify-between w-[300px] my-2 ">
          <button
            className="bg-[#00D355] hover:bg-[#528C75] text-white font-poppins font-bold py-2 px-4 rounded-md w-[100px]"
            type="submit"
          >
            Sign up
          </button>

          <button
            className="bg-[#00D355] hover:bg-[#528C75] text-white font-poppins font-bold py-2 px-4 rounded-md w-[100px]"
            type="submit"
          >
            Sign in
          </button>
        </div>
      </form>

      <p className=" font-poppins font-lightbold text-[14px] flex justify-center my-4 text-[#959B95]">
        Forget your password ? <span className="text-[#528C75]"> Reset it !</span>
      </p>

    </div>
  );
};

export default Login;
