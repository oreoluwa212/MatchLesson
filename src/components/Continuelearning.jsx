import React from 'react'

const Continuelearning = () => {
  return (
    <div className="">
      <div className="bg-[#FFFFFF] flex flex-col w-[320px] h-[128px] shadow-2xl pt-3 px-3 text-center rounded-[12px] mt-4 gap-1">
        <div className="flex justify-between text-[18px] font-semibold gap-8 items-center">
          <p>Mathematics </p>
          <p> 70% done </p>
        </div>
        <div className="w-full mt-4 rounded-[12px] bg-[#DAE7EE] h-[15px]"></div>
        <div className="w-[180px] mt-[-18px] rounded-[12px] bg-[#4488AC] h-[15px] "></div>

        <div className="flex justify-end text-center mt-2 text-[16px] font-bold text-[#4488AC]">
          <h4>Click here to continue</h4>
        </div>
      </div>
    </div>
  );
}

export default Continuelearning