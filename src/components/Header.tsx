import React, { useState } from 'react';
import { Menu, X, ShoppingCart, User, MapPin, Phone } from 'lucide-react';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">HK</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Habeeb Kitchen</h1>
              <p className="text-xs text-gray-600">Premium Nigerian Cuisine</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors">Home</a>
            <a href="#menu" className="text-gray-700 hover:text-green-600 transition-colors">Menu</a>
            <a href="#reservations" className="text-gray-700 hover:text-green-600 transition-colors">Reservations</a>
            <a href="#locations" className="text-gray-700 hover:text-green-600 transition-colors">Locations</a>
            <a href="#reviews" className="text-gray-700 hover:text-green-600 transition-colors">Reviews</a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors">
              <MapPin size={18} />
              <span className="text-sm">Lagos</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors">
              <Phone size={18} />
              <span className="text-sm">+234 801 234 5678</span>
            </button>
            <button
              onClick={onCartClick}
              className="relative bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
            >
              <ShoppingCart size={18} />
              <span>Cart</span>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
            <button className="text-gray-700 hover:text-green-600 transition-colors">
              <User size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-green-600 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="py-4 space-y-2">
              <a href="#home" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Home</a>
              <a href="#menu" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Menu</a>
              <a href="#reservations" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Reservations</a>
              <a href="#locations" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Locations</a>
              <a href="#reviews" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Reviews</a>
              <a href="#contact" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">Contact</a>
              <div className="px-4 py-2 space-y-2">
                <button
                  onClick={onCartClick}
                  className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <ShoppingCart size={18} />
                  <span>Cart ({cartItemCount})</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;