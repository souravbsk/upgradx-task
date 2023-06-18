import Image from 'next/image';
import React from 'react';
import brangLogolight from "@/assets/brangLogolight.svg"
import Link from 'next/link';
import {CiMail} from "react-icons/ci"
import { FaFacebook, FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaPhoneAlt, FaTelegram, FaTelegramPlane, FaWhatsappSquare } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className='bg-[#016FFF] bg-no-repeat bg-bottom  md:pt-20 pb-32 md:pb-48 bg-footer'>
            <div className='container'>
                <div className='py-5 border-b-2'>
                    <Image src={brangLogolight} alt='brangLogolight'></Image>
                </div>
                <div className='md:px-5 grid  grid-cols-1 md:grid-cols-4 gap-8 mt-10'>
                    <div>
                        <h3 className='text-base md:text-xl text-white mb-2'>COMPANY</h3>
                        <ul className='space-y-2'>
                            <li><Link className='text-base md:text-xl text-white' href="/">About Us</Link></li>
                            <li><Link className='text-base md:text-xl text-white' href="/">Partner with us</Link></li>
                            <li><Link className='text-base md:text-xl text-white' href="/">Blog</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-base md:text-xl text-white mb-2'>LEGAL</h3>
                        <ul className='space-y-2'>
                            <li><Link className='text-base md:text-xl text-white' href="/">Privacy Policy</Link></li>
                            <li><Link className='text-base md:text-xl text-white' href="/">Terms of Use</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-base md:text-xl text-white mb-2'>CONTACT</h3>
                        <ul className='space-y-2'>
                            <li className='flex items-center gap-2 text-white'><CiMail></CiMail> <Link className='text-base md:text-xl text-white' href="/">hi@zetapp.in</Link></li>
                            <li className='flex items-center gap-2 text-white'><FaPhoneAlt></FaPhoneAlt> <Link className='text-base md:text-xl text-white' href="/">+915-5..525</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-base md:text-xl text-white mb-2'>SOCIAL</h3>
                        <ul className=' flex items-start gap-2 mt-3'>
                            <li><Link className='text-3xl text-white' href="/"><FaLinkedin></FaLinkedin></Link></li>
                            <li><Link className='text-3xl text-white' href="/"><FaInstagramSquare></FaInstagramSquare></Link></li>
                            <li><Link className='text-3xl text-white' href="/"><FaFacebookSquare></FaFacebookSquare></Link></li>
                            <li><Link className='text-3xl text-white' href="/"><FaTelegramPlane></FaTelegramPlane></Link></li>
                            <li><Link className='text-3xl text-white' href="/"><FaWhatsappSquare></FaWhatsappSquare></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;