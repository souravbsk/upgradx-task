import Image from "next/image";
import React from "react";
import GoogleImg from "@/assets/googlePlay.svg"
import HeroImgNew from "@/assets/HeroImgNew.webp"

const HeaderBanner = () => {
  return (
    <section data-aos="fade-up" className="container md:py-8 md:my-12">
      <div className="bg-blue-50 gap-8 flex items-center justify-between  rounded">
        <div className="p-8 md:p-10 flex flex-col md:items-start items-center justify-center space-y-4">
          <h1 className="text-4xl md:text-start leading-normal  text-center  font-bold">
            Become a Financial Advisor and{" "}
            <span className="text-blue-700">Earn Rs.1 Lakh/Month</span>
          </h1>
          <p className="text-lg text-gray-700">No investment required</p>
            <div className="px-4 py-2">
            <Image className="max-w-full w-32 h-12" alt="GoogleImg" src={GoogleImg} />
            </div>
        </div>
        <div className="mr-9 hidden md:block ">
            <Image className="max-w-full h-80 -mt-20 w-[36vw]" alt="HeroImgNew" src={HeroImgNew}></Image>
        </div>
      </div>
    </section>
  );
};

export default HeaderBanner;
