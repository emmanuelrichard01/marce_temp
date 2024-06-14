import React from 'react';
import { FaRegLightbulb, FaRegClipboard, FaRegHandshake, FaRegThumbsUp } from 'react-icons/fa';

const HowItWorks: React.FC = () => {
    const steps = [
        { icon: <FaRegLightbulb />, title: 'Sign Up', description: 'Create an account to get started.' },
        { icon: <FaRegClipboard />, title: 'List Products', description: 'List your products for sale easily.' },
        { icon: <FaRegHandshake />, title: 'Connect', description: 'Connect with buyers and sellers.' },
        { icon: <FaRegThumbsUp />, title: 'Enjoy', description: 'Enjoy seamless transactions and community support.' },
    ];

    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="text-center">
                            <div className="text-gray-800 text-4xl mb-4">{step.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
