import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import Testimonials from './Testimonial';

const CategoryShowcase: React.FC = () => {
  const menProducts = products.filter((p) => p.category === 'men').slice(0, 2);
  const womenProducts = products.filter((p) => p.category === 'women').slice(0, 2);
  const kidsProducts = products.filter((p) => p.category === 'kids').slice(0, 2);

  const categories = [
    { title: "Men's Collection", link: '/men', products: menProducts },
    { title: "Women's Collection", link: '/women', products: womenProducts },
    { title: "Kids Collection", link: '/kids', products: kidsProducts },
  ];

  return (
    <section className="pt-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <img
    src="/coupon2.avif" 
    alt="Category Banner"
    className="mb-8 w-full h-auto" 
  />
          <h2 className="text-4xl font-bold text-gray-900 mb-4 uppercase">SHOP BY CATEGOरY</h2>
          <p className="text-gray-600">Find the perfect style for everyone in your family</p>
        </div>

        <div className="space-y-16">
          {categories.map((cat) => (
            <div key={cat.title}>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-900">{cat.title}</h3>
                <Link
                  to={cat.link}
                  className="text-pink-600 hover:text-pink-700 font-medium flex items-center space-x-1"
                >
                  <span>View All</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 gap-8">
                {cat.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Testimonials />
    </section>
  );
};

export default CategoryShowcase;
