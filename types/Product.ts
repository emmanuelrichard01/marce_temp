export interface Product {
    id: string | number;
    title: string;
    price: string | number;
    image: string;
    originalPrice?: string | number;
    rating?: number;
    description?: string;
    category?: string;
    brand?: string;
    inStock?: boolean;
    numberOfReviews?: number;
    sku?: string;
    tags?: string[];
    discountPercentage?: number;
}