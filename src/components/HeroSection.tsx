import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const carouselImages = ['https://thumbs.dreamstime.com/b/family-shopping-happy-people-child-carrying-bags-walking-modern-mall-high-resolution-family-shopping-happy-people-mall-116208869.jpg', 
  
  'https://thumbs.dreamstime.com/b/confident-handsome-man-black-suit-sitting-chair-dark-backround-confident-handsome-man-black-suit-sitting-163081675.jpg',
  
  'https://st4.depositphotos.com/20142974/28461/i/1600/depositphotos_284614480-stock-photo-cute-stylish-boy-sitting-on.jpg',
'https://images.pexels.com/photos/19556869/pexels-photo-19556869/free-photo-of-young-woman-wearing-traditional-clothing-sitting-on-the-floor-and-posing.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'];

const categories = [
  {
    title: 'Women',
    subtitle: 'Best Clothes For Women',
    image: '/women.jpg',
    link: '/women',
  },
  {
    title: 'Men',
    subtitle: 'Best Clothes For Men',
    image: '/men.jpg',
    link: '/men',
  },
  {
    title: 'Kids',
    subtitle: 'Best Clothes For Kids',
    image: '/kids.jpg',
    link: '/kids',
  },
  {
    title: 'Accessories',
    subtitle: 'Best Trend Accessories',
    image: '/women.jpg',
    link: '/accessories',
  },
];

const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col md:flex-row h-[90vh] p-4 md:p-8 gap-4">
      {/* Left Half - Carousel Promo */}
      <div className="w-full md:w-1/2 h-[400px] md:h-full relative rounded-xl shadow-lg overflow-hidden group">
        {/* Carousel Images */}
        {carouselImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            } `}
            style={{ backgroundImage: `url(${img})`, zIndex: 0 }}
          />
        ))}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition duration-500 rounded-xl z-10" />

        {/* Text content */}
        <div className="relative z-20 text-center text-white px-6 flex flex-col items-center justify-center h-full transition duration-500 group-hover:scale-[1.02]">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide transition-all duration-500 group-hover:tracking-widest">
            Affinity Store
          </h1>
          <p className="text-lg italic mb-6">A Complete Family Store</p>
          <Link
            to="/shop"
            className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Purchase Now!
          </Link>
        </div>
      </div>

      {/* Right Half - Responsive 2x2 Grid */}
<div className="w-full md:w-1/2 grid grid-cols-2 grid-rows-2 gap-4 sm:grid-cols-2 sm:grid-rows-2 xs:grid-cols-1 xs:grid-rows-4">
  {categories.map(({ title, subtitle, image, link }, idx) => (
    <Link
      key={idx}
      to={link}
      className="relative bg-cover bg-center rounded-xl overflow-hidden shadow-md group h-40 sm:h-48 md:h-auto"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
        <h2 className="text-2xl font-bold mb-1">{title}</h2>
        <p className="italic text-sm">{subtitle}</p>
      </div>
    </Link>
  ))}
</div>
    </section>
  );
};

export default HeroSection;
