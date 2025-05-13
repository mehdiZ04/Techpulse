import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';
import { useCart } from '../../context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();
  
  const handleIncrease = () => {
    updateQuantity(item.id, item.quantity + 1);
  };
  
  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeItem(item.id);
    }
  };
  
  const handleRemove = () => {
    removeItem(item.id);
  };
  
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center py-6 border-b border-secondary-200">
      {/* Product Image */}
      <div className="w-full sm:w-24 h-24 mb-4 sm:mb-0 flex-shrink-0">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      
      {/* Product Details */}
      <div className="sm:ml-6 flex-grow">
        <h3 className="text-lg font-medium text-secondary-900">{item.name}</h3>
        {item.color && (
          <p className="text-sm text-secondary-500 mb-2">
            Color: <span className="capitalize">{item.color}</span>
          </p>
        )}
        <p className="text-accent-600 font-medium">${item.price}</p>
      </div>
      
      {/* Quantity Controls */}
      <div className="flex items-center mt-4 sm:mt-0">
        <button 
          onClick={handleDecrease}
          className="w-8 h-8 flex items-center justify-center border border-secondary-200 rounded-l-md hover:bg-secondary-50"
          aria-label="Decrease quantity"
        >
          <Minus size={16} />
        </button>
        
        <span className="w-10 h-8 flex items-center justify-center border-t border-b border-secondary-200 text-secondary-800">
          {item.quantity}
        </span>
        
        <button 
          onClick={handleIncrease}
          className="w-8 h-8 flex items-center justify-center border border-secondary-200 rounded-r-md hover:bg-secondary-50"
          aria-label="Increase quantity"
        >
          <Plus size={16} />
        </button>
      </div>
      
      {/* Price & Remove */}
      <div className="sm:ml-6 flex items-center justify-between w-full sm:w-auto mt-4 sm:mt-0">
        <span className="text-lg font-medium text-secondary-900 sm:ml-8">
          TND{(item.price * item.quantity).toFixed(2)}
        </span>
        
        <button 
          onClick={handleRemove}
          className="ml-4 text-secondary-400 hover:text-error-600 transition-colors"
          aria-label="Remove item"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;