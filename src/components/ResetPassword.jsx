import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Logo } from "../assets/images";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [viewPassword, setViewPassword] = useState(false);
  const [viewConfirmPassword, setViewConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [resetPassword, setResetPassword] = useState(false);
  const validateEmail = (password, confirmPassword) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!\"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])[A-Za-z\d!\"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]{8,}$/;

    if (!passwordRegex.test(password.trim())) {
      setError(
        "Password must contain atleast 8 characters, 1 uppercase, 1 digit, 1 lowercase and 1 special character"
      );
      setTimeout(() => {
        setError("");
      }, 6000);
      return false;
    }
    // check if confirmed password is empty
    if (!confirmPassword) {
      setError("Retype your password in the field above");
      setTimeout(() => {
        setError("");
      }, 5000);
      return false;
    }

    if (confirmPassword !== password) {
      setError("Oops!!! Your passwords do not match");
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

    if (!validateEmail(password, confirmPassword)) {
      return;
    }
    setResetPassword((prev) => !prev);
  };
  return (
    <div className="bg-white font-lexend w-full h-screen flex flex-col gap-28 justify-start items-center">
      <div className="w-[315px] h-[60px] mt-8">
        <img src={Logo} alt="" className="w-full h-full bg-cover" />
      </div>
      {resetPassword ? (
        <div className="w-2/5 pt-6 px-16 pb-12 bg-white shadow-2xl rounded-lg">
          <h4 className="text-[36px] text-center font-bold text-[#39718F]">
            You’ve reset your password
          </h4>
          <h4 className="text-[16px] text-center text-[#645D5D]">
            Well done. Now you can proceed to Login with your new password.
          </h4>
          <button
            onClick={() => navigate("/login")}
            className="w-full h-[52px] mt-8 rounded-xl bg-primary  text-[16px] text-white"
          >
            Proceed
          </button>
        </div>
      ) : (
        <div className="w-2/5 pt-6 px-16 pb-12 bg-white shadow-2xl rounded-lg">
          <h4 className="text-[36px] text-center font-bold text-[#39718F]">
            Create your password
          </h4>

          <form className="w-full px-8 mt-2 pt-8" onSubmit={handleSubmit}>
            <label className="text-[#3B3F42] font-bold text-[16px]">
              New Password
            </label>
            <label className="relative  flex items-center ">
              <input
                type={viewPassword ? "text" : "password"}
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                className="h-[50px]   w-full mt-1 px-[16px] font-medium mb-4 border-2 rounded-lg border-[#ADADAD] outline-none bg-white text-[#3B3F42] placeholder:text-[#ADADAD] transition duration-200"
              />
              {!viewPassword ? (
                <AiOutlineEyeInvisible
                  className="text-3xl -ml-10 mb-2 text-[#ADADAD]"
                  onClick={() => setViewPassword((prev) => !prev)}
                />
              ) : (
                <AiOutlineEye
                  className="text-3xl -ml-10 mb-2 text-[#ADADAD]"
                  onClick={() => setViewPassword((prev) => !prev)}
                />
              )}
            </label>
            <label className="text-[#3B3F42] font-bold text-[16px]">
              Confirm Password
            </label>
            <label className="relative  flex items-center ">
              <input
                type={viewConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                name="confirm-password"
                className="h-[50px]   w-full mt-1 px-[16px] font-medium border-2 rounded-lg border-[#ADADAD] outline-none bg-white text-[#3B3F42] placeholder:text-[#ADADAD] transition duration-200"
              />
              {!viewConfirmPassword ? (
                <AiOutlineEyeInvisible
                  className="text-3xl -ml-10 mt-[5px] text-[#ADADAD]"
                  onClick={() => setViewConfirmPassword((prev) => !prev)}
                />
              ) : (
                <AiOutlineEye
                  className="text-3xl -ml-10 mt-[5px] text-[#ADADAD]"
                  onClick={() => setViewConfirmPassword((prev) => !prev)}
                />
              )}
            </label>
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
              Reset password
            </button>
            <h4 className="font-manrope  text-[#645D5D] font-medium text-[15px] text-center mt-4">
              <span
                onClick={() => {
                  navigate("/forgot-password");
                }}
                className=" text-[#4488AC] font-bold cursor-pointer"
              >
                Go back
              </span>
            </h4>
          </form>
        </div>
      )}
    </div>
  );
};

export default ResetPassword;
