'use client'

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types/Product';
import useDebounce from '@/hooks/useDebounce';
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const PRODUCTS_PER_PAGE_OPTIONS = [5, 10, 20, 50];

const ProductPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(20);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState<'name_asc' | 'name_desc' | 'price_asc' | 'price_desc'>('name_asc');

    const debouncedSearchTerm = useDebounce(searchTerm, 300);

    const fetchProducts = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            setProducts(data);
        } catch (err) {
            setError('An error occurred while fetching products. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const filteredAndSortedProducts = useMemo(() => {
        return products
            .filter(product =>
                product.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
                product.description?.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
            )
            .sort((a, b) => {
                switch (sortBy) {
                    case 'name_asc':
                        return a.title.localeCompare(b.title);
                    case 'name_desc':
                        return b.title.localeCompare(a.title);
                    case 'price_asc':
                        return parseFloat(a.price) - parseFloat(b.price);
                    case 'price_desc':
                        return parseFloat(b.price) - parseFloat(a.price);
                    default:
                        return 0;
                }
            });
    }, [products, debouncedSearchTerm, sortBy]);

    const currentProducts = useMemo(() => {
        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        return filteredAndSortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    }, [filteredAndSortedProducts, currentPage, productsPerPage]);

    const paginate = useCallback((pageNumber: number) => setCurrentPage(pageNumber), []);

    const handleAddToCart = useCallback((product: Product) => {
        // Implement add to cart logic
        console.log('Added to cart:', product);
    }, []);

    const handleLike = useCallback((product: Product) => {
        // Implement like logic
        console.log('Liked:', product);
    }, []);

    const handleFavorite = useCallback((product: Product) => {
        // Implement favorite logic
        console.log('Favorited:', product);
    }, []);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Loader2 className="h-8 w-8 animate-spin" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-center">
                    <p className="text-red-500 mb-4">{error}</p>
                    <Button onClick={fetchProducts}>Try Again</Button>
                </div>
            </div>
        );
    }

    return (
        <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between flex-col mb-8">
                    <h1 className="text-xl lg:text-3xl font-bold text-gray-900 mb-4">Product Categories</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-lg dark:text-gray-400">
                        Explore our wide range of products across various categories.
                    </p>
                    <Breadcrumb paths={[
                        { name: "Home", path: "/" },
                        { name: "Products", path: "/products" },
                    ]} />
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
                    <Input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="max-w-xs w-full sm:w-auto"
                    />
                    <div className="flex space-x-4 m-8">
                        <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Sort by" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="name_asc">Name (A-Z)</SelectItem>
                                <SelectItem value="name_desc">Name (Z-A)</SelectItem>
                                <SelectItem value="price_asc">Price (Low to High)</SelectItem>
                                <SelectItem value="price_desc">Price (High to Low)</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select
                            value={productsPerPage.toString()}
                            onValueChange={(value) => setProductsPerPage(Number(value))}
                        >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Products per page" />
                            </SelectTrigger>
                            <SelectContent>
                                {PRODUCTS_PER_PAGE_OPTIONS.map((option) => (
                                    <SelectItem key={option} value={option.toString()}>
                                        {option} per page
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
                    {currentProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={handleAddToCart}
                            onLike={handleLike}
                            onFavorite={handleFavorite}
                        />
                    ))}
                </div>
                <Pagination
                    productsPerPage={productsPerPage}
                    totalProducts={filteredAndSortedProducts.length}
                    paginate={paginate}
                    currentPage={currentPage}
                />
            </div>
        </section>
    );
};

interface PaginationProps {
    productsPerPage: number;
    totalProducts: number;
    paginate: (pageNumber: number) => void;
    currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ productsPerPage, totalProducts, paginate, currentPage }) => {
    const pageNumbers = useMemo(() => {
        const totalPages = Math.ceil(totalProducts / productsPerPage);
        const visiblePages = 5;
        const halfVisiblePages = Math.floor(visiblePages / 2);

        let startPage = Math.max(currentPage - halfVisiblePages, 1);
        let endPage = Math.min(startPage + visiblePages - 1, totalPages);

        if (endPage - startPage + 1 < visiblePages) {
            startPage = Math.max(endPage - visiblePages + 1, 1);
        }

        return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    }, [totalProducts, productsPerPage, currentPage]);

    return (
        <nav className="mt-8 flex justify-center">
            <ul className="flex items-center space-x-1">
                <li>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => paginate(Math.max(currentPage - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </Button>
                </li>
                {pageNumbers.map((number) => (
                    <li key={number}>
                        <Button
                            variant={currentPage === number ? "default" : "outline"}
                            size="sm"
                            onClick={() => paginate(number)}
                        >
                            {number}
                        </Button>
                    </li>
                ))}
                <li>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => paginate(Math.min(currentPage + 1, Math.ceil(totalProducts / productsPerPage)))}
                        disabled={currentPage === Math.ceil(totalProducts / productsPerPage)}
                    >
                        Next
                    </Button>
                </li>
            </ul>
        </nav>
    );
};

export default ProductPage;