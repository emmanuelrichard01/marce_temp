import React from 'react';
import Link from 'next/link';

const CallToAction: React.FC = () => {
    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Join the Marce Community</h2>
                <p className="text-gray-600 mb-8">Sign up today and start buying or selling amazing products!</p>
                <Link href="/sign-up">
                    <p className="inline-block bg-gray-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-900 transition duration-300">
                        Sign Up Now
                    </p>
                </Link>
            </div>
        </section>
    );
};

export default CallToAction;