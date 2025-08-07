import React from 'react';
import { Link } from 'react-router-dom';

const seasonCategories = [
  {
    name: "Women's",
    count: 23,
    image: '/women.jpg',
    link: '/season/women',
  },
  {
    name: "Men's",
    count: 9,
    image: '/men.jpg',
    link: '/season/men',
  },
  {
    name: 'Jewelry',
    count: 31,
    image:
      'https://www.manyavar.com/dw/image/v2/BJZV_PRD/on/demandware.static/-/Library-Sites-ManyavarSharedLibrary/default/dw3253c2aa/Trending%20Designs%20in%20Gold%20for%20Your%20Wedding%20Jewellery%20Ranging%20from%20Mangtika%20to%20Payal_Blog%201.jpg',
    link: '/season/jewelry',
  },
  {
    name: 'Sneakers',
    count: 21,
    image: 'https://images.pexels.com/photos/3490360/pexels-photo-3490360.jpeg',
    link: '/season/sneakers',
  },
  {
    name: 'Bags',
    count: 5,
    image:
      'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/23414962/2023/7/29/95d5fce7-778a-41cd-a87e-ef19cd88e8a91690613635510-Berrylush-Women-Padded-Upto-16-Inch-PU-Laptop-Bag-9971690613-1.jpg',
    link: '/season/bags',
  },
  {
    name: 'Glasses',
    count: 14,
    image:
      'https://images.pexels.com/photos/5834310/pexels-photo-5834310.jpeg?cs=srgb&dl=pexels-carollemosph-5834310.jpg&fm=jpg',
    link: '/season/glasses',
  },
  {
    name: 'New Arrivals',
    count: 12,
    image:
      'https://www.extrapetite.com/wp-content/uploads/2020/03/ann-taylor-green-dress-5-scaled-e1583803378694.jpg',
    link: '/season/accessories',
  },
];

const SeasonCollection: React.FC = () => {
  return (
    <section className="bg-pink-400 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Season Collection
          </h2>
          <p className="mt-2 text-base text-gray-900">
            A curated mix of style and essentials for every vibe.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 auto-rows-[200px]">
          {seasonCategories.map((category, idx) => (
            <Link
              key={idx}
              to={category.link}
              className={`relative group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition duration-300 ${
                idx % 4 === 0 ? 'md:row-span-2' : ''
              }`}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-90 transition duration-300"></div>
              <div className="absolute bottom-3 left-3 text-white z-10">
                <h3 className="text-lg font-semibold drop-shadow-lg">{category.name}</h3>
                <p className="text-xs">{category.count} items</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeasonCollection;
