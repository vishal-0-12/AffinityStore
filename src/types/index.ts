export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'men' | 'women' | 'kids';
  brand: string;
  rating: number;
  reviews: number;
  colors: string[];
  sizes: string[];
  description: string;
  features: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}