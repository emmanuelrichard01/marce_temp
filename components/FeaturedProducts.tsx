// components/FeaturedProducts.tsx
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

const products = [
    { id: 1, name: 'Product 1', price: '$100.00', imageSrc: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: '$80.00', imageSrc: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: '$49.00', imageSrc: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', price: '$12.00', imageSrc: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Product 5', price: '$20.00', imageSrc: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Product 6', price: '$55.00', imageSrc: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Product 7', price: '$150.00', imageSrc: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Product 8', price: '$65.00', imageSrc: 'https://via.placeholder.com/150' },
    // More products...
];

const FeaturedProducts: React.FC = () => {
    return (
        <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Featured Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="flex flex-col bg-white rounded-lg shadow-lg">
                            <img src={product.imageSrc} alt={product.name} className="h-40 w-full object-cover mb-4" />
                            <div className='p-6'>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                                <p className="text-gray-600 mb-4">{product.price}</p>
                                <div className="flex justify-between items-center mt-auto">
                                    <button className="flex items-center text-gray-500 hover:text-gray-700">
                                        <HeartIcon className="h-5 w-5 mr-1" />
                                        <span>Wishlist</span>
                                    </button>
                                    <button className="flex items-center text-gray-500 hover:text-gray-700">
                                        <ShoppingCartIcon className="h-5 w-5 mr-1" />
                                        <span>Add to Cart</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
