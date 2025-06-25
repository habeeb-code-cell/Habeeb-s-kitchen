import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">HK</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">Habeeb Kitchen</h1>
                <p className="text-xs text-gray-400">Premium Nigerian Cuisine</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Experience the finest Nigerian cuisine with modern culinary excellence. 
              Serving authentic flavors across major Nigerian cities since 2020.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#menu" className="text-gray-300 hover:text-green-400 transition-colors">Our Menu</a></li>
              <li><a href="#reservations" className="text-gray-300 hover:text-green-400 transition-colors">Reservations</a></li>
              <li><a href="#locations" className="text-gray-300 hover:text-green-400 transition-colors">Locations</a></li>
              <li><a href="#reviews" className="text-gray-300 hover:text-green-400 transition-colors">Reviews</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Catering</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-green-400 mt-0.5" />
                <div>
                  <p className="text-gray-300">Customer Service</p>
                  <a href="tel:+2348012345678" className="text-white hover:text-green-400 transition-colors">
                    +234 801 234 5678
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-green-400 mt-0.5" />
                <div>
                  <p className="text-gray-300">Email</p>
                  <a href="mailto:info@habeebkitchen.ng" className="text-white hover:text-green-400 transition-colors">
                    info@habeebkitchen.ng
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-green-400 mt-0.5" />
                <div>
                  <p className="text-gray-300">Business Hours</p>
                  <p className="text-white">9:00 AM - 11:00 PM (WAT)</p>
                  <p className="text-sm text-gray-400">Monday - Sunday</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to receive special offers, new menu updates, and exclusive promotions.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition-colors"
              >
                Subscribe
              </button>
            </form>
            
            <div className="mt-6">
              <h4 className="font-medium text-gray-300 mb-2">Payment Methods</h4>
              <div className="flex space-x-2 text-sm text-gray-400">
                <span>Cards</span>
                <span>•</span>
                <span>Bank Transfer</span>
                <span>•</span>
                <span>USSD</span>
                <span>•</span>
                <span>Mobile Wallets</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Habeeb Kitchen. All rights reserved. | Nigeria's Premium Dining Experience
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;