import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Discount Badge */}
      {discountPercentage > 0 && (
        <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold z-10">
          -{discountPercentage}%
        </div>
      )}

      {/* Wishlist Button */}
      <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-pink-50 z-10">
        <Heart className="w-4 h-4 text-gray-600 hover:text-pink-600" />
      </button>

      {/* Product Image */}
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="mb-2">
          <p className="text-xs text-gray-500 uppercase tracking-wide">{product.brand}</p>
          <Link 
            to={`/product/${product.id}`}
            className="text-sm font-medium text-gray-900 hover:text-pink-600 transition-colors line-clamp-2"
          >
            {product.name}
          </Link>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
          )}
        </div>

        {/* Colors */}
        <div className="flex items-center space-x-1 mb-3">
          {product.colors.slice(0, 4).map((color, index) => (
            <div
              key={index}
              className="w-4 h-4 rounded-full border border-gray-300"
              style={{ 
                backgroundColor: color.toLowerCase() === 'white' ? '#ffffff' : 
                               color.toLowerCase() === 'black' ? '#000000' :
                               color.toLowerCase() === 'red' ? '#ef4444' :
                               color.toLowerCase() === 'blue' ? '#3b82f6' :
                               color.toLowerCase() === 'green' ? '#10b981' :
                               color.toLowerCase() === 'yellow' ? '#f59e0b' :
                               color.toLowerCase() === 'pink' ? '#ec4899' :
                               color.toLowerCase() === 'purple' ? '#8b5cf6' :
                               color.toLowerCase() === 'grey' || color.toLowerCase() === 'gray' ? '#6b7280' :
                               color.toLowerCase() === 'navy' ? '#1e40af' :
                               color.toLowerCase() === 'olive' ? '#84cc16' :
                               color.toLowerCase() === 'maroon' ? '#991b1b' :
                               color.toLowerCase() === 'mint' ? '#10b981' :
                               color.toLowerCase() === 'gold' ? '#f59e0b' :
                               color.toLowerCase() === 'emerald' ? '#059669' :
                               '#6b7280'
              }}
            />
          ))}
          {product.colors.length > 4 && (
            <span className="text-xs text-gray-500">+{product.colors.length - 4}</span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button className="w-full bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700 transition-colors duration-200 flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <ShoppingCart className="w-4 h-4" />
          <span className="text-sm font-medium">Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;