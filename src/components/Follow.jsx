import React from "react";
import img1 from "../assets/images/follow1.png";
import img2 from "../assets/images/follow2.png";
import img3 from "../assets/images/follow3.png";
import img4 from "../assets/images/follow4.png";
import img5 from "../assets/images/follow5.png";

const Follow = () => {
  return (
    <div className='flex flex-col items-center mt-[79px]'>
      <span className='text-[48px] font-nunito font-bold'>
        Follow Us on Instagram
      </span>
      <p className='mt-[12px] text-[16px] w-[544px] text-center text-gray-light'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
        accu msan sit amet nunc cursus. Nec tristique at in erat lectus
      </p>
      <div className='flex flex-row mt-[40px]'>
        <img src={img1} className='w-[230px] h-[241px] object-cover' />
        <img src={img2} className='w-[230px] h-[241px] object-cover' />
        <img src={img3} className='w-[230px] h-[241px] object-cover' />
        <img src={img4} className='w-[230px] h-[241px] object-cover' />
        <img src={img5} className='w-[230px] h-[241px] object-cover' />
      </div>
    </div>
  );
};

export default Follow;
