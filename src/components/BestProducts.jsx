import React from "react";
import img1 from "../assets/images/best_product1.png";
import img2 from "../assets/images/best_product2.png";
import img3 from "../assets/images/best_product3.png";
import img4 from "../assets/images/best_product4.png";
import Star from "./Star";

const BestProducts = () => {
  return (
    <div className='flex flex-col mt-[128px] items-center'>
      <h1 className=' text-[40px] font-nunito font-bold'>Our Best Product</h1>
      <div className='flex flex-row mt-[24px] gap-[24px]'>
        <span className='text-[18px] font-dmSans text-primary'>New Plants</span>
        <span className='text-[18px] font-dmSans'>New Arrivals</span>
        <span className='text-[18px] font-dmSans'>Sale</span>
      </div>
      <div className='flex flex-row mt-[48px] gap-[24px] w-full'>
        <div className='flex flex-col bg-[#EAF2E5] w-[270px] h-[283px]'>
          <div className='flex justify-center h-[169px] w-full'>
            <img src={img1} className='h-[153px] mt-[10px]' />
          </div>
          <div className='flex flex-col px-[32px]'>
            <span className='text-[24px] font-nunito font-semibold'>
              Outdoor Plant
            </span>
            <div className='flex flex-row mt-[10.3px] gap-[4.78px]'>
              <Star color='#F4C300' />
              <Star color='#F4C300' />
              <Star color='#F4C300' />
              <Star color='#F4C300' />
              <Star color='#F4C300' />
            </div>
            <span className='text-[16px] font-nunito font-semibold mt-[13.19px]'>
              $50.00
            </span>
          </div>
        </div>
        <div className='flex flex-col bg-[#EAF2E5] w-[270px] h-[283px]'>
          <div className='flex justify-center h-[169px] w-full'>
            <img src={img1} className='h-[153px] mt-[10px]' />
          </div>
          <div className='flex flex-col px-[32px]'>
            <span className='text-[24px] font-nunito font-semibold'>
              Outdoor Plant
            </span>
            <div className='flex flex-row mt-[10.3px] gap-[4.78px]'>
              <Star color='#F4C300' />
              <Star color='#F4C300' />
              <Star color='#F4C300' />
              <Star color='#F4C300' />
              <Star color='#F4C300' />
            </div>
            <span className='text-[16px] font-nunito font-semibold mt-[13.19px]'>
              $50.00
            </span>
          </div>
        </div>
      </div>
      <button className='mt-[40px] w-fit text-white bg-primary font-dmSans text-[14px] px-[32px] py-[13px] rounded-[4px]'>
        View All
      </button>
    </div>
  );
};

export default BestProducts;
