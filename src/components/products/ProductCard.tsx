import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`} className="card card-hover group">
      {/* Product Image */}
      <div className="aspect-square relative overflow-hidden bg-secondary-50">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges */}
        {product.isNew && (
          <div className="absolute top-4 left-4 bg-accent-600 text-white text-xs font-medium px-2 py-1 rounded">
            NEW
          </div>
        )}
        {product.discountPrice && (
          <div className="absolute top-4 right-4 bg-error-600 text-white text-xs font-medium px-2 py-1 rounded">
            SALE
          </div>
        )}
      </div>
      
      {/* Product Info */}
      <div className="p-5">
        <div className="flex items-center space-x-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={i < Math.floor(product.rating) 
                ? "fill-warning-500 text-warning-500" 
                : "text-secondary-300"
              } 
            />
          ))}
          <span className="text-xs text-secondary-500 ml-1">
            ({product.reviews.length})
          </span>
        </div>
        
        <h3 className="font-medium text-lg text-secondary-900 mb-2">{product.name}</h3>
        
        <div className="flex items-baseline mb-4">
          {product.discountPrice ? (
            <>
              <span className="text-error-600 font-semibold">TND{product.discountPrice}</span>
              <span className="text-secondary-400 line-through text-sm ml-2">TND{product.price}</span>
            </>
          ) : (
            <span className="text-secondary-900 font-semibold">TND{product.price}</span>
          )}
        </div>
        
        <span className="text-sm text-secondary-500 capitalize">{product.category}</span>
      </div>
    </Link>
  );
};

export default ProductCard;