import React from "react";
import Login from "../components/Login";

function LoginPage() {
  return (
    <div className="bg-white w-screen h-screen  m-0 p-0 flex justify-center items-center">
      <div className="relative">
        <div className="flex relative w-[550px] h-[550px] rounded-[40px] bg-[#528C75] mx-20 overflow-hidden">
          <h1 className="absolute font-poppins font-bold text-white text-[60px]  leading-tight flex items-center mx-20 top-[150px] ">
            do <br />
            you know <br />
            How to-do ?
          </h1>

          <div className="absolute w-[200px] h-[200px] rounded-full bg-white right-[-70px] top-[-50px] pointer-events-none opacity-50"></div>

          <div className="absolute w-[150px] h-[150px] rounded-full  bg-white opacity-50 bottom-[-85px] left-[100px]"></div>
        </div>
      </div>

      <div className="flex flex-col relative w-[550px] h-[550px] mx-20">
        <Login className=" z-10" />
        <img
          className="absolute right-[50px] top-[-10px] z-[0] w-[150px] h-[150px]"
          src="./src/assets/images/Asset 1.png"
          alt="Todo app logo"
        />
        <h2 className="font-poppins font-bold text-[50px] text-[#528C75] leading-tight pl-5 pt-2">
          do it.....<br></br> or leave it
        </h2>
      </div>
    </div>
  );
}

export default LoginPage;
