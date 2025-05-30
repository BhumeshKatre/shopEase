import React from 'react';

const Resgister = () => {
  return (
    <div
    className='flex justify-center flex-col relative'>
      <div
      className='border-2 rounded-b-2xl w-1 h-52 '
      >

      </div>
      <div
        style={{
        zIndex:2000,
        }}
        className='w-92  z-50 bg-green-200 absolute top-46 -left-48'>
        main content 
      </div>
    </div>
  );
}

export default Resgister;
