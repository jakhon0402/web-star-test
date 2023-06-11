import React from "react";
import aboutUsImg from "../assets/images/aboutUs.png";

const AboutUs = () => {
  return (
    <div className='grid grid-cols-2 gap-[80px] w-full mt-[128px]'>
      <div className='relative'>
        <div className='absolute right-[58px] w-[446px] bg-primary h-[440px]' />
        <img
          src={aboutUsImg}
          className='absolute top-[40px] right-[-12px] w-[446px]'
        />
      </div>
      <div className='flex flex-col items-start'>
        <span className='text-[18px] font-dmSans text-primary'>About Us</span>
        <span className='text-[40px] leading-[50px] font-bold font-nunito mt-[12px]'>
          Continue to Develop to <br /> Became Global Company
        </span>
        <p className='text-[16px] font-dmSans text-gray-light mt-[24px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
          accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa
          diam. Lectus elit, nulla elementum fringilla at. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc
          cursus. Nec tristique at in erat lectus mas sa diam. Lectus elit,
          nulla elementum fringilla at.
        </p>
        <span className='text-[18px] font-dmSans font-medium mt-[16px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
          accumsan sit amet nunc cursus.{" "}
        </span>
        <button className='mt-[36px] w-fit text-white bg-primary font-dmSans text-[14px] px-[32px] py-[13px] rounded-[4px]'>
          Read more
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
