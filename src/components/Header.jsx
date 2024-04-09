import React from "react";
import { HiOutlineBell } from "react-icons/hi";
import { BiSolidUserCircle, BiSolidDownArrow } from "react-icons/bi";

const Header = () => {
  return (
    <div className="w-full h-[80px] py-4 font-lexend border-b  border-[#FF8C42] flex justify-between items-center px-4">
      <h4 className="text-[16px] font-medium text-[#6B7276]">
        Tuesday, October 17th, 2023
      </h4>
      <div className="flex justify-between items-center gap-2 px-8">
        <HiOutlineBell className="mr-8 text-[32px] text-[#6B7276]" />
        <BiSolidUserCircle className="text-[40px] text-[#82B0C8]" />
        <p className="text-[22px] text-[#6B7276]">Tayo Abidemi</p>
        <BiSolidDownArrow className="text-[14px] text-[#3B3F42]" />
      </div>
    </div>
  );
};

export default Header;
