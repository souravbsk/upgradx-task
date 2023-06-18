"use client";
import Image from "next/image";
import React from "react";
import ZetEffectImg from "@/assets/EffectImg/peeps1.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";

const TheZetEffect = () => {
  return (
    <section className="bg-Effect">
      <div className="container flex-col md:flex-row md:flex bg-Effect-two">
        <div className=" max-w-full md:block hidden md:w-1/2">
          <Image
            className="text-transparent mix-blend-luminosity"
            src={ZetEffectImg}
            alt="ZetEffectImg"
          ></Image>
        </div>
        <div className=" py-32 md:p-14 max-w-full md:w-1/2 md:-ml-36">
          <h2 className="uppercase mb-5 text-white  md:font-bold  text-sm md:text-2xl">
            the Zet Effect
          </h2>

          <div>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                type: 'progressbar',
              }}
            
       
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide><p className=" md:text-3xl leading-normal md:font-bold text-white">We helped customers in more than 50 cities to get their first financial product</p></SwiperSlide>
              <SwiperSlide><p className=" md:text-3xl leading-normal md:font-bold text-white">We helped customers in more than 50 cities to get their first financial product</p></SwiperSlide>
              <SwiperSlide><p className=" md:text-3xl leading-normal md:font-bold text-white">We helped customers in more than 50 cities to get their first financial product</p></SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheZetEffect;
