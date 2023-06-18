"use client"
import ChooseUs from '@/Components/ChooseUs/ChooseUs'
import HeaderBanner from '@/Components/HeaderBanner/HeaderBanner'
import Products from '@/Components/Products/Products'
import StartEarning from '@/Components/StartEarning/StartEarning'
import TheZetEffect from '@/Components/TheZetEffect/TheZetEffect'
import TopBrands from '@/Components/TopBrands/TopBrands'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react'
// ..

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main >
      <HeaderBanner ></HeaderBanner>
      <TopBrands></TopBrands>
      <Products></Products>
      <TheZetEffect></TheZetEffect>
      <ChooseUs></ChooseUs>
      <StartEarning></StartEarning>
    </main>
  )
}
