import React from "react";
import { newTutor, tutorImg } from "../assets/images";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
  return (
    <div className="">
      <h2 className="text[18px] font-bold py-[10px]">October 18th, 2023</h2>
      <p className="text-[#6B7276]">
        I had a great time speaking with Temitope - honestly I just needed the
        right tutor. I had a great time speaking with Temitope - honestly I just
        needed the right tutor. I had a great time speaking with Temitope -
        honestly I just needed the right tutor.
      </p>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-[18px] py-5 px-1">
          <div className="w-[60px] h-[60px] rounded-full">
            <img src={newTutor} className=" h-full w-full bg-cover" alt="" />
          </div>
          <div className="">
            <p className="text-[18px] font-medium">Tayo Abidemi</p>
            <p className="text-[14px] font-normal text-[#6B7276]">Student</p>
          </div>
        </div>
        <div className="flex gap-2">
          <FaStar className="text-[#FF8C42]" />
          <FaStar className="text-[#FF8C42]" />
          <FaStar className="text-[#FF8C42]" />
          <FaStar className="text-[#FF8C42]" />
          <FaStar className="text-[#A9AEB1]" />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
