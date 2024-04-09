import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { RiBookOpenFill } from "react-icons/ri";
import {
  BsPeopleFill,
  BsFillCameraVideoFill,
  BsFillCreditCardFill,
} from "react-icons/bs";
import UpcomingClasses from "../components/UpcomingClasses";
import Continuelearning from "../components/Continuelearning";

const Dashboard = () => {
  return (
    <div className="h-screen flex flex-row overflow-x-hidden">
      <Sidebar />
      <div className="w-4/5 h-full  overflow-auto flex flex-col bg-white items-center font-lexend justify-start">
        <div className="w-full">
          <Header />
        </div>
        <div className="font-lexend w-full  px-8 pt-10">
          <div className="text-3xl">
            <h1 className="text-[28px] font-medium text-[#4488AC]">
              Hello Tayo!
            </h1>
            <p className="text-[#4F5457] text-[18px]">
              Welcome to .....................
            </p>
          </div>
          <div className="grid grid-cols-4 gap-6 pt-6 w-full text-[#FFFFFF]">
            <div className=" h-[120px] px-[30px] flex justify-start gap-6 items-center rounded-[20px] bg-[#4488AC]">
              <RiBookOpenFill className="text-white text-[40px]" />
              <div>
                <h4 className="text-white font-medium text-[18px]">
                  My Subjects
                </h4>
                <h4 className="text-white font-medium text-[24px] ">4</h4>
              </div>
            </div>
            <div className=" h-[120px] px-[30px] flex justify-start gap-6 items-center rounded-[20px] bg-[#4488AC]">
              <BsFillCameraVideoFill className="text-white text-[40px]" />
              <div>
                <h4 className="text-white font-medium text-[18px]">
                  My Classes
                </h4>
                <h4 className="text-white font-medium text-[24px] ">8</h4>
              </div>
            </div>
            <div className=" h-[120px] px-[30px] flex justify-start gap-6 items-center rounded-[20px] bg-[#4488AC]">
              <BsPeopleFill className="text-white text-[40px]" />
              <div>
                <h4 className="text-white font-medium text-[18px]">
                  My Tutors
                </h4>
                <h4 className="text-white font-medium text-[24px] ">4</h4>
              </div>
            </div>
            <div className=" h-[120px] px-[30px] flex justify-start gap-6 items-center rounded-[20px] bg-[#4488AC]">
              <BsFillCreditCardFill className="text-white text-[40px]" />
              <div>
                <h4 className="text-white font-medium text-[18px]">
                  My Wallet
                </h4>
                <h4 className="text-white font-medium text-[24px] ">N10,000</h4>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h4 className="text-[22px] font-medium">Upcoming Classes</h4>
            <div className="flex gap-4 flex-row justify-center items-center">
              <UpcomingClasses />
              <UpcomingClasses />
              <UpcomingClasses />
            </div>
            <div className="flex justify-end mt-10 text-[16px] text-[#4488AC]">
              <h4 className="font-bold text-[16px]">View all classes</h4>
            </div>
          </div>
          <div className="my-12">
            <h4 className="text-[22px] font-medium">Continue Learning</h4>

            <div className="flex justify-between ">
              <Continuelearning />
              <Continuelearning />
              <Continuelearning />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
