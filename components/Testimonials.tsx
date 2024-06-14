// components/Testimonials.tsx
import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

const testimonials = [
    {
        id: 1,
        content: 'This is an amazing platform!',
        author: 'Jane Doe',
        role: 'Customer',
    },
    // More testimonials...
];

const Testimonials: React.FC = () => {
    return (
        <section className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8">What Our Customers Say</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg">
                            <ChatBubbleLeftIcon className="h-12 w-12 text-gray-500 mb-4" />
                            <p className="text-gray-600 mb-4">{testimonial.content}</p>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">{testimonial.author}</h3>
                                <p className="text-gray-500">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
