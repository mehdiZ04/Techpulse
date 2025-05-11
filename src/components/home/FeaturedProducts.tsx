import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star } from 'lucide-react';
import { products } from '../../data/products';

const FeaturedProducts = () => {
  const featuredProducts = products.filter(product => product.isFeatured);
  
  return (
    <section id="featured-products" className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-secondary-900 mb-4">Featured Products</h2>
          <p className="text-secondary-600 max-w-2xl mx-auto">
            Discover our most popular tech products, featuring premium quality and the latest innovations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featuredProducts.map(product => (
            <Link 
              key={product.id} 
              to={`/products/${product.id}`}
              className="card card-hover group"
            >
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
                      <span className="text-error-600 font-semibold">${product.discountPrice}</span>
                      <span className="text-secondary-400 line-through text-sm ml-2">${product.price}</span>
                    </>
                  ) : (
                    <span className="text-secondary-900 font-semibold">${product.price}</span>
                  )}
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-secondary-500 capitalize">{product.category}</span>
                  <span className="text-accent-600 flex items-center group-hover:translate-x-1 transition-transform">
                    View Details <ChevronRight size={16} className="ml-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/products" className="btn btn-primary inline-flex items-center">
            Shop All Products
            <ChevronRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;