'use client'
import React, { lazy } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay } from "swiper";
import Image from "next/image";
import logo1 from "@/assets/topbrand/logo1.webp"
import logo2 from "@/assets/topbrand/logo2.webp"
import logo3 from "@/assets/topbrand/logo3.webp"
import logo4 from "@/assets/topbrand/logo4.webp"
import logo5 from "@/assets/topbrand/logo5.webp"
import logo6 from "@/assets/topbrand/logo6.png"
import logo7 from "@/assets/topbrand/logo7.webp"
import logo8 from "@/assets/topbrand/logo8.webp"
import logo9 from "@/assets/topbrand/logo9.png"

const TopBrands = () => {
  return (
    <div className="container my-8">
      <SectionTitle title="Top Brands on ZET" pera="We are trusted by best brand in the country"></SectionTitle>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="border rounded-md  md:px-7 py-3">
          <Image  className="max-w-full w-full md:w-[28vw] object-fill mx-auto" alt="logo1"  src={logo1}/>
          </SwiperSlide>
          <SwiperSlide className="border rounded-md  md:px-7 py-3">
          <Image  className="max-w-full w-full md:w-[28vw] object-fill mx-auto" alt="logo2"  src={logo2}/>
          </SwiperSlide>
          <SwiperSlide className="border rounded-md  md:px-7 py-3">
          <Image  className="max-w-full w-full md:w-[28vw] object-fill mx-auto" alt="logo3"  src={logo3}/>
          </SwiperSlide>
          <SwiperSlide className="border rounded-md  md:px-7 py-3">
          <Image  className="max-w-full w-full md:w-[28vw] object-fill mx-auto" alt="logo4"  src={logo4}/>
          </SwiperSlide>
          <SwiperSlide className="border rounded-md  md:px-7 py-3">
          <Image  className="max-w-full w-full md:w-[28vw] object-fill mx-auto" alt="logo5"  src={logo5}/>
          </SwiperSlide>
          <SwiperSlide className="border rounded-md  md:px-7 py-3">
          <Image  className="max-w-full w-full md:w-[28vw] object-fill mx-auto" alt="logo6"  src={logo6}/>
          </SwiperSlide>
          <SwiperSlide className="border rounded-md  md:px-7 py-3">
          <Image  className="max-w-full w-full md:w-[28vw] object-fill mx-auto" alt="logo7"  src={logo7}/>
          </SwiperSlide>
          <SwiperSlide className="border rounded-md  md:px-7 py-3">
          <Image  className="max-w-full w-full md:w-[28vw] object-fill mx-auto" alt="logo8"  src={logo8}/>
          </SwiperSlide>
          <SwiperSlide className="border rounded-md  md:px-7 py-3">
          <Image  className="max-w-full w-full md:w-[28vw] object-fill mx-auto" alt="logo9"  src={logo9}/>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TopBrands;
