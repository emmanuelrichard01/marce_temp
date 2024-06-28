"use client"
import React from 'react';
import Slider, { CustomArrowProps } from 'react-slick';
import { DevicePhoneMobileIcon, TvIcon, ShoppingBagIcon, ShoppingCartIcon, TruckIcon, BoltIcon } from '@heroicons/react/24/outline';
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link';


const categories = [
    { name: 'Mobile Phones', icon: DevicePhoneMobileIcon },
    { name: 'Electronics', icon: TvIcon },
    { name: 'Wears', icon: ShoppingBagIcon },
    { name: 'Groceries', icon: ShoppingCartIcon },
    { name: 'Transport', icon: TruckIcon },
    { name: 'Power', icon: BoltIcon }
];


const PopularCategories: React.FC = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };
    return (
        <section className="bg-white py-10 my-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between">
                    <h2 className="text-xl lg:text-3xl font-bold text-gray-900 mb-8">Popular Categories</h2>
                    <Link href="/" className={buttonVariants({ variant: "outline" })}>View More</Link>
                </div>
                <div className="items-center justify-around flex-row">
                    <Slider {...settings}>
                        {categories.map((category) => (
                            <div key={category.name} className=" !flex flex-col items-center bg-white p-6 rounded-lg">
                                <div className="p-4 h-20 w-20 bg-gray-200 rounded-full justify-center flex">
                                    <category.icon className="h-12 w-12 text-gray-800 mb-4 items-center" />
                                </div>
                                <h3 className="text-sm font-semibold text-gray-900">{category.name}</h3>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default PopularCategories;
