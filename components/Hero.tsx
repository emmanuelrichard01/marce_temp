"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";

export default function Hero() {
    const INTERVAL_LENGTH = 3000;
    const AUTOPLAY = true;

    const items = [
        { src: "/images/shoe2.png", alt: "Shoe Mockup" },
        { src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png", alt: "Phone Mockup" },
        { src: "/images/macbook.png", alt: "MacBook Mockup" },
        { src: "/images/watch1.png", alt: "Watch Mockup" },
        { src: "/images/shoe1.png", alt: "Shoe Mockup" }
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
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:pb-16 lg:grid-cols-12">
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
                </div>

                <div className="relative h-[20vh] sm:h-[30vh] md:h-[50vh] w-full overflow-hidden text-center sm:mt-6 md:mt-6 lg:mt-0 lg:col-span-5 lg:flex">
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
