import React from 'react'
import { FaUser } from 'react-icons/fa';

const MyProfileCard = () => {
  return (
    <div className="h-[608px] w-[980px] rounded-[12px] shadow-2xl bg-white my-[60px] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-[10px]">
        <div className="h-[120px] w-[120px] rounded-[50%] bg-[#DAE7EE] flex justify-center items-center">
          <FaUser className="text-[50px] text-[#4F5457]" />
        </div>
        <div className="">
          <button className="font-semibold text-[#4488AC] text-[16px]">
            Update your profile picture
          </button>
        </div>
      </div>

      <form className="w-[90%] px-8 mt-2 pt-4">
        <div className="flex justify-between items-center gap-10 pt-12">
          <div className="flex flex-col w-1/2">
            <label className="text-[#3B3F42] font-bold text-[16px]  ">
              First Name
            </label>
            <input
              type="text"
              placeholder="Tayo"
              name="firstName"
              className="h-[50px]   w-full mt-1 px-[16px] font-medium border-2 mb-4 rounded-lg border-[#ADADAD] outline-none bg-white text-[#3B3F42] placeholder:font-bold placeholder:text-[#3B3F42] transition duration-200"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="text-[#3B3F42] font-bold text-[16px]  ">
              Last name
            </label>
            <input
              type="text"
              placeholder="Abidemi"
              name="lastName"
              className="h-[50px]   w-full mt-1 px-[16px] font-medium border-2 mb-4 rounded-lg border-[#ADADAD] outline-none bg-white text-[#3B3F42] placeholder:font-bold placeholder:text-[#3B3F42] transition duration-200"
            />
          </div>
        </div>
        <div className="flex justify-between items-center gap-10 pt-6">
          <div className="flex flex-col w-1/2">
            <label className="text-[#3B3F42] font-bold text-[16px]  ">
              Email Address
            </label>
            <input
              type="text"
              placeholder="e.g tayoabidemi@gmail.com"
              name="email"
              className="h-[50px]   w-full mt-1 px-[16px] font-medium border-2 mb-4 rounded-lg border-[#ADADAD] outline-none bg-white text-[#3B3F42] placeholder:font-extralight placeholder:text-[#ADADAD] transition duration-200"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="text-[#3B3F42] font-bold text-[16px]  ">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter phone number"
              name="phoneNumber"
              className="h-[50px]   w-full mt-1 px-[16px] font-medium border-2 mb-4 rounded-lg border-[#ADADAD] outline-none bg-white text-[#3B3F42] placeholder:font-extralight placeholder:text-[#ADADAD] transition duration-200"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full h-[52px] mt-8 rounded-xl bg-primary  text-[16px] text-white"
        >
          Save information
        </button>
      </form>
    </div>
  );
}

export default MyProfileCard