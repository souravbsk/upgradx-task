"use client"
import React from 'react';
import Inv1 from "@/assets/aboutus/member/Inv1.webp"
import Inv2 from "@/assets/aboutus/member/Inv2.webp"
import Inv3 from "@/assets/aboutus/member/Inv3.webp"
import Inv4 from "@/assets/aboutus/member/Inv4.webp"
import Inv5 from "@/assets/aboutus/member/Inv5.webp"
import Inv6 from "@/assets/aboutus/member/Inv6.webp"
import Inv7 from "@/assets/aboutus/member/Inv7.webp"
import Inv8 from "@/assets/aboutus/member/Inv8.webp"
import Image from 'next/image';
import { Tilt } from 'react-tilt';

const TeamMeamber = () => {
    return (
        <div className='container grid-cols-2 md:mt-20 grid md:grid-cols-3 gap-6 md:gap-8'>
            <Tilt>
            <div className='h-56 md:h-auto'>
                <Image className='max-w-full md:h-72 md:w-72' src={Inv1}></Image>
                <h2 className='font-medium text-lg mt-5 mb-3'>Kunal Shah</h2>
                <p className='text-sm'>Founder, CRED</p>
            </div>
            </Tilt>
            <Tilt>
            <div className='h-56 md:h-auto'>
                <Image className='max-w-full md:h-72 md:w-72' src={Inv2}></Image>
                <h2 className='font-medium text-lg mt-5 mb-3'>Gaurav Munjal</h2>
                <p className='text-sm'>Founder, UNACADEMY</p>
            </div>
            </Tilt>
            <Tilt>
            <div className='h-56 md:h-auto'>
                <Image className='max-w-full md:h-72 md:w-72' src={Inv3}></Image>
                <h2 className='font-medium text-lg mt-5 mb-3'>Aakrit Vaish</h2>
                <p className='text-sm'>Co-Founder, HAPTIK</p>
            </div>
            </Tilt>
            <Tilt>
            <div className='h-56 md:h-auto'>
                <Image className='max-w-full md:h-72 md:w-72' src={Inv4}></Image>
                <h2 className='font-medium text-lg mt-5 mb-3'>Harshil Mathur</h2>
                <p className='text-sm'>Founder, RAZORPAY</p>
            </div>
            </Tilt>
            <Tilt>
            <div className='h-56 md:h-auto'>
                <Image className='max-w-full md:h-72 md:w-72' src={Inv5}></Image>
                <h2 className='font-medium text-lg mt-5 mb-3'>Vidit Aatrey</h2>
                <p className='text-sm'>Founder & CEO, MEESHO</p>
            </div>
            </Tilt>
            <Tilt>
            <div className='h-56 md:h-auto'>
                <Image className='max-w-full md:h-72 md:w-72' src={Inv6}></Image>
                <h2 className='font-medium text-lg mt-5 mb-3'>Amrish Rau</h2>
                <p className='text-sm'>CEO, PINELABS</p>
            </div>
            </Tilt>
            <Tilt>
            <div className='h-56 md:h-auto'>
                <Image className='max-w-full md:h-72 md:w-72' src={Inv7}></Image>
                <h2 className='font-medium text-lg mt-5 mb-3'>Lalit Keshre</h2>
                <p className='text-sm'>CEO, GROWW</p>
            </div>
            </Tilt>
            <Tilt>
            <div className='h-56 md:h-auto'>
                <Image className='max-w-full md:h-72 md:w-72' src={Inv8}></Image>
                <h2 className='font-medium text-lg mt-5 mb-3'>Gokul Rajaram</h2>
                <p className='text-sm'>Product, DOORDASH</p>
            </div>
            </Tilt>
        </div>
    );
};

export default TeamMeamber;