import React, { useState } from 'react';


  const Navbar = () => {
    return(
      <div className='absolute flex justify-end items-center text-black w-full h-20 shadow-md shadow-gray-300 pr-10  bg-white'>
        <span className='text-5xl text-gray-600 mr-2 mb-2'>+</span>
        <span className='text-blue-500 text-xl hover:underline'>Profile</span>
      </div>
    )
  }

export default Navbar;
