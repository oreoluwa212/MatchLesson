import React from "react";
import { calendar, clock, man } from "../assets/images";

const IntroCourse = () => {
  return (
    <div className="bg-white shadow-2xl w-[93%] h-[195px] mt-[40px]">
      <div className="flex flex-col gap-[10px]">
        {/* -----top----- */}
        <div className="flex justify-between ">
          {/* first-div  */}
          <div className="flex flex-row items-end justify-start gap-[13px]">
            <div className="relative w-7 h-7">
              <div className="rounded-[50%] bg-primary-10 box-border w-7 h-7 border-[1px] border-solid border-primary-main" />
              <b className="absolute top-[2px] left-[7px] leading-[24px]">U</b>
            </div>
            <b className="leading-[32px] inline-block text-[#224456] text-[24px] w-[569px] shrink-0">
              Introduction to English Language
            </b>
          </div>

          {/* second-div  */}
          <div className="flex gap-[50px] px-5 pt-4">
            <div className="flex flex-row gap-[5px] text-[#4488AC] font-semibold">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src={calendar}
              />
              <p>Today</p>
            </div>

            <div className="flex flex-row items-start justify-start gap-[5px] text-neutral-20">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src={clock}
              />
              <p className="text-[16px] text-[#3B3F42] font-normal">
                10:15am - 12:15am
              </p>
            </div>
          </div>
        </div>

        {/* ------ bottom ------- */}
        <div className=" flex flex-col px-10">
          <div className="">
            <h3 className="text-[18px] font-medium text-[#4F5457]">
              Alphabets, Spellings and Words in a sentence
            </h3>
          </div>

          <div className="flex flex-row justify-between">
            <div className="leading-[20px] inline-block w-[520px] h-[63px]">
              <p className="text-[14px] text-[#4F5457]">
                Lorem ipsum dolor sit amet consectetur. Feugiat dignissim
                vestibulum vitae eu lacus vel pulvinar. Diam turpis eleifend
                bibendum curabitur. Risus purus nisl amet a enim. Gravida vel
                non congue cursus cursus.
              </p>
            </div>
            <div className="flex flex-row items-center gap-[16px] text-base text-neutral-20">
              <div className="flex flex-col justify-start">
                <div className="tracking-[0.01em] leading-[24px]">
                  Temitope Akinyemi
                </div>
                <div className="text-xs leading-[16px] font-medium text-neutral-90">
                  Tutor
                </div>
              </div>
              <img
                className="relative w-[50px] h-[50px] object-cover rounded-[50%]"
                alt=""
                src={man}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroCourse;
