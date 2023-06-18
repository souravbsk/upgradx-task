"use client";
import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Image from "next/image";
import creditCard from "@/assets/productImg/CC.webp";
import Loan from "@/assets/productImg/Loan.webp";
import AccountSave from "@/assets/productImg/AccountSave.webp";
import BNPL from "@/assets/productImg/BNPL.webp";
import { Tilt } from "react-tilt";

const Products = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-white">
      <div className=" productBG pt-6  md:pb-24">
        <SectionTitle
          title="Products on ZET"
          pera="We are trusted by best brand in the country"
        ></SectionTitle>
        <div className="container">
          <div data-aos="fade-up" className="grid  grid-cols-1 md:grid-cols-2 gap-8">
            <Tilt options={{ scale: 1 }}>
              <div className="p-10 flex flex-col md:flex-row items-center gap-6 rounded-xl group duration-300 hover:bg-white bg-[#EDFFEC]">
                <div className="flex-shrink-0">
                  <Image
                    className="max-w-full w-32 group-hover:grayscale-0 object-fill grayscale  "
                    src={creditCard}
                    alt="creditCard"
                  ></Image>
                </div>
                <div className="flex-1 md:text-start text-center">
                  <h2 className="text-xl font-semibold">CREDIT CARDS</h2>
                  <p className="font-bold text-[#36374b]">
                    100% Contactless Application Process with Instant Approval
                    From Top Banks.
                  </p>
                </div>
              </div>
            </Tilt>
            <Tilt options={{ scale: 1 }}>
              <div className="p-10 flex flex-col md:flex-row items-center gap-6 rounded-xl group duration-300 hover:bg-white bg-[#FFF1CA]">
                <div className="flex-shrink-0">
                  <Image
                    className="max-w-full w-32 group-hover:grayscale-0 object-fill grayscale  "
                    src={Loan}
                    alt="creditCard"
                  ></Image>
                </div>
                <div className="flex-1 md:text-start text-center">
                  <h2 className="text-xl font-semibold">CREDIT CARDS</h2>
                  <p className="font-bold text-[#36374b]">
                    100% Contactless Application Process with Instant Approval
                    From Top Banks.
                  </p>
                </div>
              </div>
            </Tilt>
            <Tilt options={{ scale: 1 }}>
              <div className="p-10 flex flex-col md:flex-row items-center gap-6 rounded-xl group duration-300 hover:bg-white bg-[#FFEEE7]">
                <div className="flex-shrink-0">
                  <Image
                    className="max-w-full w-32 group-hover:grayscale-0 object-fill grayscale  "
                    src={BNPL}
                    alt="creditCard"
                  ></Image>
                </div>
                <div className="flex-1 md:text-start text-center">
                  <h2 className="text-xl font-semibold">CREDIT CARDS</h2>
                  <p className="font-bold text-[#36374b]">
                    100% Contactless Application Process with Instant Approval
                    From Top Banks.
                  </p>
                </div>
              </div>
            </Tilt>
            <Tilt options={{ scale: 1 }}>
              <div className="p-10 flex flex-col md:flex-row items-center gap-6 rounded-xl group duration-300 hover:bg-white bg-[#FFF5E7]">
                <div className="flex-shrink-0">
                  <Image
                    className="max-w-full w-32 group-hover:grayscale-0 object-fill grayscale  "
                    src={AccountSave}
                    alt="creditCard"
                  ></Image>
                </div>
                <div className="flex-1 md:text-start text-center">
                  <h2 className="text-xl font-semibold">CREDIT CARDS</h2>
                  <p className="font-bold text-[#36374b]">
                    100% Contactless Application Process with Instant Approval
                    From Top Banks.
                  </p>
                </div>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
