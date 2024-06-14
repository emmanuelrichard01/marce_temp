import React from 'react';
import { FaShoppingCart, FaShieldAlt, FaUsers, FaRegMoneyBillAlt } from 'react-icons/fa';

const KeyFeatures: React.FC = () => {
    const features = [
        { icon: <FaShoppingCart />, title: 'Easy Shopping', description: 'Seamless shopping experience with a user-friendly interface.' },
        { icon: <FaShieldAlt />, title: 'Secure Transactions', description: 'Your transactions are safe and secure with our advanced security features.' },
        { icon: <FaUsers />, title: 'Community Support', description: 'Join a community of buyers and sellers, and get support when you need it.' },
        { icon: <FaRegMoneyBillAlt />, title: 'Affordable Prices', description: 'Find the best deals and affordable prices on a wide range of products.' },
    ];

    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <div className="text-gray-800 text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyFeatures;
