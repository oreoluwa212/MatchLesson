import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TutorCard from "../components/TutorCard";

const Tutor = () => {
  return (
    <div className="h-screen flex flex-row ">
      <Sidebar />
      <div className="w-4/5 h-full  overflow-auto flex flex-col bg-white items-center font-lexend justify-start">
        <Header />
        <div className="w-full">
          <div className="flex flex-col w-full">
            <div className="flex flex-row px-8 gap-8 text-[22px] justify-between items-center text-[#8F8F8F] font-medium h-[92px] pt-[40px] w-full">
              <p className="text-[#4488AC] border-[#4488AC] border-b-4">All</p>
              <p className="">Eng</p>
              <p className="">Math</p>
              <p className="">Bio</p>
              <p className="">Phy</p>
              <p className="">Econ</p>
              <p className="w">Lit-in-Eng</p>
              <p className="">Chem</p>
              <p className="">Gov</p>
              <p className="">Geo</p>
              <p className="">Acc</p>
            </div>
            <div className="w-full justify-center items-center grid grid-cols-3 gap-8 mt-10  px-8">
              <TutorCard />
              <TutorCard />
              <TutorCard />
              <TutorCard />
              <TutorCard />
              <TutorCard />
            </div>
          </div>
          <div className="flex my-[100px] items-center justify-center">
            <button className=" font-semibold text-white text-[16px] rounded-[8px] h-[60px] w-[400px] bg-[#4488AC]">
              Load More Tutors
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutor;
