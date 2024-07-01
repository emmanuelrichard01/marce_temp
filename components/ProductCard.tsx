'use client'
import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SparklesIcon, HandThumbUpIcon as HandThumbUpIconSolid, HeartIcon as HeartIconSolid, ShoppingCartIcon as ShoppingCartIconSolid } from "@heroicons/react/24/solid";
import { ShoppingCartIcon, HeartIcon, HandThumbUpIcon } from "@heroicons/react/24/outline";
import { Product } from '@/components/Products';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
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

function StarIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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

export default ProductCard;
