// components/FeaturedProducts.tsx
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

const products = [
    { id: 1, name: 'Product 1', price: '$99.00', imageSrc: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: '$199.00', imageSrc: 'https://via.placeholder.com/150' },
    // More products...
];

const FeaturedProducts: React.FC = () => {
    return (
        <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Featured Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="flex flex-col bg-gray-100 p-6 rounded-lg shadow-lg">
                            <img src={product.imageSrc} alt={product.name} className="h-40 w-full object-cover mb-4" />
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
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
