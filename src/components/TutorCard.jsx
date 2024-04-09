import React from 'react'
import { tutorImg } from '../assets/images';
import { Link } from 'react-router-dom';
import { TiMessages } from 'react-icons/ti';

const TutorCard = () => {
  return (
    <>
      <Link to={"/tutors/tutor/overview"}>
        <div className="h-[420px] w-[340px] shadow-xl bg-opacity-14 bg-white rounded-xl flex flex-col pt-[20px] px-[16px] font-lexend">
          <img src={tutorImg} alt="" className="" />
          <div className="h-[54px] flex flex-col mt-[12px] px-[4px]">
            <p className="text-[18px] font-bold">Temitope Akinyemi</p>
            <p className="flex items-center gap-3 text-[18px]">
              <TiMessages className="text-[18px] text-[#4488AC]" /> 6 sessions{" "}
              <span className="text-[#6B7276]">(2 reviews)</span>
            </p>
          </div>
          <div className="flex flex-row justify-between w-full px-3 py-1 mt-[28px] rounded-[4px] bg-[#F5F5F5] h-fit">
            <div className="">
              <p className="text-[#6B7276]">Experience</p>
              <p>8 years</p>
            </div>
            <div className="">
              <p className="text-[#6B7276]">Expertise</p>
              <p>Mathematics</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default TutorCard