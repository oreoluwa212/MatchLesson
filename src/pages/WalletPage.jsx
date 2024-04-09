import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import FundWithdrawalCard from "../components/FundWithdrawalCard";
import { Link } from "react-router-dom";

const WalletPage = () => {
  return (
    <div className="h-screen flex flex-row overflow-x-hidden">
      <Sidebar />
      <div className="w-4/5 h-full  overflow-auto flex flex-col bg-white  font-lexend justify-start">
        <div className="w-full">
          <Header />
        </div>
        <div className="">
          <div className="px-10 mt-8">
            <h1 className="text-[28px] font-medium text-[#4488AC]">
              Hello Tayo!
            </h1>
          </div>
          <FundWithdrawalCard />
          <div className="mx-10 my-6">
            <div className="">
              <h3 className="text-[#3B3F42] text-[22px] font-medium py-2">
                Transactions History
              </h3>
            </div>
            <div className="h-[500px] w-[95%] border-2 my-6"></div>
            <div className="border-b-2 border-[#4488AC] w-[182px] mx-1 mt-4">
              <Link to={"/wallet/transactions"}>
                <button className="text-center py-2 text-[#4488AC] font-semibold">
                  See all transactions
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
