import React from "react";

const ClassesHeader = () => {
    return (
      <>
        {/* Introductory Message */}
        <div className="w-full h-full flex flex-col justify-start items-start gap-8 inline-flex">
          <div className="justify-start items-start gap-10 inline-flex">
            <div className="text-blue-500 text-lg font-lexend font-medium leading-9 break-words">
              <h1>Hello Tayo!</h1>
            </div>
          </div>
          <div className="self-stretch justify-start items-start gap-10 inline-flex">
            <div className="flex-1 text-gray-700 text-base font-lexend font-normal leading-6 tracking-wider break-words">
              Welcome to .....................{" "}
            </div>
          </div>
        </div>

        {/* Subjects Bar */}
        <div className="w-full h-full pt-40 pl-40 pr-40 justify-start items-start gap-52 inline-flex">
          <div className="pb-24 pl-12 pr-12 border-b-5 border-blue-500 justify-start items-start gap-10">
            <div className="text-blue-500 text-base font-lexend font-medium leading-7 break-words">
              English
            </div>
          </div>
          <div className="pb-24 pl-12 pr-12 justify-start items-start gap-10 flex">
            <div className="text-gray-500 text-base font-lexend font-medium leading-7 break-words">
              Mathematics
            </div>
          </div>
          <div className="pb-24 pl-12 pr-12 justify-start items-start gap-10 flex">
            <div className="text-gray-500 text-base font-lexend font-medium leading-7 break-words">
              Economics
            </div>
          </div>
          <div className="pb-24 pl-12 pr-12 justify-start items-start gap-10 flex">
            <div className="text-gray-500 text-base font-lexend font-medium leading-7 break-words">
              Accounting
            </div>
          </div>
        </div>

        {/* Time and Syllabus Bar */}
        <div className="w-full h-full pt-16 pb-16 pl-40 pr-32 justify-start items-start gap-32 inline-flex">
          <div className="pl-18 pr-18 pt-17 pb-17 bg-white shadow-md rounded-12 justify-center items-center gap-13 flex">
            <div className="text-gray-700 text-base font-lexend font-medium leading-6 tracking-wide break-words">
              Timeline:
            </div>
            <div className="text-blue-900 text-base font-lexend font-medium leading-6 tracking-wide break-words">
              8 months
            </div>
          </div>
          <div className="w-839 pl-16 pr-16 pt-17 pb-17 bg-white shadow-md rounded-12 flex flex-col justify-start items-start gap-44 inline-flex">
            <div className="justify-center items-center gap-321 inline-flex">
              <div className="w-528 h-0 border-16 border-blue-500 border-solid"></div>
              <div className="w-361 h-0 border-14 border-blue-200 border-solid"></div>
              <div className="text-black text-base font-lexend font-medium leading-6 tracking-wide break-words">
                70% done
              </div>
            </div>
          </div>
          <div className="h-60 pl-32 pr-32 pt-18 pb-18 rounded-8 border-3 border-blue-500 border-solid justify-center items-center gap-12 flex">
            <div className="text-blue-500 text-base font-lexend font-semibold leading-6 tracking-wide break-words">
              View Syllabus
            </div>
          </div>
        </div>
      </>
    );
};


export default ClassesHeader;