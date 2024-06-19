// components/CategorySection.tsx
import { AcademicCapIcon, BriefcaseIcon, ShoppingCartIcon, TruckIcon } from '@heroicons/react/24/outline';

const categories = [
    { name: 'Education', icon: AcademicCapIcon },
    { name: 'Jobs', icon: BriefcaseIcon },
    { name: 'Shopping', icon: ShoppingCartIcon },
    { name: 'Transport', icon: TruckIcon }
];

const PopularCategories: React.FC = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Product Categories</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {categories.map((category) => (
                        <div key={category.name} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
                            <category.icon className="h-12 w-12 text-gray-500 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularCategories;
