import { useState } from 'react';
import { Star, Truck, ShieldCheck, RefreshCw, Minus, Plus, ShoppingCart } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '');
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  
  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  };
  
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  const handleAddToCart = () => {
    addItem({
      id: `${product.id}-${Date.now()}`,
      productId: product.id,
      name: product.name,
      price: product.discountPrice || product.price,
      image: product.images[0],
      quantity,
      color: selectedColor || undefined
    });
  };
  
  return (
    <div className="py-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-secondary-50 rounded-lg overflow-hidden">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name} 
                className="w-full h-full object-contain p-8"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <div 
                  key={index} 
                  className={`aspect-square rounded-md overflow-hidden cursor-pointer border-2 ${
                    selectedImage === index 
                      ? 'border-accent-600' 
                      : 'border-transparent hover:border-secondary-300'
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} view ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-secondary-900 mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={i < Math.floor(product.rating) 
                      ? "fill-warning-500 text-warning-500" 
                      : "text-secondary-300"
                    } 
                  />
                ))}
                <span className="ml-2 text-secondary-600">
                  {product.rating} ({product.reviews.length} reviews)
                </span>
              </div>
            </div>
            
            <div className="mb-6">
              {product.discountPrice ? (
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-error-600">
                    TND{product.discountPrice}
                  </span>
                  <span className="ml-3 text-xl text-secondary-400 line-through">
                    TND{product.price}
                  </span>
                  <span className="ml-3 px-2 py-1 bg-error-100 text-error-700 text-sm font-medium rounded">
                    Save TND{(product.price - product.discountPrice).toFixed(2)}
                  </span>
                </div>
              ) : (
                <span className="text-3xl font-bold text-secondary-900">
                  TND{product.price}
                </span>
              )}
            </div>
            
            <p className="text-secondary-600 mb-6">{product.description}</p>
            
            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-secondary-900 mb-3">Color</h3>
                <div className="flex space-x-3">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        selectedColor === color ? 'ring-2 ring-offset-2 ring-accent-600' : ''
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                      aria-label={`Select ${color} color`}
                    >
                      {selectedColor === color && (
                        <span className="text-white">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Quantity & Add to Cart */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-secondary-900 mb-3">Quantity</h3>
              <div className="flex items-center">
                <button 
                  onClick={handleDecrease}
                  disabled={quantity <= 1}
                  className={`w-10 h-10 flex items-center justify-center border border-secondary-300 rounded-l-md ${
                    quantity <= 1 ? 'bg-secondary-100 text-secondary-400 cursor-not-allowed' : 'hover:bg-secondary-100'
                  }`}
                  aria-label="Decrease quantity"
                >
                  <Minus size={18} />
                </button>
                
                <span className="w-14 h-10 flex items-center justify-center border-t border-b border-secondary-300 text-secondary-800">
                  {quantity}
                </span>
                
                <button 
                  onClick={handleIncrease}
                  className="w-10 h-10 flex items-center justify-center border border-secondary-300 rounded-r-md hover:bg-secondary-100"
                  aria-label="Increase quantity"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={handleAddToCart}
                className="btn btn-primary flex-1"
              >
                <ShoppingCart size={20} className="mr-2" />
                Add to Cart
              </button>
              
              
            </div>
            
            {/* Product Status */}
            <div className="mb-8 text-sm">
              <p className="text-success-600 font-medium">
                {product.stock === 'en stock' ? 'In Stock' : 'Out of Stock'}
              </p>
              <p className="text-secondary-500 mt-1">SKU: {product.id}</p>
            </div>
            
            {/* Benefits */}
            <div className="border-t border-secondary-200 pt-6 space-y-4">
              <div className="flex items-center">
                <Truck className="w-5 h-5 text-secondary-600 mr-3" />
                <span className="text-secondary-600">Free delivery for orders over 50 TND</span>
              </div>
              <div className="flex items-center">
                <ShieldCheck className="w-5 h-5 text-secondary-600 mr-3" />
                <span className="text-secondary-600">6-months warranty on all products</span>
              </div>
              <div className="flex items-center">
                <RefreshCw className="w-5 h-5 text-secondary-600 mr-3" />
                <span className="text-secondary-600">30-day money-back guarantee</span>
              </div>
            </div>
            
            
          </div>
        </div>
        
        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-secondary-200">
            <div className="flex overflow-x-auto hide-scrollbar">
              <button className="px-8 py-4 font-medium text-accent-600 border-b-2 border-accent-600">Description</button>
              
            </div>
          </div>
          
          <div className="py-8">
            <h3 className="text-xl font-bold text-secondary-900 mb-4">Product Description</h3>
            <p className="text-secondary-600 mb-6">{product.description}</p>
            
            <h4 className="text-lg font-semibold text-secondary-900 mb-3">Key Features</h4>
            <ul className="list-disc list-inside text-secondary-600 space-y-2 mb-6">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;