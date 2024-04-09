import React, { useState } from "react";
import { Logo } from "../assets/images";
import { useNavigate } from "react-router";

const Onboard = () => {
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();
  return (
    <div className="bg-white font-lexend w-full h-screen flex flex-col gap-28 justify-start items-center">
      <div className="w-[315px] h-[60px] mt-8">
        <img src={Logo} alt="" className="w-full h-full bg-cover" />
      </div>
      <div className="w-2/5 pt-6 px-16 pb-12 bg-white shadow-2xl rounded-lg">
        <h4 className="text-[36px] text-center font-bold text-[#39718F]">
          Get Started!
        </h4>
        <h4 className="text-[16px] text-center text-[#645D5D]">
          Create an account and get started.
        </h4>
        <button
          onClick={() => {
            setUserType("STUDENT");
            navigate("/sign-up", {
              state: {
                userType: userType,
              },
            });
          }}
          className="w-full h-[52px] mt-8 rounded-xl bg-primary  text-[16px] text-white"
        >
          Create an account as a Student
        </button>
        <button
          onClick={() => {
            setUserType("TUTOR");
            navigate("/sign-up", {
              state: {
                userType: userType,
              },
            });
          }}
          className="w-full h-[52px] mt-6 rounded-xl bg-transparent text-primary border border-primary  text-[16px] "
        >
          Create an account as a Tutor
        </button>
      </div>
    </div>
  );
};

export default Onboard;
