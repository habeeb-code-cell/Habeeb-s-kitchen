import React from 'react';
import { Star, Clock, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-green-800 to-yellow-700">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 bg-blend-overlay"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/6210953/pexels-photo-6210953.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <div className="inline-flex items-center space-x-1 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-current" />
            <span>Premium Nigerian Cuisine</span>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Welcome to
          <span className="block text-yellow-400">Habeeb Kitchen</span>
        </h1>
        
        <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Experience the finest Nigerian cuisine with a modern twist. From traditional jollof rice to international fusion dishes, we bring you authentic flavors with premium quality ingredients.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Order Now
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
            View Menu
          </button>
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
            <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Fast Delivery</h3>
            <p className="text-sm text-gray-300">Get your order delivered in 30-45 minutes across Lagos, Abuja, and more</p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
            <Star className="w-8 h-8 text-yellow-400 mx-auto mb-3 fill-current" />
            <h3 className="font-semibold mb-2">Premium Quality</h3>
            <p className="text-sm text-gray-300">Fresh ingredients and authentic recipes crafted by expert Nigerian chefs</p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
            <MapPin className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Multiple Locations</h3>
            <p className="text-sm text-gray-300">Serving Lagos, Abuja, Port Harcourt, Kano and expanding across Nigeria</p>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;