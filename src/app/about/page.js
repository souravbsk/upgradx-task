"use client"
import EvolvedYear from '@/Components/EvolvedYear/EvolvedYear';
import Founders from '@/Components/Founders/Founders';
import GotFeatured from '@/Components/GotFeatured/GotFeatured';
import HeroBanner from '@/Components/HeorBanner/HeroBanner';
import MeettheInvestors from '@/Components/MeettheInvestors/MeettheInvestors';
import TeamMeamber from '@/Components/TeamMeamber/TeamMeamber';
import Image from 'next/image';
import React, { useEffect } from 'react';
import AboutUsFooter from "@/assets/aboutus/AboutUsFooter.webp"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
const AboutUs = () => {
    useEffect(() => {
        AOS.init();

    },[])
    return (
        <section>
            <HeroBanner></HeroBanner>
            <EvolvedYear></EvolvedYear>
            <GotFeatured></GotFeatured>
            <MeettheInvestors></MeettheInvestors>
            <TeamMeamber></TeamMeamber>
            <Founders></Founders>
            <Image src={AboutUsFooter}></Image>
        </section>
    );
};

export default AboutUs;