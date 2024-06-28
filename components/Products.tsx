"use client"
import React, { useState } from 'react';
import { buttonVariants } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";
import { SparklesIcon, HandThumbUpIcon as HandThumbUpIconSolid, HeartIcon as HeartIconSolid, ShoppingCartIcon as ShoppingCartIconSolid } from "@heroicons/react/24/solid";
import { ShoppingCartIcon, HeartIcon, HandThumbUpIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';

// Define the product type
interface Product {
    id: number;
    name: string;
    price: string;
    imageSrc: string;
}

const products: Product[] = [
    { id: 1, name: 'Boss Perfume', price: '$100.00', imageSrc: 'images/perfume.png' },
    { id: 2, name: 'Apple Watch', price: '$800.00', imageSrc: 'images/watch2.png' },
    { id: 3, name: 'T-shirt', price: '$49.00', imageSrc: 'images/shirt1.png' },
    { id: 4, name: 'MacBook', price: '$1400.00', imageSrc: 'images/macbook.png' },
    { id: 5, name: 'Nike Sport', price: '$50.00', imageSrc: 'images/shoe1.png' },
    { id: 6, name: 'Apple Watch', price: '$800.00', imageSrc: 'images/watch2.png' },
    { id: 7, name: 'T-shirt', price: '$49.00', imageSrc: 'images/shirt1.png' },
    { id: 8, name: 'MacBook', price: '$1400.00', imageSrc: 'images/macbook.png' },
];

export default function Products() {
    return (

        <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between px-12">
                    <h2 className="text-xl lg:text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
                    <Link href="/" className={buttonVariants({ variant: "outline" })}>View More</Link>
                </div>
                <div className="flex overflow-x-auto no-scrollbar space-x-4 p-4">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// Define the ProductCard props type
interface ProductCardProps {
    product: Product;
}

function ProductCard({ product }: ProductCardProps) {
    const [isSparkleVisible, setIsSparkleVisible] = useState(true);
    const [selectedIcon, setSelectedIcon] = useState('');

    const handleSparkleClick = () => {
        setIsSparkleVisible(false);
    };

    const handleIconClick = (icon: string) => {
        setSelectedIcon(icon);
        setIsSparkleVisible(true);
    };

    return (
        <Card className="w-[220px] lg:w-[270px] flex-shrink-0 hover:shadow-lg">
            <CardHeader className="relative">
                <img src={product.imageSrc} alt={product.name} className="h-3/5 w-full object-cover mb-4" />
                {isSparkleVisible ? (
                    <Button variant="ghost" size="icon" className="absolute top-2 right-2 rounded-full bg-gray-200" onClick={handleSparkleClick}>
                        <SparklesIcon className="w-6 h-6" />
                    </Button>
                ) : (
                    <div className="absolute top-2 right-4 flex items-center justify-center bg-gray-50 rounded-3xl shadow-md">
                        <Button variant="ghost" size="icon" onClick={() => handleIconClick('thumb')}>
                            {selectedIcon === 'thumb' ? <HandThumbUpIconSolid className="w-5 h-5 mr-1 rounded-full" /> : <HandThumbUpIcon className="w-5 h-5 mr-1 rounded-full" />}
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleIconClick('heart')}>
                            {selectedIcon === 'heart' ? <HeartIconSolid className="w-5 h-5 mr-1 rounded-full" /> : <HeartIcon className="w-5 h-5 mr-1 rounded-full" />}
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleIconClick('cart')}>
                            {selectedIcon === 'cart' ? <ShoppingCartIconSolid className="w-5 h-5 mr-1 rounded-full" /> : <ShoppingCartIcon className="w-5 h-5 mr-1 rounded-full" />}
                        </Button>
                    </div>
                )}
            </CardHeader>
            <CardContent>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold">{product.price}</span>
                    <span className="text-sm line-through text-muted-foreground">$360</span>
                </div>
                <div className="flex items-center space-x-1">
                    <StarIcon className="w-4 h-4 text-yellow-500" />
                    <StarIcon className="w-4 h-4 text-yellow-500" />
                    <StarIcon className="w-4 h-4 text-yellow-500" />
                    <StarIcon className="w-4 h-4 text-yellow-500" />
                    <StarIcon className="w-4 h-4 text-yellow-500" />
                    <span className="mr-2 ml-3 rounded bg-gray-300 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
                </div>
            </CardContent>
        </Card>
    );
}

function StarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
        >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    );
}
