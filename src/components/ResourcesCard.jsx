import React from 'react'
import { jamb1, jamb2 } from '../assets/images';
import { FaDownload } from 'react-icons/fa';

const ResourcesCard = () => {
  return (
    <div className="w-[236px] h-[306px] rounded-[10px] px-[13px] py-[16px] bg-white shadow-2xl">
      <div className="">
        <img src={jamb2} alt="" />
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <h3 className="text-[#3B3F42] font-bold text-[16px]">Literature Past Questions</h3>
        <div className="text-[#4488AC] flex gap-6 items-center">
          <button>Download</button>
          <FaDownload />
        </div>
      </div>
    </div>
  );
}

export default ResourcesCard