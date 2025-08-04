import { Product } from '../types';

export const products: Product[] = [
  // Men's Products
  {
    id: '1',
    name: 'PUMA Classic Logo T-Shirt',
    price: 1299,
    originalPrice: 1599,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'men',
    brand: 'PUMA',
    rating: 4.5,
    reviews: 128,
    colors: ['Olive', 'Black', 'White', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Classic PUMA logo t-shirt made from premium cotton blend for ultimate comfort.',
    features: ['100% Cotton', 'Machine Washable', 'Regular Fit', 'Iconic Logo']
  },
  {
    id: '2',
    name: 'Nike Dri-FIT Training Shirt',
    price: 1899,
    image: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'men',
    brand: 'Nike',
    rating: 4.7,
    reviews: 89,
    colors: ['Black', 'Grey', 'Blue'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'High-performance training shirt with moisture-wicking technology.',
    features: ['Dri-FIT Technology', 'Breathable Fabric', 'Athletic Fit', 'Quick Dry']
  },
  {
    id: '3',
    name: 'Adidas Originals Hoodie',
    price: 3499,
    originalPrice: 4299,
    image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'men',
    brand: 'Adidas',
    rating: 4.6,
    reviews: 156,
    colors: ['Black', 'Grey', 'Navy', 'Maroon'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Classic Adidas hoodie with iconic three stripes design.',
    features: ['Cotton Blend', 'Kangaroo Pocket', 'Adjustable Hood', 'Ribbed Cuffs']
  },

  // Women's Products
  {
    id: '4',
    name: 'Traditional Embroidered Kurti',
    price: 2499,
    originalPrice: 3199,
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'women',
    brand: 'Ethnic Wear',
    rating: 4.8,
    reviews: 203,
    colors: ['Red', 'Blue', 'Green', 'Pink'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Beautiful traditional kurti with intricate embroidery work.',
    features: ['Hand Embroidered', 'Pure Cotton', 'Traditional Design', 'Comfortable Fit']
  },
  {
    id: '5',
    name: 'Designer Anarkali Dress',
    price: 4999,
    originalPrice: 6499,
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'women',
    brand: 'Designer Collection',
    rating: 4.9,
    reviews: 87,
    colors: ['Maroon', 'Navy', 'Emerald', 'Gold'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Elegant Anarkali dress perfect for special occasions.',
    features: ['Premium Fabric', 'Flowy Design', 'Occasion Wear', 'Elegant Cut']
  },
  {
    id: '6',
    name: 'Casual Summer Top',
    price: 899,
    originalPrice: 1299,
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'women',
    brand: 'Summer Collection',
    rating: 4.4,
    reviews: 145,
    colors: ['White', 'Pink', 'Yellow', 'Mint'],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Light and breezy summer top for casual outings.',
    features: ['Lightweight', 'Breathable', 'Casual Fit', 'Easy Care']
  },

  // Kids Products
  {
    id: '7',
    name: 'Kids Graphic T-Shirt',
    price: 699,
    originalPrice: 999,
    image: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'kids',
    brand: 'Kids Fashion',
    rating: 4.6,
    reviews: 92,
    colors: ['Green', 'Blue', 'Red', 'Yellow'],
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y'],
    description: 'Fun graphic t-shirt perfect for active kids.',
    features: ['Soft Cotton', 'Fun Graphics', 'Durable Print', 'Comfortable Fit']
  },
  {
    id: '8',
    name: 'Kids Sports Jacket',
    price: 1599,
    originalPrice: 2199,
    image: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'kids',
    brand: 'Active Kids',
    rating: 4.5,
    reviews: 67,
    colors: ['Navy', 'Red', 'Black', 'Grey'],
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y'],
    description: 'Sporty jacket for active kids who love to play.',
    features: ['Water Resistant', 'Zip Closure', 'Side Pockets', 'Lightweight']
  }
];