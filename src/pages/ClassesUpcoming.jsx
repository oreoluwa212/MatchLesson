import React from "react";
import { Link } from "react-router-dom";
import ClassesUpcomingOpen from "./ClassesUpcomingOpen";
import ClassesDue from "./ClassesDue";
import ClassesDueOpen from "./ClassesDueOpen";
import ClassesCompleted from "./ClassesCompleted";
import ClassesCompletedOpen from "./ClassesCompletedOpen";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { man } from "../assets/images";
import IntroCourse from "../components/IntroCourse";

const ClassesUpcoming = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className=" bg-white w-full overflow-hidden text-left ">
        <Header />
        <div className=" px-12 bg-white  overflow-hidden text-lg text-primary-main font-['Lexend'] ">
          <div className=" flex flex-col  gap-[8px]">
            <div className="flex flex-row  justify-start text-[18px] py-8">
              <div className=" flex flex-col gap-4">
                <p className="text-[#4488AC] text-[26px] font-medium">
                  Hello Tayo!
                </p>
                <p>Welcome to ..................... </p>
              </div>
            </div>
          </div>

          {/* --------------For the Next Page--------------  */}
          {/* <div className=" flex flex-row items-start justify-start pt-10 px-10 pb-0 gap-[52px] text-3xl 0">
            <div className="flex flex-row items-start justify-start pt-0 px-3 pb-6 text-primary-main border-b-[5px] border-solid border-primary-main">
              <div className="relative leading-[28px] font-medium">English</div>
            </div>
            <div className="flex flex-row items-start justify-start pt-0 px-3 pb-6">
              <div className="relative leading-[28px] font-medium">
                Mathematics
              </div>
            </div>
            <div className="flex flex-row items-start justify-start pt-0 px-3 pb-6">
              <div className="relative leading-[28px] font-medium">
                Economics
              </div>
            </div>
            <div className="flex flex-row items-start justify-start pt-0 px-3 pb-6">
              <div className="relative leading-[28px] font-medium">
                Accounting
              </div>
            </div>
          </div> */}

          {/* Timeline  */}
          <div className=" flex flex-row items-start gap-[32px] text-base text-neutral-20">
            <div className="rounded-xl bg-white shadow-xl flex  h-[60px] w-[280px] px-2 items-center justify-center gap-[13px]">
              <div className=" font-medium">
                <p>Timeline:</p>
              </div>
              <div className=" font-medium text-primary-80">
                <p>8 months</p>
              </div>
            </div>
            <div className="rounded-xl bg-white shadow-[0px_6px_30px_5px_rgba(0,_0,_0,_0.07)] w-2/5 flex flex-row h-[60px] px-4 justify-between items-center">
              <div className="w-3/5 rounded-[14px] bg-[#4488AC] h-[20px] "></div>
              <div className=" h-[20px] flex rounded-[14px]"></div>
              <p className="font-medium">70% done</p>
            </div>
            <div className="rounded-lg box-border border-[#4488AC] w-[266px] flex flex-row items-center justify-center py-[18px] px-8 gap-[12px] text-primary-main border-[2px] border-solid border-primary-main h-[60px]">
              <b className="leading-[24px]">View Syllabus</b>
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
                alt=""
                src={man}
              />
            </div>
          </div>

          {/* Upcoming  */}
          <div className=" flex flex-row pt-[40px] items-start box-border gap-[32px]">
            <div className="rounded-lg bg-[#DAE7EE] border-[#4488AC] flex flex-row items-center justify-center py-3 px-[18px] border-2 ">
              <b className=" text-[#4488AC">Upcoming</b>
            </div>
            <div className="rounded-lg flex flex-row items-center justify-center py-3 px-[18px] text-indianred">
              <b className="relative leading-[24px] text-[#AC4444]">Due</b>
            </div>
            <div className="rounded-lg flex flex-row items-center justify-center py-3 px-[18px] text-forestgreen">
              <b className="relative leading-[24px] text-[#65AC44]">
                Completed
              </b>
            </div>
          </div>

          {/* Introduction  */}

          <div className="flex flex-col">
            <IntroCourse />
          </div>
          <div className="flex flex-col">
            <IntroCourse />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesUpcoming;
