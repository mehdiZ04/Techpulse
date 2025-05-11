import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ShippingInfo, PaymentMethod, Order } from '../types';
import CheckoutForm from '../components/checkout/CheckoutForm';
import CartSummary from '../components/cart/CartSummary';
import CartItem from '../components/cart/CartItem';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, subtotal, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  
  useEffect(() => {
    // Redirect to cart if cart is empty
    if (items.length === 0) {
      navigate('/cart');
    }
  }, [items, navigate]);
  
  const handleComplete = (shippingInfo: ShippingInfo, paymentMethod: PaymentMethod) => {
    setIsProcessing(true);
    
    // Simulate processing order
    setTimeout(() => {
      // Create order object
      const order: Order = {
        id: `order-${Date.now()}`,
        items: [...items],
        shippingInfo,
        paymentMethod,
        subtotal,
        shippingCost: 15,
        total: subtotal + 15,
        status: 'pending',
        createdAt: new Date().toISOString()
      };
      
      // Store order in localStorage for future reference
      const orders = JSON.parse(localStorage.getItem('orders') || '[]');
      orders.push(order);
      localStorage.setItem('orders', JSON.stringify(orders));
      localStorage.setItem('lastOrder', JSON.stringify(order));
      
      // Clear cart
      clearCart();
      
      // Redirect to confirmation page
      navigate('/order-confirmation');
      
      setIsProcessing(false);
    }, 1500);
  };
  
  return (
    <div className="container-custom py-12">
      <button 
        onClick={() => navigate('/cart')} 
        className="flex items-center text-secondary-600 hover:text-accent-600 mb-8"
      >
        <ArrowLeft size={18} className="mr-2" />
        Back to Cart
      </button>
      
      <h1 className="text-3xl font-bold text-secondary-900 mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <CheckoutForm onComplete={handleComplete} />
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-secondary-900 mb-6">
                Order Summary
              </h2>
              
              <div className="max-h-80 overflow-y-auto mb-6 pr-2">
                {items.map(item => (
                  <div key={item.id} className="flex items-center py-3 border-b border-secondary-100 last:border-0">
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
                        <span className="text-secondary-900">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-secondary-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between text-secondary-600">
                  <span>Shipping</span>
                  <span>$15.00</span>
                </div>
                
                <div className="border-t border-secondary-200 pt-3 flex justify-between font-semibold text-lg text-secondary-900">
                  <span>Total</span>
                  <span>${(subtotal + 15).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {isProcessing && (
        <div className="fixed inset-0 bg-secondary-900/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-accent-600 mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-secondary-900 mb-2">Processing Your Order</h3>
            <p className="text-secondary-600">Please wait while we process your order...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;