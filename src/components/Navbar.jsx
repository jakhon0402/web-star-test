import React from "react";

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between items-center w-full py-[40px]'>
      <div className='flex flex-row justify-between items-center w-[74%]'>
        <span className='font-nunito font-bold text-[24px]'>Plant</span>
        <div className='flex flex-row gap-[48px] text-gray-dark text-[16px] font-dmSans'>
          <span>Home</span>
          <span>Services</span>
          <span>About Us</span>
          <span>Blog</span>
          <span>Contact</span>
        </div>
      </div>
      <div className='flex flex-row gap-[32px]'>
        <button className='text-gray-dark font-dmSans text-[16px] px-[16px] py-[13px] rounded-[4px]'>
          Login
        </button>
        <button className='text-white bg-primary font-dmSans text-[14px] px-[16px] py-[13px] rounded-[4px]'>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
