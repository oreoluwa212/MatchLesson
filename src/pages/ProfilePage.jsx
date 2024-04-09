import React, { useState } from 'react'
import MyProfileCard from '../components/MyProfileCard';
import SecurityCard from '../components/SecurityCard';
import SupportCard from '../components/SupportCard';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const ProfilePage = () => {
  const [activeScreen, setActiveScreen] = useState(1);
  return (
    <div className="flex flex-row h-screen">
      <Sidebar />
      <div className="w-4/5 flex flex-col h-full overflow-auto bg-white font-lexend justify-start">
        <Header />
        <div className="border-b-2">
          <div className="flex flex-row px-[40px] justify-between w-[90%] text-[22px] text-[#8F8F8F] font-medium h-[92px] pt-[40px] ">
            <button
              onClick={() => setActiveScreen(1)}
              className={
                activeScreen === 1
                  ? "text-[#4488AC] border-[#4488AC] border-b-4 pb-[24px]  px-[12px]"
                  : "px-[12px]"
              }
            >
              My Profile
            </button>
            <button
              onClick={() => setActiveScreen(2)}
              className={
                activeScreen === 2
                  ? "text-[#4488AC] border-[#4488AC] border-b-4 pb-[24px]  px-[12px]"
                  : "px-[12px]"
              }
            >
              Security
            </button>
            <button
              onClick={() => setActiveScreen(3)}
              className={
                activeScreen === 3
                  ? "text-[#4488AC] border-[#4488AC] border-b-4 pb-[24px]  px-[12px]"
                  : "px-[12px]"
              }
            >
              Support
            </button>
          </div>
        </div>
        <div className="mx-[40px] py-[20px]">
          {activeScreen === 1 ? (
            <MyProfileCard />
          ) : activeScreen === 2 ? (
            <SecurityCard />
          ) : activeScreen === 3 ? (
            <SupportCard />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage