import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Search,
  User,
  ShoppingCart,
  Heart,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navigation = [
    {
      name: "Men",
      href: "/men",
      dropdown: [
        "T-Shirts",
        "Shirts",
        "Jeans",
        "Jackets",
        "Shoes",
        "Accessories",
      ],
    },
    {
      name: "Women",
      href: "/women",
      dropdown: ["Kurtis", "Dresses", "Tops", "Sarees", "Shoes", "Accessories"],
    },
    {
      name: "Kids",
      href: "/kids",
      dropdown: ["Boys", "Girls", "Infants", "Shoes", "Accessories"],
    },
    { name: "About us", href: "/about" },
    { name: "Brand", href: "/brands" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const iconGroup = (
    <>
      <button className="p-2 text-gray-600 hover:text-pink-600 transition-colors">
        <Search className="w-5 h-5" />
      </button>
      <button className="p-2 text-gray-600 hover:text-pink-600 transition-colors">
        <User className="w-5 h-5" />
      </button>
      <button className="p-2 text-gray-600 hover:text-pink-600 transition-colors relative">
        <Heart className="w-5 h-5" />
        <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          0
        </span>
      </button>
      <button className="p-2 text-gray-600 hover:text-pink-600 transition-colors relative">
        <ShoppingCart className="w-5 h-5" />
        <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          0
        </span>
      </button>
    </>
  );

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="Affinity Logo"
                className="w-32 h-32 object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? "text-pink-600 border-b-2 border-pink-600"
                        : "text-gray-700 hover:text-pink-600"
                    }`}
                    onMouseEnter={() =>
                      item.dropdown && setActiveDropdown(item.name)
                    }
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div
                      className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem}
                          to={`${item.href}/${subItem
                            .toLowerCase()
                            .replace(" ", "-")}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors"
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Top-right Icons: Desktop + Menu Button */}
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex">{iconGroup}</div>

              {/* Menu Button (Always Visible on Mobile) */}
              <button
                className="lg:hidden p-2 text-gray-600 hover:text-pink-600 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Dropdown */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4">
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? "text-pink-600 bg-pink-50"
                        : "text-gray-700 hover:text-pink-600 hover:bg-pink-50"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Bottom Icons on Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 px-8 py-2 flex justify-around items-center">
        {iconGroup}
      </div>
    </>
  );
};

export default Header;
