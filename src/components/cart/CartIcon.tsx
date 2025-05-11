import { ShoppingCart } from 'lucide-react';

interface CartIconProps {
  count: number;
}

const CartIcon: React.FC<CartIconProps> = ({ count }) => {
  return (
    <div className="relative">
      <ShoppingCart className="w-5 h-5 text-secondary-800" />
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-accent-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {count}
        </span>
      )}
    </div>
  );
};

export default CartIcon;