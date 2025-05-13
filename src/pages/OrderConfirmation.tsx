import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, Package, ArrowRight } from 'lucide-react';
import { Order } from '../types';

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState<Order | null>(null);
  
  useEffect(() => {
    // Get last order from localStorage
    const lastOrder = localStorage.getItem('lastOrder');
    
    if (lastOrder) {
      setOrder(JSON.parse(lastOrder));
    } else {
      // Redirect to home if no order found
      navigate('/');
    }
  }, [navigate]);
  
  if (!order) {
    return (
      <div className="container-custom py-20 text-center">
        <p className="text-xl text-secondary-600">Loading order information...</p>
      </div>
    );
  }
  
  return (
    <div className="container-custom py-16">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-success-100 rounded-full mb-6">
            <CheckCircle className="w-10 h-10 text-success-600" />
          </div>
          <h1 className="text-3xl font-bold text-secondary-900 mb-4">Thank You for Your Order!</h1>
          <p className="text-secondary-600 text-lg">
            Your order has been successfully placed and will be delivered soon.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-secondary-900">Order Summary</h2>
            <span className="text-sm bg-accent-100 text-accent-800 px-3 py-1 rounded-full">
              Order #{order.id.substring(order.id.length - 6)}
            </span>
          </div>
          
          <div className="border-b border-secondary-200 pb-4 mb-4">
            <div className="flex items-center text-secondary-600 mb-2">
              <Package className="w-5 h-5 mr-2" />
              <span>Expected delivery: 3-5 business days</span>
            </div>
            <p className="text-secondary-600">
              <span className="font-medium">Payment Method:</span> Cash on Delivery
            </p>
          </div>
          
          <div className="space-y-4 mb-6">
            {order.items.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-16 h-16 flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="ml-4 flex-grow">
                  <h4 className="text-secondary-900 font-medium">{item.name}</h4>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-secondary-500">Qty: {item.quantity}</span>
                    <span className="text-secondary-900">TND{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="border-t border-secondary-200 pt-4 space-y-3">
            <div className="flex justify-between text-secondary-600">
              <span>Subtotal</span>
              <span>TND{order.subtotal.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between text-secondary-600">
              <span>Shipping</span>
              <span>TND{order.shippingCost.toFixed(2)}</span>
            </div>
            
            <div className="border-t border-secondary-200 pt-3 flex justify-between font-semibold text-lg text-secondary-900">
              <span>Total</span>
              <span>TND{order.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
        
        <div className="bg-secondary-50 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-secondary-900 mb-4">Shipping Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-secondary-500">Full Name</p>
              <p className="text-secondary-900">{order.shippingInfo.fullName}</p>
            </div>
            <div>
              <p className="text-sm text-secondary-500">Phone</p>
              <p className="text-secondary-900">{order.shippingInfo.phone}</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm text-secondary-500">Address</p>
              <p className="text-secondary-900">
                {order.shippingInfo.address}, {order.shippingInfo.city}, {order.shippingInfo.state} {order.shippingInfo.postalCode}
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/" className="btn btn-primary inline-flex items-center">
            Continue Shopping
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;