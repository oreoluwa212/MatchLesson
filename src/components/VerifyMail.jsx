import React from "react";
import { Logo } from "../assets/images";
import { HiMail } from "react-icons/hi";

const VerifyMail = () => {
  return (
    <div className="bg-white font-lexend w-full h-screen flex flex-col gap-28 justify-start items-center">
      <div className="w-[315px] h-[60px] mt-8">
        <img src={Logo} alt="" className="w-full h-full bg-cover" />
      </div>
      <div className="w-2/5 pt-6 px-16 pb-12 flex justify-center items-center  flex-col bg-white shadow-2xl rounded-lg">
        <h4 className="text-[36px] text-center font-bold text-[#39718F]">
          Verify your email
        </h4>
        <h4 className="text-[16px] text-center text-[#645D5D]">
          A verification email has been sent to your email address,
        </h4>
        <HiMail className="text-primary text-[90px] mt-4 text-center" />
      </div>
    </div>
  );
};

export default VerifyMail;
