import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Logo } from "../assets/images";
import { FaHome } from "react-icons/fa";
import { RiBookOpenFill } from "react-icons/ri";
import {
  BsPeopleFill,
  BsFillCameraVideoFill,
  BsFillCreditCardFill,
} from "react-icons/bs";
import { BiSolidUserCircle } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activebutton, setActiveButton] = useState(1);
  useEffect(() => {
    if (location.pathname === "/dashboard") setActiveButton(1);
    else if (location.pathname === "/subjects") setActiveButton(2);
    else if (
      location.pathname === "/tutors" ||
      location.pathname === "/tutors/tutor/overview" ||
      location.pathname === "/tutors/tutor/book-a-session"
    ) setActiveButton(3);
    else if (location.pathname === "/classes") setActiveButton(4);
    else if (location.pathname === "/wallet") setActiveButton(5);
    else if (location.pathname === "/resources") setActiveButton(6);
    else if (location.pathname === "/profile") setActiveButton(7);
  }, [location.pathname]);
  return (
    <div className=" w-1/5 h-screen flex flex-col border-r pb-5 font-lexend border-[#FF8C42] justify-start px-4 items-start pt-8 bg-white">
      <div className="w-[210px] h-[40px]">
        <img src={Logo} alt="" className="w-full h-full bg-cover" />
      </div>
      <div className="mt-10 w-full flex flex-col gap-2 justify-start items-center">
        <Link
          to="/dashboard"
          className={
            activebutton === 1
              ? "flex justify-between text-[20px] text-white items-center font-medium  rounded-full px-4 bg-[#4488AC] w-full h-[60px]"
              : "flex justify-between text-[20px] text-[#6B7276] items-center font-medium  px-4  w-full h-[60px]"
          }
        >
          <h4 className="">Home</h4>
          <FaHome />
        </Link>
        <Link
          to="/subjects"
          className={
            activebutton === 2
              ? "flex justify-between text-[20px] text-white items-center font-medium  rounded-full px-4 bg-[#4488AC] w-full h-[60px]"
              : "flex justify-between text-[20px] text-[#6B7276] items-center font-medium  px-4  w-full h-[60px]"
          }
        >
          <h4 className="">Subjects</h4>
          <RiBookOpenFill />
        </Link>
        <Link
          to="/tutors"
          className={
            activebutton === 3
              ? "flex justify-between text-[20px] text-white items-center font-medium  rounded-full px-4 bg-[#4488AC] w-full h-[60px]"
              : "flex justify-between text-[20px] text-[#6B7276] items-center font-medium  px-4  w-full h-[60px]"
          }
        >
          <h4 className="">Tutors</h4>
          <BsPeopleFill />
        </Link>
        <Link
          to="/classes"
          className={
            activebutton === 4
              ? "flex justify-between text-[20px] text-white items-center font-medium  rounded-full px-4 bg-[#4488AC] w-full h-[60px]"
              : "flex justify-between text-[20px] text-[#6B7276] items-center font-medium  px-4  w-full h-[60px]"
          }
        >
          <h4 className="">Classes</h4>
          <BsFillCameraVideoFill />
        </Link>
        <Link
          to="/wallet"
          className={
            activebutton === 5
              ? "flex justify-between text-[20px] text-white items-center font-medium  rounded-full px-4 bg-[#4488AC] w-full h-[60px]"
              : "flex justify-between text-[20px] text-[#6B7276] items-center font-medium  px-4  w-full h-[60px]"
          }
        >
          <h4 className="">Wallet</h4>
          <BsFillCreditCardFill />
        </Link>
        <Link
          to="/resources"
          className={
            activebutton === 6
              ? "flex justify-between text-[20px] text-white items-center font-medium  rounded-full px-4 bg-[#4488AC] w-full h-[60px]"
              : "flex justify-between text-[20px] text-[#6B7276] items-center font-medium  px-4  w-full h-[60px]"
          }
        >
          <h4 className="">Resources</h4>
          <RiBookOpenFill />
        </Link>
        <Link
          to="/profile"
          className={
            activebutton === 7
              ? "flex justify-between text-[20px] text-white items-center font-medium  rounded-full px-4 bg-[#4488AC] w-full h-[60px]"
              : "flex justify-between text-[20px] text-[#6B7276] items-center font-medium  px-4  w-full h-[60px]"
          }
        >
          <h4 className="">Profile</h4>
          <BiSolidUserCircle />
        </Link>

        <button
          onClick={() => navigate("/login")}
          className="flex justify-between text-[20px] mt-4 text-[#B82323] items-center  font-medium  px-4  w-full "
        >
          Logout
          <HiOutlineLogout />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
