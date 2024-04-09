import React from 'react'
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { fb, ig, whatsapp } from '../assets/images';

const SupportCard = () => {
  return (
    <div className="p-[40px] h-[550px] w-[980px] rounded-[12px] shadow-2xl bg-white my-[60px] flex flex-col gap-[50px] ">
      <div className="flex flex-col gap-[16px]">
        <h2 className="text-[20px] font-bold text-[#3B3F42]">Contact Us</h2>
        <div className="flex justify-between text-[16px] font-medium text-[#3B3F42] ">
          <p className="text-[#8F8F8F]">Email address</p>
          <p className="text-[#8F8F8F]">tayoabidemi@gmail.com</p>
        </div>
        <div className="flex justify-between text-[16px] font-medium text-[#3B3F42] ">
          <p className="text-[#8F8F8F]">Phone Number</p>
          <p className="text-[#8F8F8F]">(+234)-9034215621</p>
        </div>
      </div>

      <div className="flex flex-col gap-[16px]">
        <h2 className="text-[20px] font-bold text-[#3B3F42]">Social Media</h2>
        <div className="flex justify-between text-[16px] font-medium text-[#3B3F42] ">
          <p className="text-[#8F8F8F]">Twitter</p>
          <FaTwitter className="text-[#1D9BF0] text-[24px]" />
        </div>
        <div className="flex justify-between text-[16px] font-medium text-[#3B3F42] ">
          <p className="text-[#8F8F8F]">Instagram</p>
          <div className="">
            <img src={ig} alt="" />
          </div>
        </div>
        <div className="flex justify-between text-[16px] font-medium text-[#3B3F42] ">
          <p className="text-[#8F8F8F]">Facebook</p>
          <div className="">
            <img src={fb} alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[16px]">
        <h2 className="text-[20px] font-bold text-[#3B3F42]">Talk To Support</h2>
        <div className="flex justify-between text-[16px] font-medium text-[#3B3F42] ">
          <p className="text-[#8F8F8F]">Talk to us on whatsapp</p>
          <div className="">
            <img src={whatsapp} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportCard