import React from 'react';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: "/images/caro/caro10.png",
            title: "Summer Collection",
            description: "Discover our latest arrivals",
            cta: "Shop Now"
        },
        {
            image: "/images/caro/caro8.jpg",
            title: "Exclusive Deals",
            description: "Up to 50% off on selected items",
            cta: "View Offers"
        },
        {
            image: "/images/caro/caro6.jpg",
            title: "New Tech Gadgets",
            description: "Explore cutting-edge technology",
            cta: "Learn More"
        },
        {
            image: "/images/caro/caro0.webp",
            title: "Style & Elegance",
            description: "The new fragrance is simply divine",
            cta: "Shop Now"
        },
        {
            image: "/images/caro/caro4.webp",
            title: "Apple Watch",
            description: "Discover unique products",
            cta: "Learn More"
        },
        {
            image: "/images/caro/caro1.jpg",
            title: "New Iphone",
            description: "New technology, New feel",
            cta: "Shop Now"
        },
        {
            image: "/images/caro/caro5.jpg",
            title: "Beautiful Skin",
            description: "Enjoy 70% off on New skin care items",
            cta: "View Items"
        },
        {
            image: "/images/caro/caro9.jpg",
            title: "Bold Fashion",
            description: "Boots for Nature 20% off",
            cta: "Learn More"
        },
        {
            image: "/images/caro/caro3.jpg",
            title: "New Beverages",
            description: "Taste the Buzz & Rhythm",
            cta: "Learn More"
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative h-[calc(60vh-5rem)] lg:h-[calc(100vh-5rem)] bg-gray-900 overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gray-900 bg-opacity-70" />
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                        <Card className="w-full max-w-full bg-gray-800 bg-opacity-0 text-white border-none">
                            <CardContent className="p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center text-center">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-2 sm:mb-3 md:mb-4">{slide.title}</h1>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-3 sm:mb-4 md:mb-6">{slide.description}</p>
                                <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-200 text-xs sm:text-sm md:text-base">
                                    {slide.cta} <ShoppingCart className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            ))}
            <Button
                variant="link"
                size="icon"
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white bg-white bg-opacity-0 hover:bg-opacity-5"
                onClick={prevSlide}
            >
                <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
            </Button>
            <Button
                variant="link"
                size="icon"
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white bg-white bg-opacity-0 hover:bg-opacity-5"
                onClick={nextSlide}
            >
                <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
            </Button>
            <div className="absolute bottom-6 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 sm:w-2 sm:h-2 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-400'
                            }`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;