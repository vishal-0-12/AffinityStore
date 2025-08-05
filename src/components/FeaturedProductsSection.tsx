import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const FeaturedProductsSection: React.FC = () => {
  const featuredProducts = products.slice(0, 6);
  const [heroProduct, ...otherProducts] = featuredProducts;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <img
    src="/sale_coupon.avif" 
    alt="Category Banner"
    className="mb-8 w-full h-auto" 
  />
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Handpicked Just For You
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Explore our fresh arrivals curated for trendsetters and fashion lovers.
          </p>
        </div>

        {/* Product Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Featured Hero Product (larger) */}
          <div className="md:col-span-2 row-span-2">
            <div className="relative group h-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
              <img
                src={heroProduct.image}
                alt={heroProduct.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500"></div>
              <div className="absolute bottom-6 left-6 z-10 text-white">
                <h3 className="text-2xl font-bold mb-1">{heroProduct.name}</h3>
                <p className="text-sm mb-2">{heroProduct.category}</p>
                <Link
                  to={`/product/${heroProduct.id}`}
                  className="inline-block mt-2 px-5 py-2 bg-white text-black font-semibold rounded hover:bg-gray-100 transition"
                >
                  View Product
                </Link>
              </div>
            </div>
          </div>

          {/* Smaller Product Cards */}
          {otherProducts.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8">
          <Link
            to="/products"
            className="inline-flex items-center px-10 py-4 bg-gray-900 text-white text-lg font-semibold rounded-full hover:bg-gray-700 transition"
          >
            Browse Full Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
