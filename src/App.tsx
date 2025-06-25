import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import OrderTracking from './components/OrderTracking';
import PaymentModal from './components/PaymentModal';
import ReservationModal from './components/ReservationModal';
import ReviewsSection from './components/ReviewsSection';
import LocationsSection from './components/LocationsSection';
import Footer from './components/Footer';
import CartModal from './components/CartModal';

import { menuItems } from './data/menuItems';
import { locations } from './data/locations';
import { reviews } from './data/reviews';
import { MenuItem, Order, OrderItem } from './types';
import { generateOrderId } from './utils/formatters';

function App() {
  const [cartItems, setCartItems] = useState<OrderItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState<string | null>(null);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('habeeb-kitchen-cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }

    const savedOrders = localStorage.getItem('habeeb-kitchen-orders');
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  // Save cart to localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem('habeeb-kitchen-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Save orders to localStorage whenever orders changes
  useEffect(() => {
    localStorage.setItem('habeeb-kitchen-orders', JSON.stringify(orders));
  }, [orders]);

  const addToCart = (menuItem: MenuItem) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.menuItem.id === menuItem.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.menuItem.id === menuItem.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                subtotal: (item.quantity + 1) * menuItem.price
              }
            : item
        );
      } else {
        return [...prevItems, {
          menuItem,
          quantity: 1,
          customizations: [],
          subtotal: menuItem.price
        }];
      }
    });

    setShowSuccessMessage(`${menuItem.name} added to cart!`);
    setTimeout(() => setShowSuccessMessage(null), 3000);
  };

  const updateCartQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.menuItem.id === itemId
          ? {
              ...item,
              quantity,
              subtotal: quantity * item.menuItem.price
            }
          : item
      )
    );
  };

  const removeFromCart = (itemId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.menuItem.id !== itemId));
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsPaymentOpen(true);
  };

  const handlePaymentSuccess = (paymentMethod: string) => {
    const subtotal = cartItems.reduce((sum, item) => sum + item.subtotal, 0);
    const deliveryFee = subtotal > 5000 ? 0 : 500;
    const total = subtotal + deliveryFee;

    const newOrder: Order = {
      id: generateOrderId(),
      items: cartItems,
      total,
      status: 'pending',
      estimatedDelivery: '35',
      customerInfo: {
        name: 'Customer',
        phone: '+234 801 234 5678',
        email: 'customer@example.com',
        address: 'Lagos, Nigeria',
        city: 'Lagos'
      },
      paymentMethod,
      createdAt: new Date().toISOString()
    };

    setOrders(prevOrders => [newOrder, ...prevOrders]);
    setCartItems([]);
    setShowSuccessMessage('Order placed successfully! Check your order tracking below.');
    setTimeout(() => setShowSuccessMessage(null), 5000);

    // Simulate order status updates
    setTimeout(() => {
      setOrders(prevOrders =>
        prevOrders.map(order =>
          order.id === newOrder.id ? { ...order, status: 'confirmed' } : order
        )
      );
    }, 3000);

    setTimeout(() => {
      setOrders(prevOrders =>
        prevOrders.map(order =>
          order.id === newOrder.id ? { ...order, status: 'preparing', estimatedDelivery: '25' } : order
        )
      );
    }, 8000);
  };

  const handleReservationSuccess = () => {
    setShowSuccessMessage('Reservation confirmed! We will contact you shortly to confirm details.');
    setTimeout(() => setShowSuccessMessage(null), 5000);
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Success Message */}
      {showSuccessMessage && (
        <div className="fixed top-20 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 max-w-sm">
          <p className="text-sm">{showSuccessMessage}</p>
        </div>
      )}

      <Header cartItemCount={cartItemCount} onCartClick={() => setIsCartOpen(true)} />
      
      <main>
        <Hero />
        <MenuSection menuItems={menuItems} onAddToCart={addToCart} />
        <OrderTracking orders={orders} />
        <ReviewsSection reviews={reviews} />
        <LocationsSection locations={locations} />
        
        {/* Reservation CTA Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Dine With Us?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Experience premium Nigerian cuisine in our elegant dining rooms. 
              Make a reservation today and let us serve you an unforgettable meal.
            </p>
            <button
              onClick={() => setIsReservationOpen(true)}
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
            >
              Make a Reservation
            </button>
          </div>
        </section>
      </main>

      <Footer />

      {/* Modals */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeFromCart}
        onCheckout={handleCheckout}
      />

      <PaymentModal
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        total={cartItems.reduce((sum, item) => sum + item.subtotal, 0) + (cartItems.reduce((sum, item) => sum + item.subtotal, 0) > 5000 ? 0 : 500)}
        onPaymentSuccess={handlePaymentSuccess}
      />

      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        onReservationSuccess={handleReservationSuccess}
      />
    </div>
  );
}

export default App;