import React from "react";

const UpcomingClasses = () => {
  return (
    <div className="">
      <div className=" px-2 bg-[#FFFFFF] w-[330px] h-[128px] flex gap-1 items-center shadow-2xl text-center rounded-[14px] mt-4">
        <div className="flex flex-col text-center gap-2">
          <p className="text-[14px] font-semibold text-[#6B7276]">Monday</p>
          <h3 className="text-[16px] font-bold ">Mr John</h3>
        </div>
        <div className="w-[3px] h-[48px] border-6 bg-[#4488AC]"></div>
        <div className="flex flex-col text-center gap-2">
          <p className="text-[14px] font-semibold text-[#6B7276]">2:00pm</p>
          <h3 className="text-[16px] font-bold ">18th Oct., 2023</h3>
        </div>
        <div className="w-[3px] h-[48px] border-6 bg-[rgb(68,136,172)]"></div>
        <div className="flex flex-col text-center gap-2">
          <p className="text-[14px] font-semibold text-[#6B7276]">
            Mathematics
          </p>
          <h3 className="text-[16px] font-bold ">Quad. Equation</h3>
        </div>
      </div>
    </div>
  );
};

export default UpcomingClasses;
