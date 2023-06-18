import Image from 'next/image';
import React from 'react';
import InvCompany1 from "@/assets/aboutus/meetInvest/InvCompany1.webp"
import InvCompany2 from "@/assets/aboutus/meetInvest/InvCompany2.webp"
import InvCompany3 from "@/assets/aboutus/meetInvest/InvCompany3.webp"
import InvCompany4 from "@/assets/aboutus/meetInvest/InvCompany4.webp"

const MeettheInvestors = () => {
    return (
        <section className='container md:mt-20'>
        <h2 className='text-2xl text-4xl font-bold'>Got Featured</h2>
   
    <div data-aos="fade-up" className='grid grid-cols-2 md:grid-cols-3 gap-4 mt-8'>
        <div className='p-4'>
            <Image className='w-full' src={InvCompany1} ></Image>
        </div>
        <div className='p-4'>
            <Image className='w-full' src={InvCompany2} ></Image>
        </div>
        <div className='p-4'>
            <Image className='w-full' src={InvCompany3} ></Image>
        </div>
        <div className='p-4'>
            <Image className='w-full' src={InvCompany4} ></Image>
        </div>

    </div>
    </section>
    );
};

export default MeettheInvestors;