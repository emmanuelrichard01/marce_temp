import React from 'react';
import { FaHeart, FaTags, FaTruck, FaHandsHelping } from 'react-icons/fa';

const Benefits: React.FC = () => {
    const benefits = [
        { icon: <FaHeart />, title: 'Support Local Businesses', description: 'Help local entrepreneurs by buying their products.' },
        { icon: <FaTags />, title: 'Unique Product Finds', description: 'Discover unique items that you won’t find anywhere else.' },
        { icon: <FaTruck />, title: 'Fast Shipping', description: 'Enjoy quick and reliable shipping on all orders.' },
        { icon: <FaHandsHelping />, title: 'Community Engagement', description: 'Be part of a supportive community of buyers and sellers.' },
    ];

    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-gray-100 p-6 rounded-lg text-center">
                            <div className="text-gray-800 text-4xl mb-4">{benefit.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                            <p className="text-gray-600">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
