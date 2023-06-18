"use client";
import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Tilt } from "react-tilt";
import Image from "next/image";
import found1 from "@/assets/aboutus/Founders/Lokesh.webp";
import found2 from "@/assets/aboutus/Founders/Yash.webp";
import found3 from "@/assets/aboutus/Founders/Manish.webp";
import { FaLinkedin } from "react-icons/fa";

const Founders = () => {
  return (
    <div className="bg-[#F3F9FF] py-12 md:py-20 md:mt-8">
      <SectionTitle
        title="Meet our Founders"
        pera="Few words from founders desk"
      ></SectionTitle>
      <div data-aos="fade-up" className="container mt-12 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-20">
        <Tilt>
          <Image className="h-80 w-full" src={found3} alt="found1"></Image>
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="mt-5 text-lg md:text-2xl">Manish Shara</h2>
              <p className="text-xl mt-2">Co- Founder & CEO</p>
            </div>
            <FaLinkedin className="text-4xl"></FaLinkedin>
          </div>
        </Tilt>
        <Tilt>
          <Image className="h-80 w-full" src={found2} alt="found1"></Image>
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="mt-5 text-lg md:text-2xl">Yash Desai</h2>
              <p className="text-xl mt-2">Co- Founder</p>
            </div>
            <FaLinkedin className="text-4xl"></FaLinkedin>
          </div>
        </Tilt>
        <Tilt>
          <Image className="h-80 w-full" src={found1} alt="found1"></Image>
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="mt-5 text-lg md:text-2xl">Lokesh Agarwal</h2>
              <p className="text-xl mt-2">CTO</p>
            </div>
            <FaLinkedin className="text-4xl"></FaLinkedin>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default Founders;
