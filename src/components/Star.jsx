import React from "react";

const Star = ({ color }) => {
  return (
    <svg
      color={color}
      width='16'
      height='15'
      viewBox='0 0 16 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8.00002 12.1735L3.29802 14.8055L4.34802 9.52016L0.391357 5.8615L5.74269 5.22683L8.00002 0.333496L10.2574 5.22683L15.6087 5.8615L11.652 9.52016L12.702 14.8055L8.00002 12.1735Z'
        fill='#F4C300'
      />
    </svg>
  );
};

export default Star;
