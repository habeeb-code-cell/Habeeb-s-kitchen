import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle, Package, Truck, MapPin } from 'lucide-react';
import { Order } from '../types';
import { formatPrice, formatDeliveryTime } from '../utils/formatters';

interface OrderTrackingProps {
  orders: Order[];
}

const OrderTracking: React.FC<OrderTrackingProps> = ({ orders }) => {
  const [activeOrders, setActiveOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Filter for non-delivered orders
    setActiveOrders(orders.filter(order => order.status !== 'delivered'));
  }, [orders]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-6 h-6 text-yellow-500" />;
      case 'confirmed':
        return <CheckCircle className="w-6 h-6 text-blue-500" />;
      case 'preparing':
        return <Package className="w-6 h-6 text-orange-500" />;
      case 'ready':
        return <Truck className="w-6 h-6 text-green-500" />;
      default:
        return <Clock className="w-6 h-6 text-gray-400" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Order Received';
      case 'confirmed':
        return 'Order Confirmed';
      case 'preparing':
        return 'Being Prepared';
      case 'ready':
        return 'Out for Delivery';
      default:
        return 'Processing';
    }
  };

  const getProgressWidth = (status: string) => {
    switch (status) {
      case 'pending':
        return '25%';
      case 'confirmed':
        return '50%';
      case 'preparing':
        return '75%';
      case 'ready':
        return '100%';
      default:
        return '0%';
    }
  };

  if (activeOrders.length === 0) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto">
            <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No Active Orders</h3>
            <p className="text-gray-500">Your orders will appear here once you place them</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Track Your Orders</h2>
          <p className="text-lg text-gray-600">
            Real-time updates on your delicious meals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {activeOrders.map(order => (
            <div key={order.id} className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Order #{order.id}</h3>
                  <p className="text-sm text-gray-500">{new Date(order.createdAt).toLocaleDateString()}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-green-600">{formatPrice(order.total)}</p>
                  <p className="text-sm text-gray-500">
                    ETA: {formatDeliveryTime(parseInt(order.estimatedDelivery))}
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{getStatusText(order.status)}</span>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(order.status)}
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: getProgressWidth(order.status) }}
                  ></div>
                </div>
              </div>

              {/* Order Items */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">Order Items:</h4>
                <div className="space-y-2">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800">{item.menuItem.name}</p>
                        {item.customizations.length > 0 && (
                          <p className="text-xs text-gray-500">
                            Customizations: {item.customizations.join(', ')}
                          </p>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                        <p className="text-sm font-medium text-gray-800">{formatPrice(item.subtotal)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Info */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-500 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-gray-700">Delivery Address</h5>
                    <p className="text-sm text-gray-600">{order.customerInfo.address}</p>
                    <p className="text-sm text-gray-600">{order.customerInfo.city}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderTracking;