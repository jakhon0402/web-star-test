import React from "react";
import img1 from "../assets/images/klipartz 9.png";
import img2 from "../assets/images/klipartz 10.png";
import img3 from "../assets/images/klipartz 11.png";

const CollectionSection = () => {
  return (
    <div className='flex flex-row mt-[102px] gap-[62px]'>
      <div className='flex flex-col items-start gap-[37px]'>
        <span className='text-[36px] leading-[49.1px] font-nunito font-bold'>
          We have lots of plants <br /> collection for you and
          <br /> your family
        </span>
        <span className='text-[18px] font-dmSans text-gray-light'>
          See all collection
        </span>
      </div>

      <div className='flex flex-row gap-[24px]'>
        <div className='bg-[#F6EDE8] rounded-[4px] p-[21px] h-[207px] w-[215px]'>
          <img src={img1} />
        </div>
        <div className='bg-[#F0F1F6] rounded-[4px] p-[21px] h-[207px] w-[215px]'>
          <img src={img2} />
        </div>
        <div className='bg-[#F6EDE8] rounded-[4px] p-[21px] h-[207px] w-[215px]'>
          <img src={img3} />
        </div>
      </div>
    </div>
  );
};

export default CollectionSection;
