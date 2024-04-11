import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <div className='bg-[#00D355] w-full h-[80px] flex flex-row flex-auto justify-between items-center'>
        <div className='font-poppins font-bold text-white text-[30px] mx-5'>todo.</div>
        <div className='w-[300px] h-[40px] flex flex-row justify-between items-center'>
          <button onClick={()=>{navigate('/login')}} className='bg-white text-black fontt-poppins font-semibold rounded-md w-[100px] h-[30px] mx-5'>Log out</button>
          <button onClick={()=>{navigate('/Signup')}} className='bg-white text-black fontt-poppins font-semibold rounded-md w-[100px] h-[30px] mx-5'>Signup</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar