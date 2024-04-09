import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { newTutor, tutorImg } from "../assets/images";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { TiFlash } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import TutorReview from "./TutorReview";
import TutorSyllabus from "./TutorSyllabus";

const TutorOverview = () => {
  const navigate = useNavigate();
  const [activeScreen, setActiveScreen] = useState(1);
  return (
    <div className="flex flex-row h-screen">
      <Sidebar />
      <div className="w-4/5 flex flex-col h-full overflow-auto bg-white font-lexend justify-start">
        <Header />
        <Link to="/tutors">
          <FaAngleLeft className="text-[30px] text-[#3B3F42] ml-[40px] mt-[30px]" />
        </Link>
        <div className="w-full mt-10 flex flex-col items-center">
          <div className="w-[200px] h-[200px] rounded-full bg-slate-600">
            <img
              src={newTutor}
              alt=""
              className=" h-full w-full bg-cover rounded-full"
            />
          </div>
          <p className="pt-[16px] text-[28px] font-bold text-[#3B3F42]">
            Temitayo Akinyemi
          </p>
        </div>
        <div className="flex flex-row px-8 gap-8 w-full text-[22px] justify-start items-center text-[#8F8F8F] font-medium h-[92px] pt-[40px] ">
          <button
            onClick={() => setActiveScreen(1)}
            className={
              activeScreen === 1
                ? "text-[#4488AC] border-[#4488AC] border-b-4 pb-[24px]  px-[12px]"
                : "px-[12px]"
            }
          >
            Overview
          </button>
          <button
            onClick={() => setActiveScreen(2)}
            className={
              activeScreen === 2
                ? "text-[#4488AC] border-[#4488AC] border-b-4 pb-[24px]  px-[12px]"
                : "px-[12px]"
            }
          >
            Reviews
          </button>
          <button
            onClick={() => setActiveScreen(3)}
            className={
              activeScreen === 3
                ? "text-[#4488AC] border-[#4488AC] border-b-4 pb-[24px]  px-[12px]"
                : "px-[12px]"
            }
          >
            Teaching Syllabus
          </button>
        </div>
        {activeScreen === 1 ? (
          <div className="border-t-2 pb-10 px-8 pt-10 flex justify-center items-start flex-row gap-4 ">
            {/* grid-one  */}
            <div className="w-1/2 ">
              <div className="w-full">
                <p className=" text-[18px] mb-[12px] ">
                  Hi! I’m Temitope, a mathematics tutor. Hi! I’m Temitope, a
                  mathematics tutor. Hi! I’m Temitope, a mathematics tutor. Hi!
                  I’m Temitope, a mathematics tutor. Hi! I’m Temitope, a
                  mathematics tutor. Hi! I’m Temitope, a mathematics tutor.
                </p>
                <a className="text-[#4488AC] font-bold" href="#">
                  Show more
                </a>
              </div>
              <hr className="border-t-2 border-gray-300 w-[500px] mt-[26px] " />

              <div className="mt-[24px] text-[#3B3F42] text-[22px] font-bold">
                <div className="flex flex-col">
                  <p>One-on-one Sessions</p>
                  <div className="w-[500px] h-[310px] shadow-xl bg-opacity-14 bg-white rounded-xl flex flex-col ">
                    <div className="justify-between items-center p-6 h-[104px] flex">
                      <p className="text-[#6B7276] text-[18px]">
                        Sessions completed
                      </p>
                      <div className="flex gap-1 h-[56px] w-[77px] border-2 border-[#4488AC] bg-[#DAE7EE] justify-center rounded-xl items-center">
                        <TiFlash className="text-[#4488AC] text-[20px]" />
                        <p className="text-[18px] text-[#4488AC]">6</p>
                      </div>
                    </div>
                    <hr className="border-t-2 border-gray-300 w-full" />
                    <div className="justify-between items-center p-6 h-[104px] flex">
                      <p className="text-[#6B7276] text-[18px]">Education</p>
                      <div className="flex gap-4 justify-center items-center">
                        <button className="rounded-xl bg-transparent border h-[56px] w-[140px] text-[18px]">
                          BSc Physics
                        </button>
                        <button className="rounded-xl bg-transparent border h-[56px] w-[140px] text-[18px]">
                          MSc Physics
                        </button>
                      </div>
                    </div>
                    <hr className="border-t-2 border-gray-300 w-full" />
                    <div className="justify-between items-center p-6 h-[104px] flex">
                      <p className="text-[#6B7276] text-[18px]">Fluent In</p>
                      <div className="flex gap-1 justify-center items-center">
                        <button className="rounded-xl bg-transparent border h-[56px] w-[100px] text-[18px]">
                          English
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[24px] text-[#3B3F42] text-[22px] font-bold">
                <div className="flex flex-col">
                  <p>Background</p>
                  <div className="w-full h-[310px] shadow-xl bg-opacity-14 bg-white rounded-xl flex flex-col ">
                    <div className="justify-between items-center p-6 h-[104px] flex">
                      <p className="text-[#6B7276] text-[18px]">
                        Sessions completed
                      </p>
                      <div className="flex gap-1 justify-center items-center">
                        <button className="rounded-xl bg-transparent border text-[#FF8C42] border-[#FF8C42] p-[16px] h-[56px] w-[150px] text-[18px] bg-[#FFE8D9]">
                          Mathematics
                        </button>
                      </div>
                    </div>
                    <hr className="border-t-2 border-gray-300 w-full" />
                    <div className="justify-between items-center p-6 h-[104px] flex">
                      <p className="text-[#6B7276] text-[18px]">Education</p>
                      <div className="flex gap-1 justify-center items-center">
                        <button className="rounded-xl bg-transparent border h-[56px] w-[238px] text-[18px]">
                          BSc Computer Science
                        </button>
                      </div>
                    </div>
                    <hr className="border-t-2 border-gray-300 w-full" />
                    <div className="justify-between items-center p-6 h-[104px] flex">
                      <p className="text-[#6B7276] text-[18px]">Fluent In</p>
                      <button className="rounded-xl bg-transparent border h-[56px] w-[100px] text-[18px]">
                        English
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[24px] text-[#3B3F42] text-[22px] font-bold">
                <div className="flex flex-col">
                  <p>Experience</p>
                  <div className="w-full h-[208px] shadow-xl bg-opacity-14 bg-white rounded-xl flex flex-col ">
                    <div className="justify-between items-center p-6 h-[104px] flex">
                      <div className="flex flex-col">
                        <p className="text-[#6B7276] text-[18px]">
                          Long Ford High School
                        </p>
                        <p className="text-[#6B7276] text-[14px] font-medium">
                          Mathematics Teacher
                        </p>
                      </div>
                      <div className="flex justify-center items-center">
                        <button className="rounded-xl bg-transparent border h-[56px] w-[100px] text-[18px]">
                          5 Years
                        </button>
                      </div>
                    </div>
                    <hr className="border-t-2 border-gray-300 w-full" />
                    <div className="justify-between items-center p-6 h-[104px] flex">
                      <div className="flex flex-col">
                        <p className="text-[#6B7276] text-[18px]">
                          Long Ford High School
                        </p>
                        <p className="text-[#6B7276] text-[14px] font-medium">
                          Physics Teacher
                        </p>
                      </div>
                      <div className="flex justify-center items-center">
                        <button className="rounded-xl bg-transparent border h-[56px] w-[100px] text-[18px]">
                          5 Years
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* grid-two  */}
            <div className="  rounded-[20px] px-4 border-[#39718F] border shadow-xl w-1/2">
              <div className="flex flex-col gap-[16px] pt-[26px]">
                <p className="text-[22px] font-bold">Price Per Month</p>
                <p className="text-[16px] font-medium">
                  Your one-on-one sessions are subscription based and
                  affordable.
                </p>
                <p className="mb-[10px] text-[20px] font-bold">#7,000.00</p>
                <hr className="border-t-2 border-gray-300 w-full" />
              </div>
              <div className="flex flex-col gap-[16px] pt-[26px]">
                <p className="text-[22px] font-bold">Teaching Timeline</p>
                <p className="text-[16px] font-medium">
                  Estimated timeline to finish the syllabus
                </p>
                <p className="mb-[10px] text-[20px] font-bold">
                  3 Months - 5 Months
                </p>
                <hr className="border-t-2 border-gray-300 w-full" />
              </div>
              <div className="flex flex-col gap-[16px] pt-[26px]">
                <p className="text-[22px] font-bold">Teaching Mode</p>
                <p className="text-[16px] font-medium">
                  You'll be tutored virtually, link will be sent to your email.
                </p>
                <p className="mb-[10px] text-[20px] font-bold">
                  Google Meet or Zoom
                </p>
                <hr className="border-t-2 border-gray-300 w-full" />
              </div>
              <div className="flex flex-col gap-[16px] pt-[26px]">
                <p className="text-[22px] font-bold">Available Sessions</p>
                <p className="text-[16px] font-medium">
                  Book one-on-one sessions from the option available
                </p>
                <div className="">
                  <div className="flex flex-row gap-[24px] items-center">
                    <div className="flex flex-col items-center justify-center h-[106px] w-[82px] rounded-[12px] shadow-2xl gap-1">
                      <p className="font-semibold text-[#6B7276]">FRI</p>
                      <p className="font-bold ">19 Oct</p>
                      <p className="text-[16px] text-[#4488AC] font-bold">
                        10 slots
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center h-[106px] w-[82px] rounded-[12px] shadow-2xl gap-1">
                      <p className="font-semibold text-[#6B7276]">FRI</p>
                      <p className="font-bold ">19 Oct</p>
                      <p className="text-[16px] text-[#4488AC] font-bold">
                        10 slots
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center h-[106px] w-[82px] rounded-[12px] shadow-2xl gap-1 ">
                      <p className="font-semibold text-[#6B7276]">FRI</p>
                      <p className="font-bold ">19 Oct</p>
                      <p className="text-[16px] text-[#4488AC] font-bold">
                        10 slots
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center h-[106px] w-[82px] rounded-[12px] shadow-2xl gap-1">
                      <p className="font-semibold text-[#6B7276]">FRI</p>
                      <p className="font-bold ">19 Oct</p>
                      <p className="text-[16px] text-[#4488AC] font-bold">
                        10 slots
                      </p>
                    </div>
                    <p className="text-[#4488AC] font-bold text-[18px]">
                      View All
                    </p>
                    <FaAngleRight className="text-[#4488AC] text-[26px]" />
                  </div>
                </div>
                <hr className="border-t-2 mt-4 border-gray-300 w-full" />
              </div>
              <div className="flex flex-col gap-[16px] pt-[26px]">
                <div className="flex justify-between pr-5">
                  <p className="text-[22px] font-bold">Available Time Slots</p>
                  <FaAngleRight className="text-[#4488AC] text-[26px]" />
                </div>
                <div className="flex flex-row gap-[24px]">
                  <button className="rounded-xl bg-transparent border h-[56px] w-[117px] text-[18px] font-bold shadow-lg">
                    12:00 pm
                  </button>
                  <button className="rounded-xl bg-transparent border h-[56px] w-[117px] text-[18px] font-bold shadow-lg">
                    12:00 pm
                  </button>
                  <button className="rounded-xl bg-transparent border h-[56px] w-[117px] text-[18px] font-bold shadow-lg">
                    12:00 pm
                  </button>
                  <button className="rounded-xl bg-transparent border h-[56px] w-[117px] text-[18px] font-bold shadow-lg">
                    12:00 pm
                  </button>
                </div>
                <div className="flex flex-row gap-[24px]">
                  <button className="rounded-xl bg-transparent border h-[56px] w-[117px] text-[18px] font-bold shadow-lg">
                    12:00 pm
                  </button>
                  <button className="rounded-xl bg-transparent border h-[56px] w-[117px] text-[18px] font-bold shadow-lg">
                    12:00 pm
                  </button>
                  <button className="rounded-xl bg-transparent border h-[56px] w-[117px] text-[18px] font-bold shadow-lg">
                    12:00 pm
                  </button>
                  <button className="rounded-xl bg-transparent border h-[56px] w-[117px] text-[18px] font-bold shadow-lg">
                    12:00 pm
                  </button>
                </div>

                <div className="w-full flex justify-center items-center">
                  <button
                    onClick={() => navigate("/tutors/tutor/book-a-session")}
                    className="w-10/12  mb-8 h-[52px] bg-[#4488AC] text-white font-bold rounded-xl"
                  >
                    Book A Session
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : activeScreen === 2 ? (
          <TutorReview />
        ) : activeScreen === 3 ? (
          <TutorSyllabus />
        ) : null}
      </div>
    </div>
  );
};

export default TutorOverview;
