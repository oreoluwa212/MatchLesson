import React, { useState } from "react";
import {
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
} from "../assets/images";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Subjects = () => {
  const [activeScreen, setActiveScreen] = useState(1);

  return (
    <div className="h-screen flex flex-row ">
      <Sidebar />
      <div className="w-4/5 h-full  overflow-auto flex flex-col bg-white items-center font-lexend justify-start">
        <Header />
        <div className="font-lexend w-full">
          <div className="  w-full">
            <div className="flex flex-row px-8 gap-8 w-full text-[22px] text-[#8F8F8F] font-medium h-[92px] pt-[40px] border-b-2 border-[#D6D6D6]">
              <button
                onClick={() => setActiveScreen(1)}
                className={
                  activeScreen === 1
                    ? "text-[#4488AC] border-[#4488AC] border-b-4 pb-[24px]  px-[12px]"
                    : "px-[12px]"
                }
              >
                All Subjects
              </button>
              <button
                onClick={() => setActiveScreen(2)}
                className={
                  activeScreen === 2
                    ? "text-[#4488AC] border-[#4488AC] border-b-4 pb-[24px]  px-[12px]"
                    : "px-[12px]"
                }
              >
                My Subjects
              </button>
            </div>
            {activeScreen === 1 ? (
              <div className="grid grid-cols-3 gap-6  w-full px-8 pb-10 pt-10">
                <div className=" h-[150px] pl-8 px-4 shadow-lg flex justify-start gap-4 items-center rounded-[12px] bg-white">
                  <img className="w-[60px] h-[60px]" src={icon1} alt="" />
                  <div className="ml-4">
                    <h4 className="text-[#3B3F42] font-medium text-[22px]">
                      Use of English
                    </h4>
                    <button className="text-white w-[150px] mr-8 mt-6 rounded-[8px] gap-[12px] p-2  bg-[#4488AC] font-medium text-[16px] ">
                      Select Subject
                    </button>
                  </div>
                </div>
                <div className=" h-[150px] pl-8 px-4 shadow-lg flex justify-start gap-4 items-center rounded-[12px] bg-white">
                  <img className="w-[60px] h-[60px]" src={icon2} alt="" />
                  <div className="ml-4">
                    <h4 className="text-[#3B3F42] font-medium text-[22px]">
                      Mathematics
                    </h4>
                    <button className="text-white w-[150px] mr-8 mt-6 rounded-[8px] gap-[12px] p-2 bg-[#4488AC] font-medium text-[16px] ">
                      Select Subject
                    </button>
                  </div>
                </div>
                <div className=" h-[150px] pl-8 px-4 shadow-lg flex justify-start gap-4 items-center rounded-[12px] bg-white">
                  <img className="w-[60px] h-[60px]" src={icon3} alt="" />
                  <div className="ml-4">
                    <h4 className="text-[#3B3F42] font-medium text-[22px]">
                      Biology
                    </h4>
                    <button className="text-white w-[150px] mr-8 mt-6 rounded-[8px] gap-[12px] p-2 bg-[#4488AC] font-medium text-[16px] ">
                      Select Subject
                    </button>
                  </div>
                </div>
                <div className=" h-[150px] pl-8 px-4 shadow-lg flex justify-start gap-4 items-center rounded-[12px] bg-white">
                  <img className="w-[60px] h-[60px]" src={icon4} alt="" />
                  <div className="ml-4">
                    <h4 className="text-[#3B3F42] font-medium text-[22px]">
                      Chemistry
                    </h4>
                    <button className="text-white w-[150px] mr-8 mt-6 rounded-[8px] gap-[12px] p-2 bg-[#4488AC] font-medium text-[16px] ">
                      Select Subject
                    </button>
                  </div>
                </div>
                <div className=" h-[150px] pl-8 px-4 shadow-lg flex justify-start gap-4 items-center rounded-[12px] bg-white">
                  <img className="w-[60px] h-[60px]" src={icon5} alt="" />
                  <div className="ml-4">
                    <h4 className="text-[#3B3F42] font-medium text-[22px]">
                      Accounting
                    </h4>
                    <button className="text-white w-[150px] mr-8 mt-6 rounded-[8px] gap-[12px] p-2 bg-[#4488AC] font-medium text-[16px] ">
                      Select Subject
                    </button>
                  </div>
                </div>
                <div className=" h-[150px] pl-8 px-4 shadow-lg flex justify-start gap-4 items-center rounded-[12px] bg-white">
                  <img className="w-[60px] h-[60px]" src={icon6} alt="" />
                  <div className="ml-4">
                    <h4 className="text-[#3B3F42] font-medium text-[22px]">
                      Commerce
                    </h4>
                    <button className="text-white w-[150px] mr-8 mt-6 rounded-[8px] gap-[12px] p-2 bg-[#4488AC] font-medium text-[16px] ">
                      Select Subject
                    </button>
                  </div>
                </div>
                <div className=" h-[150px] pl-8 px-4 shadow-lg flex justify-start gap-4 items-center rounded-[12px] bg-white">
                  <img className="w-[60px] h-[60px]" src={icon7} alt="" />
                  <div className="ml-4">
                    <h4 className="text-[#3B3F42] font-medium text-[22px]">
                      Economics
                    </h4>
                    <button className="text-white w-[150px] mr-8 mt-6 rounded-[8px] gap-[12px] p-2 bg-[#4488AC] font-medium text-[16px] ">
                      Select Subject
                    </button>
                  </div>
                </div>
                <div className=" h-[150px] pl-8 px-4 shadow-lg flex justify-start gap-4 items-center rounded-[12px] bg-white">
                  <img className="w-[60px] h-[60px]" src={icon7} alt="" />
                  <div className="ml-4">
                    <h4 className="text-[#3B3F42] font-medium text-[22px]">
                      Physics
                    </h4>
                    <button className="text-white w-[150px] mr-8 mt-6 rounded-[8px] gap-[12px] p-2 bg-[#4488AC] font-medium text-[16px] ">
                      Select Subject
                    </button>
                  </div>
                </div>
              </div>
            ) : activeScreen === 2 ? (
              <div className="grid grid-cols-3 gap-6 pt-10 w-full px-8 pb-10">
                <div className=" h-[150px] pl-8 px-4 shadow-lg flex justify-start gap-4 items-center rounded-[12px] bg-white">
                  <img className="w-[60px] h-[60px]" src={icon1} alt="" />
                  <div className="ml-4">
                    <h4 className="text-[#3B3F42] font-medium text-[22px]">
                      Use of English
                    </h4>
                    <button className="text-white w-[150px] mr-8 mt-6 rounded-[8px] gap-[12px] p-2  bg-[#4488AC] font-medium text-[16px] ">
                      View Subject
                    </button>
                  </div>
                </div>
                <div className=" h-[150px] pl-8 px-4 shadow-lg flex justify-start gap-4 items-center rounded-[12px] bg-white">
                  <img className="w-[60px] h-[60px]" src={icon3} alt="" />
                  <div className="ml-4">
                    <h4 className="text-[#3B3F42] font-medium text-[22px]">
                      Biology
                    </h4>
                    <button className="text-white w-[150px] mr-8 mt-6 rounded-[8px] gap-[12px] p-2 bg-[#4488AC] font-medium text-[16px] ">
                      View Subject
                    </button>
                  </div>
                </div>
                <div className=" h-[150px] pl-8 px-4 shadow-lg flex justify-start gap-4 items-center rounded-[12px] bg-white">
                  <img className="w-[60px] h-[60px]" src={icon4} alt="" />
                  <div className="ml-4">
                    <h4 className="text-[#3B3F42] font-medium text-[22px]">
                      Chemistry
                    </h4>
                    <button className="text-white w-[150px] mr-8 mt-6 rounded-[8px] gap-[12px] p-2 bg-[#4488AC] font-medium text-[16px] ">
                      View Subject
                    </button>
                  </div>
                </div>

                <div className=" h-[150px] pl-8 px-4 shadow-lg flex justify-start gap-4 items-center rounded-[12px] bg-white">
                  <img className="w-[60px] h-[60px]" src={icon7} alt="" />
                  <div className="ml-4">
                    <h4 className="text-[#3B3F42] font-medium text-[22px]">
                      Physics
                    </h4>
                    <button className="text-white w-[150px] mr-8 mt-6 rounded-[8px] gap-[12px] p-2 bg-[#4488AC] font-medium text-[16px] ">
                      View Subject
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subjects;
