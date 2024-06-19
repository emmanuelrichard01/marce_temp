import Image from "next/image";
import Hero from "@/components/Hero";
import Head from 'next/head';
import KeyFeatures from '../components/KeyFeatures';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Benefits from '../components/Benefits';
import PopularCategories from '../components/PopularCategories';
import CallToAction from '../components/CallToAction';
import SecurityAndTrust from '../components/SecurityAndTrust';

export default function Home() {
  return (

    <>
      <Hero />
      <PopularCategories />
      {/* <KeyFeatures /> */}
      {/* <HowItWorks /> */}
      <Testimonials />
      {/* <Benefits /> */}
      <CallToAction />
      {/* <SecurityAndTrust /> */}
    </>

  );
}
