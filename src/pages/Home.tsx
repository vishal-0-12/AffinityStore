import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import FeaturedProductsSection from '../components/FeaturedProductsSection';
import CategoryShowcase from '../components/CategoryShowcase';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <FeaturesSection />
      <FeaturedProductsSection />
      <CategoryShowcase />
    </div>
  );
};

export default Home;
