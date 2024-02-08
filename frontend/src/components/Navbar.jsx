import React from 'react'

function navbar() {
  return (
    <div>
      <div className='bg-[#00D355] w-full h-[80px] flex flex-row flex-auto justify-between items-center'>
        <div className='font-poppins font-bold text-white text-[30px] mx-5'>todo.</div>
        <button type='submit' className='bg-white text-black fontt-poppins font-semibold rounded-md w-[100px] h-[30px] mx-5'>Log out</button>
      </div>
    </div>
  )
}

export default navbar