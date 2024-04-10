import React from "react";
import { Logo, studentImg } from "../../assets/images";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-landingBg w-full lgss:h-screen">
      <div className="bg-landingBg lgss:h-[15%] py-8 w-full shadow-lg shadow-grey-30 flex justify-between items-center px-[5%]">
        <div className="w-1/3">
          <Link to={"/"}>
            <img src={Logo} alt="" className="" />
          </Link>
        </div>
        <div className="hidden lgss:flex w-1/3">
          <nav>
            <ul className="flex gap-10 text-primary font-bold">
              <li>About us</li>
              <li>FAQs</li>
              <li>Find a tutor</li>
            </ul>
          </nav>
        </div>
        <div className="flex gap-8 justify-center items-center">
          <Link to={"/login"}>
            <button className="text-primary font-bold">Login</button>
          </Link>
          <Link to={"/onboarding"}>
            <button className="text-white font-semibold rounded-[8px] bg-primary py-3 px-6">
              Create Account
            </button>
          </Link>
        </div>
      </div>
      <div className="flex w-full px-[5%] justify-between items-center pt-14">
        <div className="flex flex-col gap-5 w-[55%]">
          <h1 className="font-bold text-primary lgss:text-[3rem]">
            Learn and <span className="text-orange">ace</span> your
            <span className="text-orange"> exams</span> with help from seasoned
            <span className="text-orange"> tutors.</span>
          </h1>
          <p className="text-primary font-semibold text-[.5rem] lgss:text-[1rem]">
            Explore and meet professional tutors, book your 1:1 session and get
            tutored right away. Ace your exams in one sitting.
          </p>
          <Link to={"/onboarding"}>
            <button className="text-white font-semibold rounded-[8px] bg-primary py-3 px-6">
              Get started
            </button>
          </Link>
        </div>
        <div className="lgss:w-[30%]  px-5">
          <img
            className="w-full h-[400px]"
            src={studentImg}
            alt="student image"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
