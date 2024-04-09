import React, { useState } from "react";
import { Logo } from "../assets/images";
import { useNavigate } from "react-router";
import { BiErrorCircle } from "react-icons/bi";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    // check if email is empty
    if (!email) {
      setError("Kindly tell us your mail");
      setTimeout(() => {
        setError("");
      }, 5000);
      return false;
    }
    // check if email is in the correct format using a regular expression
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailRegex.test(email)) {
      setError("Your email is not in the correct format");
      setTimeout(() => {
        setError("");
      }, 6000);
      return false;
    }

    setError("");
    return true;
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      return;
    }
    navigate("/reset-password");
  };
  return (
    <div className="bg-white font-lexend w-full h-screen flex flex-col gap-28 justify-start items-center">
      <div className="w-[315px] h-[60px] mt-8">
        <img src={Logo} alt="" className="w-full h-full bg-cover" />
      </div>
      <div className="w-2/5 pt-6 px-16 pb-12 bg-white shadow-2xl rounded-lg">
        <h4 className="text-[36px] text-center font-bold text-[#39718F]">
          Reset Your Password
        </h4>
        <h4 className="text-[16px] text-center text-[#645D5D]">
          Enter your email address and we will send you a link to reset your
          password.
        </h4>
        <form className="w-full px-8 mt-2 pt-8" onSubmit={handleSubmit}>
          <label className="text-[#3B3F42] font-bold text-[16px] ">Email</label>
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value.toLowerCase())}
            name="email"
            className="h-[50px]   w-full mt-1 px-[16px] font-medium border-2 mb-6 rounded-lg border-[#ADADAD] outline-none bg-white text-[#3B3F42] placeholder:text-[#ADADAD] transition duration-200"
          />
          {error && (
            <div className="bg-red-600 w-full  text-white text-[14px] rounded-xl justify-start items-center gap-2 flex h-[48px] px-2 font-bold mt-4">
              <BiErrorCircle className="text-xl" />
              {error}
            </div>
          )}
          <button
            type="submit"
            className="w-full h-[52px] mt-8 rounded-xl bg-primary  text-[16px] text-white"
          >
            Submit mail
          </button>
          <h4 className="font-manrope  text-[#645D5D] font-medium text-[15px] text-center mt-4">
            <span
              onClick={() => {
                navigate("/login");
              }}
              className=" text-[#4488AC] font-bold cursor-pointer"
            >
              Go back
            </span>
          </h4>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
