import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { FaAngleLeft, FaMinus, FaPlus } from "react-icons/fa";
import { credit } from "../assets/images";
import FundWithdrawalCard from "../components/FundWithdrawalCard";

const TutorBookings = () => {
  return (
    <div className="flex flex-col w-4/5 overflow-x-hidden">
      <Header />
      <Link to="/tutors">
        <div className="flex flex-row gap-4  pt-5 items-center font-lexend">
          <div className="">
            <FaAngleLeft className="text-[30px] text-[#3B3F42] ml-[40px]" />
          </div>
          <div className="">
            <p className="text-[24px] font-semibold">Book Session</p>
          </div>
        </div>
      </Link>
      <FundWithdrawalCard />
      <div className="">
        <h2></h2>
      </div>
    </div>
  );
};

const TutorsBookingsPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <TutorBookings />
    </div>
  );
};

export default TutorsBookingsPage;
