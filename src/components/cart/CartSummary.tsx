import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

interface CartSummaryProps {
  showCheckoutButton?: boolean;
}

const CartSummary: React.FC<CartSummaryProps> = ({ showCheckoutButton = true }) => {
  const { items, subtotal } = useCart();
  const shippingCost = subtotal > 0 ? 15 : 0;
  const total = subtotal + shippingCost;
  
  const itemCount = items.reduce((count, item) => count + item.quantity, 0);
  
  return (
    <div className="bg-secondary-50 rounded-xl p-6">
      <h3 className="text-xl font-semibold text-secondary-900 mb-6">Order Summary</h3>
      
      <div className="space-y-4">
        <div className="flex justify-between text-secondary-600">
          <span>Items ({itemCount})</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between text-secondary-600">
          <span>Shipping</span>
          <span>${shippingCost.toFixed(2)}</span>
        </div>
        
        <div className="border-t border-secondary-200 pt-4 flex justify-between font-semibold text-lg text-secondary-900">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      
      {showCheckoutButton && (
        <div className="mt-6">
          <Link 
            to="/checkout" 
            className={`btn btn-primary w-full ${items.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            aria-disabled={items.length === 0}
            onClick={(e) => items.length === 0 && e.preventDefault()}
          >
            Proceed to Checkout
          </Link>
          
          <Link to="/products" className="block text-center text-accent-600 hover:text-accent-700 mt-4">
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartSummary;