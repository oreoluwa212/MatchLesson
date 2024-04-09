import React from "react";
import { Logo } from "../../assets/images";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex justify-between items-center mt-16 px-16">
      <div>
        <Link to={"/"}>
          <img src={Logo} alt="" className="w-full h-full bg-cover" />
        </Link>
      </div>
      <div className="text-3xl cursor-pointer font-lexend text-red-700 font-bold">
        <Link to={"/dashboard"}>
          <p>Dashboard</p>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
