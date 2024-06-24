import React, { FC } from "react";
import NcImage from "@/shared/NcImage/NcImage";
import rightImgDemo from "@/images/rightLargeImg.png";
import rightLargeImgDark from "@/images/rightLargeImgDark.png";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Logo from "@/shared/Logo/Logo";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";

export interface SectionPromo1Props {
    className?: string;
}

const SectionPromo1: FC<SectionPromo1Props> = ({ className = "" }) => {
    return (
        <section
            className={`nc-SectionPromo1 relative flex flex-col lg:flex-row items-center p-12 ${className}`}
        >
            <div className="relative flex-shrink-0 mb-16 lg:mb-0 lg:mr-10 lg:w-2/5">
                <Logo className="w-2/5" />
                <h2 className="font-semibold text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl mt-6 sm:mt-10 !leading-[1.2] tracking-tight">
                    Start earning more<br /> with Marce
                </h2>
                <span className="block mt-6 text-slate-500 dark:text-slate-400 ">
                    With Marce you can become a seller & earn...
                </span>
                <div className="flex space-x-2 sm:space-x-5 mt-6 sm:mt-12">
                    <ButtonPrimary href="/" className="">
                        Become a Seller
                    </ButtonPrimary>
                </div>
            </div>
            <div className="relative flex-1 max-w-xl lg:max-w-none p-16">
                <NcImage
                    alt=""
                    containerClassName="block dark:hidden"
                    src={rightImgDemo}
                    sizes="(max-width: 768px) 80vw, 30vw"
                    className=""
                />
                <NcImage
                    alt=""
                    containerClassName="hidden dark:block"
                    src={rightLargeImgDark}
                    sizes="(max-width: 768px) 80vw, 30vw"
                    className=""
                />
            </div>
        </section>
    );
};

export default SectionPromo1;
