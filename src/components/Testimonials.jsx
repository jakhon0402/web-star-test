import React from "react";
import img from "../assets/images/testimonial.png";
import manImg from "../assets/images/man.png";
import Quote from "./Quote";

const Testimonials = () => {
  return (
    <div className='flex flex-row mt-[128px] gap-[48px] w-full'>
      <div className='flex flex-col w-[502px] flex-none'>
        <span className='text-[40px] font-nunito font-bold text-gray-dark'>
          What Our Customers Says
        </span>
        <p className='text-[16px] font-dmSans mt-[12px] text-gray-light'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
          accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa
          diam. Lectus elit, nulla elementum fringilla at.
        </p>
        <div className='relative mt-[43px]'>
          <div className='flex flex-col w-[597px] px-[32px] pt-[20px] pb-[30px] gap-[16px] bg-primary absolute'>
            <div className='flex flex-row gap-[6px] top-[20px] right-[24px] absolute'>
              <Quote color={"#143B19"} />
              <Quote color={"#143B19"} />
            </div>

            <div className='flex flex-row items-center gap-[10px]'>
              <img src={manImg} className='w-[60px] h-[60px] object-cover' />
              <div className='flex flex-col'>
                <span className='text-[16px] font-nunito font-semibold text-white'>
                  Hasanul Islam
                </span>
                <span className='text-[14px] font-dmSans text-[#D9D9D9]'>
                  Marketing CEO
                </span>
              </div>
            </div>
            <p className='w-[500px] font-dmSans text-[16px] text-[#ECECEC]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu,
              tempor, accumsan sit amet nunc cursus. Nec tristique at in erat
              lectus mas sa diam. Lectus elit, nulla elementum fringilla at.
            </p>
          </div>
        </div>
      </div>
      <img src={img} className='w-full' />
    </div>
  );
};

export default Testimonials;
