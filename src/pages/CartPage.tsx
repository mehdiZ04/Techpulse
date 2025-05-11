import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';

const CartPage = () => {
  const { items } = useCart();
  
  return (
    <div className="container-custom py-12">
      <h1 className="text-3xl font-bold text-secondary-900 mb-8">Shopping Cart</h1>
      
      {items.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-secondary-900 mb-6">
                Cart Items ({items.reduce((total, item) => total + item.quantity, 0)})
              </h2>
              
              <div className="divide-y divide-secondary-200">
                {items.map(item => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <CartSummary />
          </div>
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary-100 mb-6">
            <ShoppingCart className="w-10 h-10 text-secondary-500" />
          </div>
          <h2 className="text-2xl font-semibold text-secondary-900 mb-4">Your cart is empty</h2>
          <p className="text-secondary-600 mb-8">Add some products to your cart to continue shopping.</p>
          <Link to="/products" className="btn btn-primary">
            Browse Products
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;