import Image from "next/image";
import Hero from "@/components/Hero";
import Head from 'next/head';
import KeyFeatures from '../components/KeyFeatures';
import FeaturedProducts from "@/components/FeaturedProducts";
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Benefits from '../components/Benefits';
import PopularCategories from '../components/PopularCategories';
import CallToAction from '../components/CallToAction';
import SecurityAndTrust from '../components/SecurityAndTrust';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionPromo1 from "@/components/SectionPromo1";


export default function Home() {
  return (

    <>
      <Hero />
      <PopularCategories />
      <FeaturedProducts />
      {/* <KeyFeatures /> */}
      <SectionPromo1 />
      <Testimonials />
      {/* <Benefits /> */}
      <CallToAction />
      {/* <SecurityAndTrust /> */}
    </>

  );
}
