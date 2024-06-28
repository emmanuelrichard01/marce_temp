import React, { FC } from "react";
import rightImgDemo from "@/images/rightLargeImg.png";
import Image from "next/image";
import { Button } from "./ui/button";
export interface SectionPromo1Props {
    className?: string;
}

const SectionPromo1: FC<SectionPromo1Props> = ({ className = "" }) => {
    return (
        <section
            className={`nc-SectionPromo1 relative flex flex-col bg-slate-100 lg:flex-row items-center p-12 ${className}`}
        >
            <div className="relative flex-shrink-0 mb-16 lg:mb-0 lg:mr-10 lg:w-2/5">
                <h2 className="font-semibold text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl mt-6 sm:mt-10 !leading-[1.2] tracking-tight">
                    Start earning more<br /> with Marce
                </h2>
                <span className="block mt-6 text-slate-500 dark:text-slate-400 ">
                    With Marce you can become a seller & earn...
                </span>
                <div className="flex space-x-2 sm:space-x-5 mt-6 sm:mt-12">
                    <Button className="bg-gray-900">
                        Become a Seller
                    </Button>
                </div>
            </div>
            <div className="hidden lg:block relative flex-1 max-w-xl lg:max-w-none p-16">
                <Image src="/undraw.svg" alt="earn more" width={850} height={800} />
            </div>
        </section>
    );
};

export default SectionPromo1;
