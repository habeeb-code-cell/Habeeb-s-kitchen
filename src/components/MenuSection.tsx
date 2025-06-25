import React, { useState } from 'react';
import { Filter, Star, Flame, Leaf, Plus } from 'lucide-react';
import { MenuItem } from '../types';
import { formatPrice } from '../utils/formatters';

interface MenuSectionProps {
  menuItems: MenuItem[];
  onAddToCart: (item: MenuItem) => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({ menuItems, onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'nigerian' | 'international'>('all');
  const [spiceFilter, setSpiceFilter] = useState<string>('all');
  const [showPopularOnly, setShowPopularOnly] = useState(false);

  const filteredItems = menuItems.filter(item => {
    if (activeCategory !== 'all' && item.category !== activeCategory) return false;
    if (spiceFilter !== 'all' && item.spiceLevel !== spiceFilter) return false;
    if (showPopularOnly && !item.popular) return false;
    return true;
  });

  const getSpiceIcon = (level: string) => {
    const flames = {
      'mild': 1,
      'medium': 2,
      'hot': 3,
      'extra-hot': 4
    };
    return Array.from({ length: flames[level as keyof typeof flames] || 1 }, (_, i) => (
      <Flame key={i} className="w-4 h-4 text-red-500 fill-current" />
    ));
  };

  const getDietaryBadges = (dietary: string[]) => {
    const badgeColors = {
      'vegetarian': 'bg-green-100 text-green-800',
      'vegan': 'bg-green-200 text-green-900',
      'gluten-free': 'bg-blue-100 text-blue-800',
      'dairy-free': 'bg-purple-100 text-purple-800'
    };

    return dietary.map(diet => (
      <span
        key={diet}
        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${badgeColors[diet as keyof typeof badgeColors]}`}
      >
        <Leaf className="w-3 h-3 mr-1" />
        {diet}
      </span>
    ));
  };

  return (
    <section id="menu" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Premium Menu</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of traditional Nigerian dishes and international cuisine
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-700">Filters:</span>
            </div>

            {/* Category Filter */}
            <div className="flex space-x-2">
              {['all', 'nigerian', 'international'].map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category as any)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' ? 'All Dishes' : 
                   category === 'nigerian' ? 'Nigerian' : 'International'}
                </button>
              ))}
            </div>

            {/* Spice Level Filter */}
            <select
              value={spiceFilter}
              onChange={(e) => setSpiceFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="all">All Spice Levels</option>
              <option value="mild">Mild</option>
              <option value="medium">Medium</option>
              <option value="hot">Hot</option>
              <option value="extra-hot">Extra Hot</option>
            </select>

            {/* Popular Filter */}
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showPopularOnly}
                onChange={(e) => setShowPopularOnly(e.target.checked)}
                className="rounded border-gray-300 text-green-600 focus:ring-green-500"
              />
              <span className="text-gray-700">Popular dishes only</span>
            </label>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                {item.popular && (
                  <div className="absolute top-4 left-4 bg-yellow-500 text-black px-2 py-1 rounded-full flex items-center space-x-1 text-xs font-medium">
                    <Star className="w-3 h-3 fill-current" />
                    <span>Popular</span>
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    {getSpiceIcon(item.spiceLevel)}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                  <span className="text-lg font-bold text-green-600">{formatPrice(item.price)}</span>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.description}</p>

                {/* Dietary Badges */}
                {item.dietary.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {getDietaryBadges(item.dietary)}
                  </div>
                )}

                {/* Allergens */}
                {item.allergens.length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs text-gray-500">
                      <strong>Contains:</strong> {item.allergens.join(', ')}
                    </p>
                  </div>
                )}

                <button
                  onClick={() => onAddToCart(item)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Plus className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No dishes match your current filters</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;