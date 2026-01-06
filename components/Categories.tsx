
import React from 'react';
import { Plane, ShoppingBag, Fuel, Utensils, Diamond, Briefcase } from 'lucide-react';
import { UserCategory } from '../types';

interface CategoriesProps {
  onSelectCategory: (category: UserCategory, description: string) => void;
}

const categories = [
  {
    id: UserCategory.TRAVEL,
    icon: <Plane className="w-6 h-6" />,
    color: "from-sky-400 to-blue-500",
    desc: "Rewards on flights & hotels"
  },
  {
    id: UserCategory.SHOPPER,
    icon: <ShoppingBag className="w-6 h-6" />,
    color: "from-pink-400 to-rose-500",
    desc: "Cashback on e-commerce"
  },
  {
    id: UserCategory.FUEL,
    icon: <Fuel className="w-6 h-6" />,
    color: "from-orange-400 to-red-500",
    desc: "Surcharge waivers & points"
  },
  {
    id: UserCategory.GROCERY,
    icon: <Utensils className="w-6 h-6" />,
    color: "from-green-400 to-emerald-500",
    desc: "Daily essentials savings"
  },
  {
    id: UserCategory.PREMIUM,
    icon: <Diamond className="w-6 h-6" />,
    color: "from-purple-400 to-violet-500",
    desc: "Luxury lifestyle perks"
  },
  {
    id: UserCategory.BUSINESS,
    icon: <Briefcase className="w-6 h-6" />,
    color: "from-slate-400 to-gray-500",
    desc: "Corporate expense management"
  }
];

const Categories: React.FC<CategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
           <h2 className="text-3xl font-heading font-bold text-white mb-2">
            Who Are You?
          </h2>
          <p className="text-gray-400">
            Our AI identifies your persona to find the best match. Click a profile to start.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className="group relative cursor-pointer"
              onClick={() => onSelectCategory(cat.id, cat.desc)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-20 rounded-xl transition-all duration-300 blur-md`} />
              <div className="relative glass-card p-6 rounded-xl border border-white/5 hover:border-white/20 transition-all text-center h-full flex flex-col items-center justify-center hover:-translate-y-1">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${cat.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                  {cat.icon}
                </div>
                <h3 className="text-sm font-bold text-white mb-1">{cat.id}</h3>
                <p className="text-xs text-gray-500">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
