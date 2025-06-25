export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'nigerian' | 'international';
  spiceLevel: 'mild' | 'medium' | 'hot' | 'extra-hot';
  allergens: string[];
  dietary: ('vegetarian' | 'vegan' | 'gluten-free' | 'dairy-free')[];
  customizable: boolean;
  popular: boolean;
}

export interface Order {
  id: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered';
  estimatedDelivery: string;
  customerInfo: CustomerInfo;
  paymentMethod: string;
  createdAt: string;
}

export interface OrderItem {
  menuItem: MenuItem;
  quantity: number;
  customizations: string[];
  subtotal: number;
}

export interface CustomerInfo {
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
}

export interface Reservation {
  id: string;
  customerName: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  location: string;
  specialRequests?: string;
}

export interface Review {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  hours: string;
  coordinates: { lat: number; lng: number };
}