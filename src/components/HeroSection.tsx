import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const heroSections = [
  {
    title: 'Shop Men',
    link: '/men',
    image:
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
    bgGradient: 'from-gray-100 to-gray-200',
  },
  {
    title: 'Shop Women',
    link: '/women',
    image:
      'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
    bgGradient: 'from-orange-100 to-orange-200',
  },
  {
    title: 'Shop Kids',
    link: '/kids',
    image:
      'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=800',
    bgGradient: 'from-green-100 to-green-200',
  },
];

const HeroSection: React.FC = () => (
  <section className="relative bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-3 gap-8 py-12">
        {heroSections.map(({ title, link, image, bgGradient }) => (
          <div key={title} className="relative group cursor-pointer overflow-hidden rounded-2xl">
            <div className={`aspect-[4/5] bg-gradient-to-br ${bgGradient}`}>
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
            <div className="absolute bottom-8 left-8 right-8">
              <Link
                to={link}
                className="block bg-white text-gray-900 text-center py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                {title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>

    <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200">
      <ChevronLeft className="w-6 h-6 text-gray-600" />
    </button>
    <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200">
      <ChevronRight className="w-6 h-6 text-gray-600" />
    </button>
  </section>
);

export default HeroSection;
