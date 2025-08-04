import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Truck, CreditCard, RotateCcw, Headphones } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import Testimonials from '../components/Testimonial';

const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 6);
  const menProducts = products.filter(p => p.category === 'men').slice(0, 2);
  const womenProducts = products.filter(p => p.category === 'women').slice(0, 2);
  const kidsProducts = products.filter(p => p.category === 'kids').slice(0, 2);

  const features = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'Free shipping on orders above ₹999'
    },
    {
      icon: CreditCard,
      title: 'Flexible Payment',
      description: 'Multiple payment options available'
    },
    {
      icon: RotateCcw,
      title: '14 Day Returns',
      description: 'Easy returns within 14 days'
    },
    {
      icon: Headphones,
      title: 'Premium Support',
      description: '24/7 customer support'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 py-12">
            {/* Men's Section */}
            <div className="relative group cursor-pointer overflow-hidden rounded-2xl">
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Shop Men"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
              <div className="absolute bottom-8 left-8 right-8">
                <Link
                  to="/men"
                  className="block bg-white text-gray-900 text-center py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Shop Men
                </Link>
              </div>
            </div>

            {/* Women's Section */}
            <div className="relative group cursor-pointer overflow-hidden rounded-2xl">
              <div className="aspect-[4/5] bg-gradient-to-br from-orange-100 to-orange-200">
                <img
                  src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Shop Women"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
              <div className="absolute bottom-8 left-8 right-8">
                <Link
                  to="/women"
                  className="block bg-white text-gray-900 text-center py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Shop Women
                </Link>
              </div>
            </div>

            {/* Kids Section */}
            <div className="relative group cursor-pointer overflow-hidden rounded-2xl">
              <div className="aspect-[4/5] bg-gradient-to-br from-green-100 to-green-200">
                <img
                  src="https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Shop Kids"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
              <div className="absolute bottom-8 left-8 right-8">
                <Link
                  to="/kids"
                  className="block bg-white text-gray-900 text-center py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Shop Kids
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200">
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200">
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4 group-hover:bg-pink-200 transition-colors duration-200">
                  <feature.icon className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of trending fashion items for the whole family
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition-colors duration-200"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Category Showcase */}
      <section className="pt-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-gray-600">Find the perfect style for everyone in your family</p>
          </div>

          <div className="space-y-16">
            {/* Men's Products */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Men's Collection</h3>
                <Link
                  to="/men"
                  className="text-pink-600 hover:text-pink-700 font-medium flex items-center space-x-1"
                >
                  <span>View All</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 gap-8">
                {menProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>

            {/* Women's Products */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Women's Collection</h3>
                <Link
                  to="/women"
                  className="text-pink-600 hover:text-pink-700 font-medium flex items-center space-x-1"
                >
                  <span>View All</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 gap-8">
                {womenProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>

            {/* Kids Products */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Kids Collection</h3>
                <Link
                  to="/kids"
                  className="text-pink-600 hover:text-pink-700 font-medium flex items-center space-x-1"
                >
                  <span>View All</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 gap-8">
                {kidsProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Testimonials />
      </section>
    </div>
  );
};

export default Home;