import Image from 'next/image';
import React from 'react';
import image1 from "@/assets/aboutus/BusinessStandard.webp"
import image2 from "@/assets/aboutus/EconomicTimes.webp"
import image3 from "@/assets/aboutus/Inc42.webp"
import image4 from "@/assets/aboutus/mint.webp"
import image5 from "@/assets/aboutus/YourStory.webp"

const GotFeatured = () => {
    return (
        <section className='container md:mt-20'>
            <h2 className='text-2xl md:text-4xl font-bold'>Got Featured</h2>
       
        <div  className='grid grid-cols-5 gap-4 mt-8'>
            <div>
                <Image src={image1} ></Image>
            </div>
            <div>
                <Image src={image2} ></Image>
            </div>
            <div>
                <Image src={image3} ></Image>
            </div>
            <div>
                <Image src={image4} ></Image>
            </div>
            <div>
                <Image src={image5} ></Image>
            </div>

        </div>
        </section>
    );
};

export default GotFeatured;