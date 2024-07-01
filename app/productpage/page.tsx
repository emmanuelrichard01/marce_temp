'use client'
import React, { useState, useEffect } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/components/Products';  // Importing the Product type

const productpage = () => {
    const breadcrumbPaths = [
        { name: "home", path: "/" },
        { name: "products", path: "/productpage" },
    ];

    // Generate a larger list of products
    const products: Product[] = [
        { id: 1, name: 'Boss Perfume', price: '$100.00', imageSrc: 'images/perfume.png' },
        { id: 2, name: 'Apple Watch', price: '$800.00', imageSrc: 'images/watch2.png' },
        { id: 3, name: 'T-shirt', price: '$49.00', imageSrc: 'images/shirt1.png' },
        { id: 4, name: 'MacBook', price: '$1400.00', imageSrc: 'images/macbook.png' },
        { id: 5, name: 'Nike Sport', price: '$50.00', imageSrc: 'images/shoe1.png' },
        { id: 6, name: 'Apple Watch Pro', price: '$900.00', imageSrc: 'images/watch1.png' },
        { id: 7, name: 'White T-shirt', price: '$89.00', imageSrc: 'images/shirt2.png' },
        { id: 8, name: 'MacBook', price: '$1400.00', imageSrc: 'images/macbook.png' },
        { id: 9, name: 'Apple Watch', price: '$800.00', imageSrc: 'images/watch2.png' },
        { id: 10, name: 'Sneaker', price: '$80.00', imageSrc: 'images/shoe2.png' },
    ];

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(20);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setProductsPerPage(5);
            } else {
                setProductsPerPage(20);
            }
        };

        // Set the initial value
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Calculate the products for the current page
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Handle page change
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between flex-col">
                    <h2 className="text-xl lg:text-3xl font-bold text-gray-900 mb-8">Products Categories</h2>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-lg dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore velit quam maxime ab incidunt sunt ad necessitatibus asperiores. Nesciunt, eos?
                    </p>
                    <Breadcrumb paths={breadcrumbPaths} />
                </div>
                <div className="grid place-items-center justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {currentProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    <Pagination
                        productsPerPage={productsPerPage}
                        totalProducts={products.length}
                        paginate={paginate}
                        currentPage={currentPage}
                    />
                </div>
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
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="flex justify-center space-x-1">
                {pageNumbers.map((number) => (
                    <li key={number}>
                        <button
                            onClick={() => paginate(number)}
                            className={`px-3 py-1 border rounded ${currentPage === number ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
                                }`}
                        >
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default productpage;
