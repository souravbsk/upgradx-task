"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./StartEarning.css";
import appVide from "@/assets/StartEarning/Step3.mp4";
import bg from "@/assets/StartEarning/start-img.svg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import GoogleImg from "@/assets/googlePlay.svg";

// import required modules
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
const StartEarning = () => {
  return (
    <section className="bg-start-earning">
      <div className="container">
        <div className="text-center text-white">
          <h2 className="text-lg md:text-2xl font-bold">Start Earning in 3 Easy Steps</h2>
          <p className="text-md text-gray-200">
            We have create the app the make your earning easy
          </p>
        </div>
        <div className="relative mt-8 md:mt-14">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-5">
                <div className="space-y-6 p-3 flex flex-col justify-center md:items-start items-center md:p-24 flex-1">
                  <h2 className="step-heading">Step 1</h2>
                  <p className="text-2xl md:text-4xl text-center md:text-start font-bold text-[#8cbae8]">
                    Download the App and Sign up as a ZET agent
                  </p>
                  <div className="bg-white h-3 w-1/2 mb-6 rounded-xl">
                    <div className="animate-dZkvup"></div>
                  </div>
                  <Image
                    className="max-w-full w-32 h-12"
                    alt="GoogleImg"
                    src={GoogleImg}
                  />
                </div>
                <div className="flex-1">
                  <video className=" mx-auto  rounded-3xl h-64 w-full md:h-[425px]" src={appVide} type="video/mp4" autoPlay loop >
                  
                  </video>
                </div>
              </div>
            </SwiperSlide>
            
            <SwiperSlide>
              <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-5">
                <div className="space-y-6 p-3 flex flex-col justify-center md:items-start items-center md:p-24 flex-1">
                  <h2 className="step-heading">Step 2</h2>
                  <p className="text-2xl md:text-4xl text-center md:text-start font-bold text-[#8cbae8]">
                  Register your customers and Recommend financial products
                  </p>
                  <div className="bg-white h-3 w-1/2 mb-6 rounded-xl">
                    <div className="animate-dZkvup"></div>
                  </div>
                  <Image
                    className="max-w-full w-32 h-12"
                    alt="GoogleImg"
                    src={GoogleImg}
                  />
                </div>
                <div className="flex-1">
                  <video className=" mx-auto  rounded-3xl h-64 w-full md:h-[425px]" src={appVide} type="video/mp4" autoPlay loop >
                  
                  </video>
                </div>
              </div>
            </SwiperSlide>
           <SwiperSlide>
              <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-5">
                <div className="space-y-6 p-3 flex flex-col justify-center md:items-start items-center md:p-24 flex-1">
                  <h2 className="step-heading">Step 3</h2>
                  <p className="text-2xl md:text-4xl text-center md:text-start font-bold text-[#8cbae8]">
                  Start earning upto ₹ 1 Lakh every month
                  </p>
                  <div className="bg-white h-3 w-1/2 mb-6 rounded-xl">
                    <div className="animate-dZkvup"></div>
                  </div>
                  <Image
                    className="max-w-full w-32 h-12"
                    alt="GoogleImg"
                    src={GoogleImg}
                  />
                </div>
                <div className="flex-1">
                  <video className=" mx-auto  rounded-3xl h-64 w-full md:h-[425px]" src={appVide} type="video/mp4" autoPlay loop >
                  
                  </video>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <Image  className="absolute top-0 right-0" alt="bg" src={bg}></Image>
        </div>
      </div>
    </section>
  );
};

export default StartEarning;
