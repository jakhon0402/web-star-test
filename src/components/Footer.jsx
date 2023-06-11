import React from "react";
import Facebook from "./Icons/Facebook";
import Twitter from "./Icons/Twitter";
import Instagram from "./Icons/Instagram";

const Footer = () => {
  return (
    <div className='flex flex-row mt-[128px] mb-[96px]'>
      <div className='flex flex-col'>
        <span className='text-[24px] font-dmSans font-bold'>Plant</span>
        <p className='mt-[24px] w-[300px] text-[#5A5A5A] text-[16px]'>
          Lorem ipsum dolor sit amet, consectetur adi piscing elit. Diam nibh
          posuere duis eu non sit integer at placerat amet.
        </p>
        <div className='flex flex-row gap-[16px] mt-[22px]'>
          <button className='flex bg-[#EDFFDD] rounded-[4px] justify-center items-center w-[48px] h-[48px]'>
            <Facebook />
          </button>
          <button className='flex bg-[#EDFFDD] rounded-[4px] justify-center items-center w-[48px] h-[48px]'>
            <Twitter />
          </button>
          <button className='flex bg-[#EDFFDD] rounded-[4px] justify-center items-center w-[48px] h-[48px]'>
            <Instagram />
          </button>
        </div>
      </div>
      <div className='flex flex-row gap-[128px] ml-[200px]'>
        <div className='flex flex-col'>
          <span className='text-[24px] font-dmSans font-bold'>Navigation</span>
          <div className='flex flex-col mt-[24px] gap-[16px] text-[16px] text-[#5A5A5A]'>
            <span>Home</span>
            <span>About</span>
            <span>Help & Support</span>
            <span>Product</span>
          </div>
        </div>
        <div className='flex flex-col'>
          <span className='text-[24px] font-dmSans font-bold'>About Us</span>
          <div className='flex flex-col mt-[24px] gap-[16px] text-[16px] text-[#5A5A5A]'>
            <span>Contact</span>
            <span>Address</span>
            <span>BLog</span>
            <span>About Us</span>
          </div>
        </div>
        <div className='flex flex-col'>
          <span className='text-[24px] font-dmSans font-bold'>Help</span>
          <div className='flex flex-col mt-[24px] gap-[16px] text-[16px] text-[#5A5A5A]'>
            <span>Coustomers Services</span>
            <span>FAQs</span>
            <span>We Are Hiring</span>
            <span>Returns</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
