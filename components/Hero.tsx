"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Transition } from "@headlessui/react";

export default function Hero() {
    const INTERVAL_LENGTH = 5000;
    const AUTOPLAY = true;

    const items = [
        { src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png", alt: "Phone Mockup" },
        { src: "/images/macbook.png", alt: "MacBook Mockup" },
        { src: "/images/watch1.png", alt: "Watch Mockup" },
        { src: "/images/shoe1.png", alt: "Shoe Mockup" },
        { src: "/images/perfume.png", alt: "Perfume Mockup" },
        { src: "/images/shirt1.png", alt: "Shirt Mockup" }
    ];

    const [currentItem, setCurrentItem] = useState(0);

    const prev = () => setCurrentItem((curr) => (curr === 0 ? items.length - 1 : curr - 1));
    const next = () => setCurrentItem((curr) => (curr === items.length - 1 ? 0 : curr + 1));

    useEffect(() => {
        if (!AUTOPLAY) return;
        const interval = setInterval(next, INTERVAL_LENGTH);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-white dark:bg-gray-900 lg:px-20">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <span className="mb-8 text-xs font-bold tracking-widest text-gray-700 uppercase">
                        Modern C2C Platform
                    </span>
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                        Buy, Sell, Connect
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        Discover unique products or turn your passions into profit.
                    </p>
                    <div>
                        <Link href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-900">
                            Join Now
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </Link>
                    </div>
                </div>

                <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] w-full overflow-hidden text-center sm:mt-6 md:mt-6 lg:mt-0 lg:col-span-5 lg:flex">
                    {items.map((item, index) => (
                        <Transition
                            key={index}
                            show={currentItem === index}
                            enter="transition-opacity duration-1000 ease-in-out"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity duration-1000 ease-in-out"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="absolute w-full h-full">
                                <Image src={item.src} alt={item.alt} fill style={{ objectFit: "contain" }} quality={100} />
                            </div>
                        </Transition>
                    ))}
                </div>
            </div>
        </section>
    );
}
