import React from 'react';
import { FaShieldAlt, FaLock, FaUserShield, FaShieldVirus } from 'react-icons/fa';

const SecurityAndTrust: React.FC = () => {
    const features = [
        { icon: <FaShieldAlt />, title: 'Advanced Security', description: 'Our platform uses advanced security measures to protect your data.' },
        { icon: <FaLock />, title: 'Data Privacy', description: 'We prioritize your privacy and ensure your data is safe and secure.' },
        { icon: <FaUserShield />, title: 'Verified Users', description: 'All users are verified to ensure a trustworthy community.' },
        { icon: <FaShieldVirus />, title: 'Fraud Protection', description: 'We have robust systems in place to detect and prevent fraud.' },
    ];

    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Security and Trust</h2>
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

export default SecurityAndTrust;
