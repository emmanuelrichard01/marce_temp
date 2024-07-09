'use client'
import Hero from "@/components/Hero";
import Sellers from '../components/Sellers';
import PopularCategories from '../components/PopularCategories';
import CallToAction from '../components/CallToAction';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionPromo1 from "@/components/SectionPromo1";
import FeaturedProducts from "@/components/FeaturedProducts"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <>
      <Hero />
      <PopularCategories />
      <FeaturedProducts />
      <SectionPromo1 />
      <Sellers />
      <CallToAction />
    </>

  );
}
