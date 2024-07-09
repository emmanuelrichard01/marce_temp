export interface Product {
    id: string | number;
    title: string;
    price: string;
    image: string;
    originalPrice?: string;
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