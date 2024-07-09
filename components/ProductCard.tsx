'use client'

import React, { useState, memo } from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SparklesIcon, HandThumbUpIcon as HandThumbUpIconSolid, HeartIcon as HeartIconSolid, ShoppingCartIcon as ShoppingCartIconSolid } from "@heroicons/react/24/solid";
import { ShoppingCartIcon, HeartIcon, HandThumbUpIcon } from "@heroicons/react/24/outline";
import { Product } from '@/types/Product';

interface ProductCardProps {
    product: Product;
    onAddToCart: (product: Product) => void;
    onLike: (product: Product) => void;
    onFavorite: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = memo(({ product, onAddToCart, onLike, onFavorite }) => {
    const [isSparkleVisible, setIsSparkleVisible] = useState(true);
    const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

    const handleSparkleClick = () => {
        setIsSparkleVisible(false);
    };

    const handleIconClick = (icon: string) => {
        setSelectedIcon(prev => prev === icon ? null : icon);
        setIsSparkleVisible(true);

        switch (icon) {
            case 'thumb':
                onLike(product);
                break;
            case 'heart':
                onFavorite(product);
                break;
            case 'cart':
                onAddToCart(product);
                break;
        }
    };

    const renderIcon = (icon: string, IconOutline: React.ElementType, IconSolid: React.ElementType) => (
        <Button variant="ghost" size="icon" onClick={() => handleIconClick(icon)}>
            {selectedIcon === icon ?
                <IconSolid className="w-5 h-5 text-primary" /> :
                <IconOutline className="w-5 h-5" />
            }
        </Button>
    );

    return (
        <Card className="w-full max-w-[270px] flex-shrink-0 transition-shadow duration-300 hover:shadow-lg pt-4 pb-4">
            <CardHeader className="relative p-0">
                <div className="relative w-full h-48">
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        style={{ objectFit: 'contain' }}
                        quality={100}

                    />
                </div>
                {isSparkleVisible ? (
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
                        onClick={handleSparkleClick}
                    >
                        <SparklesIcon className="w-5 h-5" />
                    </Button>
                ) : (
                    <div className="absolute top-2 right-2 flex items-center justify-center bg-gray-50 rounded-3xl shadow-md">
                        {renderIcon('thumb', HandThumbUpIcon, HandThumbUpIconSolid)}
                        {renderIcon('heart', HeartIcon, HeartIconSolid)}
                        {renderIcon('cart', ShoppingCartIcon, ShoppingCartIconSolid)}
                    </div>
                )}
            </CardHeader>
            <CardContent className="p-4">
                <h3 className="text-lg font-semibold line-clamp-2">{product.title}</h3>
                <div className="flex items-center space-x-2 mt-2">
                    <span className="text-xl font-bold text-primary">${product.price}</span>
                    {product.originalPrice && (
                        <span className="text-sm line-through text-muted-foreground">{product.originalPrice}</span>
                    )}
                </div>
                <div className="flex items-center space-x-1 mt-2">
                    <StarRating rating={product.rating ?? 0} />
                    <span className="ml-2 rounded bg-gray-200 px-2.5 py-0.5 text-xs font-semibold">
                        {typeof product.rating === 'number' ? product.rating.toFixed(1) : 'N/A'}
                    </span>
                </div>
            </CardContent>
        </Card>
    );
});

ProductCard.displayName = 'ProductCard';

interface StarRatingProps {
    rating: number;
}

const StarRating: React.FC<StarRatingProps> = memo(({ rating }) => {
    return (
        <>
            {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                    key={star}
                    className={`w-4 h-4 ${star <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
                />
            ))}
        </>
    );
});

StarRating.displayName = 'StarRating';

const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = memo((props) => {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
        >
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
        </svg>
    );
});

StarIcon.displayName = 'StarIcon';

export default ProductCard;
