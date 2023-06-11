import React from "react";
import img from "../assets/images/klipartz 14.png";

const Subscribe = () => {
  return (
    <div className='flex justify-center mt-[164px]'>
      <div className='flex flex-col relative bg-[#DFFFE3] rounded-[6px] w-[1040px] py-[60px] px-[59px]'>
        <img src={img} className='absolute right-[24px] bottom-0 w-[262px]' />

        <span className='text-[40px] font-nunito font-bold'>
          Subscribe Our Newsletter
        </span>
        <p className='mt-[12px] text-[16px] w-[458px] font-dmSans text-gray-light'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, at
          tempor, accumsan sit amet nunc cursus.
        </p>
        <form className='mt-[30px] w-[451px] flex flex-row justify-between gap-5 pl-[20px] p-[8px] bg-white rounded-[4px]'>
          <input
            className='font-dmSans text-[#5A5A5A] w-full'
            placeholder='Enter mail...'
          />
          <button className='flex-none w-fit text-white bg-primary font-dmSans text-[14px] px-[16px] py-[11px] rounded-[4px]'>
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
