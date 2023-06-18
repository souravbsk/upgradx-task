import Image from "next/image";
import React from "react";
import whyUsHero from "@/assets/chooseus/whyUsHero.webp";
import logo1 from "@/assets/chooseus/logo1.svg";
import logo2 from "@/assets/chooseus/logo2.svg";
import logo3 from "@/assets/chooseus/logo3.svg";
import logo4 from "@/assets/chooseus/logo4.svg";
import logo5 from "@/assets/chooseus/logo5.svg";
import logo6 from "@/assets/chooseus/logo6.svg";
const ChooseUs = () => {
  return (
    <section className="md:py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex chooseus-bg bg-no-repeat  flex-shrink-0 items-center flex-col justify-center gap-3">
            <h2 className="text-2xl font-bold">
              Why <span className="text-[#145CC5]">Choose Us</span>
            </h2>
            <p className="text-lg text-center text-gray-500">
              Why we are loved by our customers
            </p>
            <Image
              alt="whyUsHero"
              className="mt-12  hidden md:block max-w-full w-72 object-fill"
              src={whyUsHero}
            ></Image>
          </div>
          <div data-aos="fade-up" className="grid  grid-cols-1 md:grid-cols-2 gap-8">
            <div className="px-8 py-5 flex flex-col md:items-start items-center">
              <Image className="max-w-full w-28 h-28" src={logo1} alt="logo1"></Image>
              <h3 className="text-xl font-bold">Zero Investment</h3>
              <p>Build your business without any investment</p>
            </div>
            <div className="px-8 py-5 flex flex-col md:items-start items-center">
              <Image className="max-w-full w-28 h-28" src={logo2} alt="logo1"></Image>
              <h3 className="text-xl font-bold">Quick Payout</h3>
              <p>Direct Payout in your bank account in short time</p>
            </div>
            
            <div className="px-8 py-5 flex flex-col md:items-start items-center">
              <Image className="max-w-full w-28 h-28" src={logo3} alt="logo1"></Image>
              <h3 className="text-xl font-bold">Limitless Earnings</h3>
              <p>Direct Payout in your bank account in short time</p>
            </div>
            <div className="px-8 py-5 flex flex-col md:items-start items-center">
              <Image className="max-w-full w-28 h-28" src={logo4} alt="logo1"></Image>
              <h3 className="text-xl font-bold">Training & Upskilling</h3>
              <p>Get trained by finance and sales experts</p>
            </div>
            <div className="px-8 py-5 flex flex-col md:items-start items-center">
              <Image className="max-w-full w-28 h-28" src={logo5} alt="logo1"></Image>
              <h3 className="text-xl font-bold">Customer Support</h3>
              <p>Access tools and content to build relationship</p>
            </div>
            <div className="px-8 py-5 flex flex-col md:items-start items-center">
              <Image className="max-w-full w-28 h-28" src={logo6} alt="logo1"></Image>
              <h3 className="text-xl font-bold">Financial Products</h3>
              <p>Trustworthy & high-rated products & categories</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
