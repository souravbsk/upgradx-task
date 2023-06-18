import React from 'react';
import evlovedImg from "@/assets/aboutus/Growth.webp"
import Image from 'next/image';

const EvolvedYear = () => {
    return (
        <div className=' container overflow-x-scroll mt-6'>
            <h2 className='text-xl md:text-3xl text-center font-bold'>How We evolved over the year</h2>
            <div className='mt-12 '> 
                <Image className='w-full' src={evlovedImg} alt='evlovedImg'></Image>
            </div>
        </div>
    );
};

export default EvolvedYear;