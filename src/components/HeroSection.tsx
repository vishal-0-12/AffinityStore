import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const heroSections = [
  {
    title: 'Elevate Your Style',
    subtitle: 'Discover the latest in men’s fashion',
    link: '/men',
    image: '/men.jpg',
    bgGradient: 'from-black/70 to-black/30',
  },
  {
    title: 'Bold & Beautiful',
    subtitle: 'Unleash confidence with women’s fashion',
    link: '/women',
    image: '/women.jpg',
    bgGradient: 'from-black/70 to-pink-900/30',
  },
  {
    title: 'For Little Trendsetters',
    subtitle: 'Fun and stylish outfits for kids',
    link: '/kids',
    image: '/kids.jpg',
    bgGradient: 'from-black/70 to-green-700/30',
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -1000 : 1000,
    opacity: 0,
  }),
};

const HeroSection: React.FC = () => {
  const [[currentSlide, direction], setCurrentSlide] = useState([0, 0]);

  const changeSlide = (dir: number) => {
    setCurrentSlide(([prev]) => {
      const next = (prev + dir + heroSections.length) % heroSections.length;
      return [next, dir];
    });
  };

  useEffect(() => {
    const interval = setInterval(() => changeSlide(1), 7000);
    return () => clearInterval(interval);
  }, []);

  const { title, subtitle, link, image, bgGradient } = heroSections[currentSlide];

  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.9, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${bgGradient}`} />

            <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-24 text-white">
              <motion.h2
                className="text-4xl md:text-6xl font-extrabold mb-2 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] tracking-tight leading-tight"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {title}
              </motion.h2>
              <motion.p
                className="text-lg md:text-2xl font-medium mb-6 drop-shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {subtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  to={link}
                  className="inline-block bg-white/90 text-gray-900 font-semibold px-7 py-3 rounded-lg shadow-md backdrop-blur-sm hover:bg-white transition-all duration-300"
                >
                  Explore Now
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={() => changeSlide(-1)}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2.5 rounded-full shadow-md z-10 backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={() => changeSlide(1)}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2.5 rounded-full shadow-md z-10 backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 w-full flex justify-center space-x-2 z-10">
        {heroSections.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
