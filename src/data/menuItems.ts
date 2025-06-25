import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  // Nigerian Traditional Cuisine
  {
    id: 'n1',
    name: 'Premium Jollof Rice',
    description: 'Our signature jollof rice cooked with premium long-grain rice, tender beef, and aromatic spices',
    price: 3500,
    image: 'https://images.pexels.com/photos/6210953/pexels-photo-6210953.jpeg',
    category: 'nigerian',
    spiceLevel: 'medium',
    allergens: ['gluten'],
    dietary: [],
    customizable: true,
    popular: true
  },
  {
    id: 'n2',
    name: 'Pounded Yam & Egusi Soup',
    description: 'Freshly pounded yam served with rich egusi soup, assorted meat, and vegetables',
    price: 4200,
    image: 'https://images.pexels.com/photos/8953575/pexels-photo-8953575.jpeg',
    category: 'nigerian',
    spiceLevel: 'medium',
    allergens: [],
    dietary: ['gluten-free'],
    customizable: true,
    popular: true
  },
  {
    id: 'n3',
    name: 'Pepper Soup Deluxe',
    description: 'Traditional pepper soup with catfish, goat meat, and aromatic spices',
    price: 3800,
    image: 'https://images.pexels.com/photos/5737280/pexels-photo-5737280.jpeg',
    category: 'nigerian',
    spiceLevel: 'hot',
    allergens: ['fish'],
    dietary: ['gluten-free'],
    customizable: true,
    popular: false
  },
  {
    id: 'n4',
    name: 'Premium Suya Platter',
    description: 'Tender beef suya with yaji spice, served with fresh vegetables and bread',
    price: 2800,
    image: 'https://images.pexels.com/photos/7104975/pexels-photo-7104975.jpeg',
    category: 'nigerian',
    spiceLevel: 'hot',
    allergens: ['gluten'],
    dietary: [],
    customizable: true,
    popular: true
  },
  {
    id: 'n5',
    name: 'Ofada Rice & Ayamase',
    description: 'Local ofada rice with spicy green pepper stew and assorted meat',
    price: 3200,
    image: 'https://images.pexels.com/photos/6210949/pexels-photo-6210949.jpeg',
    category: 'nigerian',
    spiceLevel: 'extra-hot',
    allergens: [],
    dietary: ['gluten-free'],
    customizable: true,
    popular: false
  },
  {
    id: 'n6',
    name: 'Amala & Ewedu',
    description: 'Smooth amala served with ewedu soup and buka stew',
    price: 2900,
    image: 'https://images.pexels.com/photos/8953578/pexels-photo-8953578.jpeg',
    category: 'nigerian',
    spiceLevel: 'medium',
    allergens: [],
    dietary: ['vegan', 'gluten-free'],
    customizable: true,
    popular: false
  },

  // International Dishes
  {
    id: 'i1',
    name: 'Grilled Salmon Fillet',
    description: 'Atlantic salmon with Nigerian herbs, served with jollof rice and vegetables',
    price: 5500,
    image: 'https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg',
    category: 'international',
    spiceLevel: 'mild',
    allergens: ['fish'],
    dietary: ['gluten-free'],
    customizable: true,
    popular: true
  },
  {
    id: 'i2',
    name: 'Beef Stroganoff Nigerian Style',
    description: 'Tender beef in creamy sauce with Nigerian spices, served with rice',
    price: 4800,
    image: 'https://images.pexels.com/photos/8697442/pexels-photo-8697442.jpeg',
    category: 'international',
    spiceLevel: 'mild',
    allergens: ['dairy', 'gluten'],
    dietary: [],
    customizable: true,
    popular: false
  },
  {
    id: 'i3',
    name: 'Mediterranean Chicken',
    description: 'Herb-marinated chicken with Nigerian pepper blend and couscous',
    price: 4200,
    image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg',
    category: 'international',
    spiceLevel: 'medium',
    allergens: ['gluten'],
    dietary: [],
    customizable: true,
    popular: true
  },
  {
    id: 'i4',
    name: 'Asian Fusion Stir Fry',
    description: 'Wok-fried vegetables and chicken with Nigerian-Asian fusion sauce',
    price: 3800,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    category: 'international',
    spiceLevel: 'medium',
    allergens: ['soy'],
    dietary: [],
    customizable: true,
    popular: false
  },
  {
    id: 'i5',
    name: 'Continental Breakfast',
    description: 'International breakfast with Nigerian plantain and local honey',
    price: 2500,
    image: 'https://images.pexels.com/photos/101533/pexels-photo-101533.jpeg',
    category: 'international',
    spiceLevel: 'mild',
    allergens: ['dairy', 'gluten'],
    dietary: [],
    customizable: true,
    popular: true
  },
  {
    id: 'i6',
    name: 'Italian Pasta Africana',
    description: 'Creamy pasta with Nigerian palm nut sauce and seafood',
    price: 4500,
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
    category: 'international',
    spiceLevel: 'medium',
    allergens: ['gluten', 'dairy', 'shellfish'],
    dietary: [],
    customizable: true,
    popular: false
  }
];