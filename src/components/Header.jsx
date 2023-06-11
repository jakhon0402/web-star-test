import React from "react";
import headerImage from "../assets/images/klipartz 5.png";

const Header = () => {
  return (
    <div className='flex flex-row items-start w-full justify-between'>
      <div className='flex flex-col mt-[56px]'>
        <span className='text-[72px] font-bold font-nunito leading-[92px]'>
          Growing <br /> Beautiful Plants
          <br /> at Home
        </span>
        <p className='text-[16px] text-gray-dark font-dmSans mt-[24px] w-[504px] leading-[25.6px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
          accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa
          diam. Lectus elit, nulla elementum fringilla at.
        </p>
        <button className='mt-[40px] w-fit text-white bg-primary font-dmSans text-[14px] px-[32px] py-[13px] rounded-[4px]'>
          Learn more
        </button>

        <div className='flex flex-row mt-[60px] gap-[112px] w-full'>
          <div className='flex flex-col gap-[10px] items-center'>
            <span className='text-[36px] font-nunito font-bold'>2000+</span>
            <span className='text-[18px] font-dmSans'>Delivery</span>
          </div>
          <div className='flex flex-col gap-[10px] items-center'>
            <span className='text-[36px] font-nunito font-bold'>2000+</span>
            <span className='text-[18px] font-dmSans'>Delivery</span>
          </div>
          <div className='flex flex-col gap-[10px] items-center'>
            <span className='text-[36px] font-nunito font-bold'>2000+</span>
            <span className='text-[18px] font-dmSans'>Delivery</span>
          </div>
        </div>
      </div>
      <div className='mt-[4px] mr-[-70px]'>
        <img className='w-[556px]' src={headerImage} />
      </div>
    </div>
  );
};

export default Header;
