import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa';
import { credit } from '../assets/images';

const FundWithdrawalCard = () => {
  return (
    <div className=" bg-transparent h-[148px] rounded-[20px] flex items-center border border-[#FF8C42] mt-[50px] mx-[40px] justify-between px-[40px] w-[90%]">
      <div className="flex gap-4 items-center">
        <div className="h-40px w-[50px]">
          <img className="w-full h-full" src={credit} alt="" />
        </div>
        <div className=" text-[#3B3F42]">
          <p className="text-[16px] font-medium">Available Balance</p>
          <h1 className="text-[44px]">
            <span className="text-[28px]">#</span>8,000
            <span className="text-[28px]">.00</span>
          </h1>
          <p className="text-[16px] font-medium">
            Pending Balance{" "}
            <span className="font-medium text-[22px]">#16,000.00</span>
          </p>
        </div>
      </div>
      <div className="flex gap-6">
        <button className="h-[60px] w-[260px] bg-[#4488AC] inline-flex gap-[30px] justify-center items-center rounded-[8px] text-white font-semibold">
          Fund wallet <FaPlus />
        </button>
        <button className="h-[60px] w-[260px] bg-transparent border-[#4488AC] border inline-flex gap-[30px] justify-center items-center rounded-[8px] text-[#4488AC] font-semibold">
          Withdraw Funds <FaMinus />
        </button>
      </div>
    </div>
  );
}

export default FundWithdrawalCard