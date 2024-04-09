import React, { useState } from "react";
import ResourcesCard from "../components/ResourcesCard";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TutorReview from "./TutorReview";
import TutorSyllabus from "./TutorSyllabus";

const ResourcesPage = () => {
  const [activeScreen, setActiveScreen] = useState(1);
  return (
    <div className="flex flex-row h-screen">
      <Sidebar />
      <div className="w-4/5 flex flex-col h-full overflow-auto bg-white font-lexend justify-start">
        <Header />
        <h1 className="text-[28px] px-[40px] pt-[20px] text-[#4488AC]">
          Resources
        </h1>
        <div className="flex flex-row justify-start items-center px-8 gap-8 w-full text-[22px] text-[#8F8F8F] font-medium  pt-10 ">
          <button
            onClick={() => setActiveScreen(1)}
            className={
              activeScreen === 1
                ? "text-[#4488AC] border-[#4488AC] border-b-4 pb-[12px]  px-[12px]"
                : "px-[12px]"
            }
          >
            All
          </button>
          <button
            onClick={() => setActiveScreen(2)}
            className={
              activeScreen === 2
                ? "text-[#4488AC] border-[#4488AC] border-b-4 pb-[12px]  px-[12px]"
                : "px-[12px]"
            }
          >
            Past Questions
          </button>
          <button
            onClick={() => setActiveScreen(3)}
            className={
              activeScreen === 3
                ? "text-[#4488AC] border-[#4488AC] border-b-4 pb-[12px]  px-[12px]"
                : "px-[12px]"
            }
          >
            Quizzes
          </button>
        </div>
        <div className="w-full pb-10 grid grid-cols-4 gap-8 px-8 mt-10">
          <ResourcesCard />
          <ResourcesCard />
          <ResourcesCard />
          <ResourcesCard />
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
