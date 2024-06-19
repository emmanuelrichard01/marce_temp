"use client"
import React from 'react';
import Slider from 'react-slick';
import { DevicePhoneMobileIcon, TvIcon, ShoppingBagIcon, ShoppingCartIcon, TruckIcon } from '@heroicons/react/24/outline';

const categories = [
    { name: 'Mobile Phones', icon: DevicePhoneMobileIcon },
    { name: 'Electronics', icon: TvIcon },
    { name: 'Wears', icon: ShoppingBagIcon },
    { name: 'Groceries', icon: ShoppingCartIcon },
    { name: 'Transport', icon: TruckIcon }
];

const PopularCategories: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="bg-white py-10 my-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Product Categories</h2>
                <Slider {...settings}>
                    {categories.map((category) => (
                        <div key={category.name} className="!flex !w-4/5 flex-col items-center bg-white p-6 rounded-lg">
                            <category.icon className="h-12 w-12 text-gray-500 mb-4 items-center" />
                            <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} slick-arrow slick-next`}
            style={{ ...style, display: "block", background: "gray", borderRadius: "50%" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} slick-arrow slick-prev`}
            style={{ ...style, display: "block", background: "gray", borderRadius: "50%" }}
            onClick={onClick}
        />
    );
}

export default PopularCategories;
