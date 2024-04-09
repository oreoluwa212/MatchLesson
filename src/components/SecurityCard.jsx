import React from 'react'

const SecurityCard = () => {
  return (
    <div className="p-[40px] h-[650px] w-[980px] rounded-[12px] shadow-2xl bg-white my-[60px] flex flex-col gap-[40px] ">
      <div className="flex flex-col gap-[16px]">
        <h2 className="text-[20px] font-bold text-[#3B3F42]">
          Verified Information
        </h2>
        <div className="flex justify-between text-[16px] font-medium text-[#3B3F42] ">
          <p className="text-[#8F8F8F]">Email address</p>
          <p className="text-[#8F8F8F]">tayoabidemi@gmail.com</p>
        </div>
      </div>

      <div className="flex flex-col gap-[16px]">
        <h2 className="text-[20px] font-bold text-[#3B3F42]">Notifications</h2>
        <div className="flex justify-between text-[16px] font-medium text-[#3B3F42] ">
          <p className="text-[#8F8F8F]">Allow notifications</p>
          <div className="bg-[#4488AC] w-[58px] h-[32px] rounded-[19px] flex items-center p-1 justify-end">
            <div className="bg-[#FFFFFF] w-[25px] h-[25px] rounded-[50%]"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[16px]">
        <h2 className="text-[20px] font-bold text-[#3B3F42]">
          Account Protection
        </h2>
        <div className="flex justify-between text-[16px] font-medium text-[#3B3F42] ">
          <div className="flex flex-col gap-[3px]">
            <h4 className="text-[16px] font-medium text-[#3B3F42] ">
              Two Factor Authntication
            </h4>
            <p className="w-[350px] text-[#8F8F8F]">
              Protect your account from unauthorized transactions
            </p>
          </div>
          <div className="bg-[#D6D6D6] w-[58px] h-[32px] rounded-[19px] flex items-center p-1 justify-start">
            <div className="bg-[#FFFFFF] w-[25px] h-[25px] rounded-[50%]"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[16px]">
        <h2 className="text-[20px] font-bold text-[#3B3F42]">Password</h2>
        <div className="flex justify-between text-[16px] font-medium text-[#3B3F42] ">
          <p className="text-[#8F8F8F]">Update your password</p>
          <button className="text-[#4488AC]">Update</button>
        </div>
      </div>

      <div className="flex flex-col gap-[16px]">
        <h2 className="text-[20px] font-bold text-[#3B3F42]">
          Transaction PIN
        </h2>
        <div className="flex justify-between text-[16px] font-medium text-[#3B3F42] ">
          <p className="text-[#8F8F8F]">Set your transaction pin</p>
          <button className="text-[#4488AC]">Set</button>
        </div>
      </div>
    </div>
  );
}

export default SecurityCard