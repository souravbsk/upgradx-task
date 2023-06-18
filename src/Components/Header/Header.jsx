"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import brandLogo from "@/assets/brandLogo.svg";
import Image from "next/image";
import {FaBars} from "react-icons/fa"
import {RxCross2} from "react-icons/rx"

const Header = () => {
  const [isShow,setShow] = useState(true);



  return (
    <header>
      <nav className="flex flex-col md:flex-row py-4 border-b-2 items-center justify-between px-5 md:px-24">
       <div className=" flex items-center">
       <Link href="/">
          <Image loading="lazy" className="max-w-full w-[30%]" src={brandLogo} alt="" />
        </Link>
        <button onClick={() => setShow(!isShow)} className="block md:hidden text-2xl">
          {
            isShow ?   <FaBars></FaBars> :<RxCross2></RxCross2> 
          }
         
         
        </button>
       </div>
        <ul className={`flex z-50 flex-col md:flex-row bg-white items-center gap-7 md:w-auto w-full duration-300 md:py-0 py-16 absolute md:static ${isShow ? "-top-96" : "top-[70px]"}`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/partner-with-us">Partner With Us</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link className="bg-blue-500 px-3 py-2 rounded-md text-white" href="/">Download ZET</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
