import React, { useState } from 'react'
import { FaAngleLeft } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import TutorReview from './TutorReview';
import TutorSyllabus from './TutorSyllabus';

const AllTransactions = () => {
  const [activeScreen, setActiveScreen] = useState(1);
  return (
    <div className="flex flex-row h-screen">
      <Sidebar />
      <div className="w-4/5 flex flex-col h-full overflow-auto bg-white font-lexend justify-start">
        <Header />
        <div className="flex items-center gap-8">
          <Link to="/wallet">
            <div className="rounded-[50%] bg-[#4488AC] w-[18px] h-[18px] items-center justify-center ml-[40px] mt-[30px]">
              <FaAngleLeft className="text-[16px] font-normal text-[#fff] " />
            </div>
          </Link>
          <div className="flex flex-row justify-between w-[80%] px-[40px] gap-[45px] text-[22px] text-[#8F8F8F] font-medium h-[92px] pt-[40px] ">
            <button
              onClick={() => setActiveScreen(1)}
              className={
                activeScreen === 1
                  ? "text-[#4488AC] border-[#4488AC] border-b-4 pb-[24px]  px-[12px]"
                  : "px-[12px]"
              }
            >
              All Transactions
            </button>
            <button
              onClick={() => setActiveScreen(2)}
              className={
                activeScreen === 2
                  ? "text-[#4488AC] border-[#4488AC] border-b-4 pb-[24px]  px-[12px]"
                  : "px-[12px]"
              }
            >
              Payment
            </button>
            <button
              onClick={() => setActiveScreen(3)}
              className={
                activeScreen === 3
                  ? "text-[#4488AC] border-[#4488AC] border-b-4 pb-[24px]  px-[12px]"
                  : "px-[12px]"
              }
            >
              Withdrawals
            </button>
          </div>
        </div>
        {activeScreen === 1 ? (
          <div className="border-t-2 mx-[40px] pt-[40px] flex flex-row gap-[80px] "></div>
        ) : activeScreen === 2 ? (
          <TutorReview />
        ) : activeScreen === 3 ? (
          <TutorSyllabus />
        ) : null}
      </div>
    </div>
  );
}

export default AllTransactions