import React from "react";

const HeroBanner = () => {
  return (
    <div className="aboutbg  backdrop-opacity-30 h-[80vh] flex items-center justify-center">
      <div className="text-white space-y-3 max-w-full text-center px-5 md:w-4/12 ">
        <h2 className="text-4xl font-bold">OUR MISSION</h2>
        <p>
          Enabling financial inclusion for the next billion Indians & making
          their Zindagi Set. Building a platform that enables you to sell
          financial products & earn up to Rs. 1 lakh every month.
        </p>
        <p className="font-semibold text-xl">EARN BETTER. LIVE BETTER.</p>
      </div>
    </div>
  );
};

export default HeroBanner;
