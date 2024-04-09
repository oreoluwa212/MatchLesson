import React from "react";

const ClassesCompleted = () => {
  return (
    <div className="relative bg-white w-full h-[1117px] overflow-hidden text-left text-base text-neutral-50 font-body-small-m">
      <div className="absolute top-[80px] right-[0px] bg-white w-[1428px] h-[1037px] overflow-hidden text-lg text-primary-main">
        <div className="absolute top-[32px] left-[32px] w-[181px] flex flex-col items-start justify-start gap-[8px] text-9xl">
          <div className="flex flex-row items-start justify-start">
            <div className="relative leading-[36px] font-medium">
              Hello Tayo!
            </div>
          </div>
          <div className="self-stretch overflow-hidden flex flex-row items-start justify-start text-base text-neutral-main">
            <div className="flex-1 relative leading-[22px]">{`Welcome to ..................... `}</div>
          </div>
        </div>
        <div className="absolute top-[98px] left-[0px] w-[1428px] flex flex-row items-start justify-start pt-10 px-10 pb-0 box-border gap-[52px] text-3xl text-neutral-variant-20">
          <div className="flex flex-row items-start justify-start pt-0 px-3 pb-6 text-primary-main border-b-[5px] border-solid border-primary-main">
            <div className="relative leading-[28px] font-medium">English</div>
          </div>
          <div className="flex flex-row items-start justify-start pt-0 px-3 pb-6">
            <div className="relative leading-[28px] font-medium">
              Mathematics
            </div>
          </div>
          <div className="flex flex-row items-start justify-start pt-0 px-3 pb-6">
            <div className="relative leading-[28px] font-medium">Economics</div>
          </div>
          <div className="flex flex-row items-start justify-start pt-0 px-3 pb-6">
            <div className="relative leading-[28px] font-medium">
              Accounting
            </div>
          </div>
        </div>
        <div className="absolute top-[322px] left-[0px] w-[1429px] flex flex-row items-start justify-start py-4 pr-[949px] pl-10 box-border gap-[32px]">
          <div className="rounded-lg flex flex-row items-center justify-center py-3 px-[18px]">
            <b className="relative leading-[24px]">Upcoming</b>
          </div>
          <div className="rounded-lg flex flex-row items-center justify-center py-3 px-[18px] text-indianred">
            <b className="relative leading-[24px]">Due</b>
          </div>
          <div className="rounded-lg bg-honeydew flex flex-row items-center justify-center py-3 px-[18px] text-forestgreen border-[1px] border-solid border-forestgreen">
            <b className="relative leading-[24px]">Completed</b>
          </div>
        </div>
        <div className="absolute top-[214px] left-[0px] flex flex-row items-start justify-start py-4 pr-8 pl-10 gap-[32px] text-base text-neutral-20">
          <div className="rounded-xl bg-white shadow-[0px_6px_30px_5px_rgba(0,_0,_0,_0.07)] flex flex-row items-center justify-center py-[17px] px-[18px] gap-[13px]">
            <div className="relative leading-[22px] font-medium">Timeline:</div>
            <div className="relative leading-[22px] font-medium text-primary-80">
              8 months
            </div>
          </div>
          <div className="rounded-xl bg-white shadow-[0px_6px_30px_5px_rgba(0,_0,_0,_0.07)] w-[839px] flex flex-col items-start justify-start py-[17px] px-4 box-border text-black">
            <div className="flex flex-row items-center justify-center gap-[321px]">
              <div className="w-[408px] flex flex-row items-start justify-start p-2.5 box-border relative gap-[10px]">
                <img
                  className="absolute my-0 mx-[!important] top-[-7px] left-[313px] w-[375px] h-3.5 z-[0]"
                  alt=""
                  src="/line-7.svg"
                />
                <img
                  className="absolute my-0 mx-[!important] top-[-8px] left-[-4px] w-[544px] h-4 z-[1]"
                  alt=""
                  src="/line-6.svg"
                />
              </div>
              <div className="relative leading-[22px] font-medium">
                70% done
              </div>
            </div>
          </div>
          <div className="rounded-lg box-border w-[266px] flex flex-row items-center justify-center py-[18px] px-8 gap-[12px] text-primary-main border-[3px] border-solid border-primary-main">
            <b className="relative leading-[24px]">View Syllabus</b>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
              alt=""
              src="/heroiconsoutlineeye.svg"
            />
          </div>
        </div>
        <div className="absolute top-[418px] left-[calc(50%_-_679px)] flex flex-col items-start justify-start gap-[24px] text-forestgreen">
          <div className="rounded-xl bg-white shadow-[0px_16px_24px_2px_rgba(0,_0,_0,_0.14)] flex flex-row items-center justify-start py-[30px] pr-[30px] pl-[31px] gap-[32px]">
            <div className="flex flex-col items-end justify-start gap-[8px]">
              <div className="w-[1241px] flex flex-row items-center justify-center gap-[207px]">
                <div className="w-[610px] flex flex-row items-end justify-start gap-[13px]">
                  <div className="relative w-7 h-7">
                    <div className="absolute top-[0px] left-[-0.5px] rounded-[50%] bg-honeydew box-border w-7 h-7 border-[1px] border-solid border-forestgreen" />
                    <b className="absolute top-[2px] left-[7.5px] leading-[24px]">
                      C
                    </b>
                  </div>
                  <b className="relative text-5xl leading-[32px] inline-block text-primary-80 w-[569px] shrink-0">
                    Introduction to English Language
                  </b>
                </div>
                <div className="flex flex-row items-start justify-start gap-[48px] text-base">
                  <div className="flex flex-row items-start justify-start gap-[8px]">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/heroiconssolidcalendardays.svg"
                    />
                    <div className="relative tracking-[0.01em] leading-[24px] inline-block w-[163px] shrink-0">
                      Today
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[8px] text-neutral-20">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/heroiconssolidclock.svg"
                    />
                    <div className="relative tracking-[0.01em] leading-[24px] inline-block w-[152px] h-6 shrink-0">
                      10:15am - 12:15am
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[1200px] flex flex-col items-start justify-start gap-[4px] text-neutral-main">
                <div className="relative leading-[24px] font-medium inline-block w-[569px]">
                  Alphabets, Spellings and Words in a sentence
                </div>
                <div className="hidden flex-row items-center justify-center py-0 px-2.5 gap-[288px] text-sm border-l-[4px] border-solid border-secondary-20">
                  <div className="relative leading-[20px] inline-block w-[676px] h-[63px] shrink-0">
                    Lorem ipsum dolor sit amet consectetur. Feugiat dignissim
                    vestibulum vitae eu lacus vel pulvinar. Diam turpis eleifend
                    bibendum curabitur. Risus purus nisl amet a enim. Gravida
                    vel non congue cursus cursus.
                  </div>
                  <div className="flex flex-row items-center justify-center gap-[16px] text-base text-neutral-20">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative tracking-[0.01em] leading-[24px]">
                        Temitope Akinyemi
                      </div>
                      <div className="relative text-xs leading-[16px] font-medium text-neutral-90">
                        Tutor
                      </div>
                    </div>
                    <img
                      className="relative w-[50px] h-[50px] object-cover"
                      alt=""
                      src="/mask-group@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <img
              className="relative w-6 h-6"
              alt=""
              src="/arrowcircledown.svg"
            />
          </div>
          <div className="rounded-xl bg-white shadow-[0px_16px_24px_2px_rgba(0,_0,_0,_0.14)] h-[207px] flex flex-row items-center justify-start py-[30px] pr-[30px] pl-[31px] box-border gap-[32px]">
            <div className="flex flex-col items-end justify-start gap-[8px]">
              <div className="w-[1241px] flex flex-row items-center justify-center gap-[207px]">
                <div className="w-[610px] flex flex-row items-end justify-start gap-[13px]">
                  <div className="relative w-7 h-7">
                    <div className="absolute top-[0px] left-[-0.5px] rounded-[50%] bg-honeydew box-border w-7 h-7 border-[1px] border-solid border-forestgreen" />
                    <b className="absolute top-[2px] left-[7.5px] leading-[24px]">
                      C
                    </b>
                  </div>
                  <b className="relative text-5xl leading-[32px] inline-block text-primary-80 w-[569px] shrink-0">
                    Introduction to English Language
                  </b>
                </div>
                <div className="flex flex-row items-start justify-start gap-[48px] text-base">
                  <div className="flex flex-row items-start justify-start gap-[8px]">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/heroiconssolidcalendardays1.svg"
                    />
                    <div className="relative tracking-[0.01em] leading-[24px] inline-block w-[163px] shrink-0">
                      <p className="m-0">Completed on Nov.</p>
                      <p className="m-0">23rd, 2023.</p>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[8px] text-neutral-20">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/heroiconssolidclock1.svg"
                    />
                    <div className="relative tracking-[0.01em] leading-[24px] inline-block w-[152px] h-6 shrink-0">
                      10:15am - 12:15am
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[1200px] flex flex-col items-start justify-start gap-[4px] text-neutral-main">
                <div className="relative leading-[24px] font-medium inline-block w-[569px]">
                  Alphabets, Spellings and Words in a sentence
                </div>
                <div className="flex flex-row items-center justify-center py-0 px-2.5 gap-[288px] text-sm border-l-[4px] border-solid border-secondary-20">
                  <div className="relative leading-[20px] inline-block w-[676px] h-[63px] shrink-0">
                    Lorem ipsum dolor sit amet consectetur. Feugiat dignissim
                    vestibulum vitae eu lacus vel pulvinar. Diam turpis eleifend
                    bibendum curabitur. Risus purus nisl amet a enim. Gravida
                    vel non congue cursus cursus.
                  </div>
                  <div className="flex flex-row items-center justify-center gap-[16px] text-base text-neutral-20">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative tracking-[0.01em] leading-[24px]">
                        Temitope Akinyemi
                      </div>
                      <div className="relative text-xs leading-[16px] font-medium text-neutral-90">
                        Tutor
                      </div>
                    </div>
                    <img
                      className="relative w-[50px] h-[50px] object-cover"
                      alt=""
                      src="/mask-group1@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <img className="relative w-6 h-6" alt="" src="/arrowcircleup.svg" />
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] bg-white box-border w-[300px] h-[1117px] overflow-hidden text-3xl text-warning border-r-[1px] border-solid border-secondary-main">
        <div className="absolute top-[993px] left-[0px] w-[300px] flex flex-row items-start justify-between py-4 pr-12 pl-6 box-border">
          <div className="relative leading-[28px] font-medium">Log Out</div>
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/heroiconssolidarrowrightonrectangle.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ClassesCompleted;
