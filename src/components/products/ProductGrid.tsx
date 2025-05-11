import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChevronDown, Search, SlidersHorizontal } from 'lucide-react';
import { Product } from '../../types';
import { products, categories } from '../../data/products';
import ProductCard from './ProductCard';

interface ProductGridProps {
  title?: string;
  description?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  title = "All Products",
  description = "Browse our collection of premium tech products"
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  const categoryParam = searchParams.get('category');
  const sortParam = searchParams.get('sort') || 'featured';
  
  // Filter and sort products
  useEffect(() => {
    let result = [...products];
    
    // Category filter
    if (categoryParam) {
      result = result.filter(product => product.category === categoryParam);
    }
    
    // Search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(term) || 
        product.description.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
      );
    }
    
    // Sort
    switch(sortParam) {
      case 'price-low':
        result.sort((a, b) => {
          const priceA = a.discountPrice || a.price;
          const priceB = b.discountPrice || b.price;
          return priceA - priceB;
        });
        break;
      case 'price-high':
        result.sort((a, b) => {
          const priceA = a.discountPrice || a.price;
          const priceB = b.discountPrice || b.price;
          return priceB - priceA;
        });
        break;
      case 'newest':
        result = result.filter(p => p.isNew).concat(result.filter(p => !p.isNew));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'featured':
      default:
        result = result.filter(p => p.isFeatured).concat(result.filter(p => !p.isFeatured));
    }
    
    setFilteredProducts(result);
  }, [categoryParam, sortParam, searchTerm]);
  
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('sort', e.target.value);
    setSearchParams(newParams);
  };
  
  const handleCategoryClick = (slug: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (categoryParam === slug) {
      newParams.delete('category');
    } else {
      newParams.set('category', slug);
    }
    setSearchParams(newParams);
  };
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  return (
    <div className="container-custom py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">{title}</h1>
        <p className="text-secondary-600 max-w-2xl mx-auto">
          {description}
        </p>
      </div>
      
      {/* Filters and Sort */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <button 
            className="flex items-center text-secondary-700 mb-4 md:mb-0"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal size={20} className="mr-2" />
            <span>Filters</span>
            <ChevronDown 
              size={16} 
              className={`ml-1 transition-transform ${showFilters ? 'rotate-180' : ''}`} 
            />
          </button>
          
          <div className="w-full md:w-auto flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 items-start sm:items-center">
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 w-full border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400" />
            </div>
            
            <div className="w-full sm:w-auto">
              <select 
                className="w-full sm:w-auto px-4 py-2 border border-secondary-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                value={sortParam}
                onChange={handleSortChange}
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Category Filters */}
        {showFilters && (
          <div className="bg-secondary-50 rounded-lg p-4 mb-6">
            <h3 className="font-medium mb-3">Categories</h3>
            <div className="flex flex-wrap gap-2">
              <button
                className={`px-3 py-1 rounded-full text-sm ${
                  !categoryParam 
                    ? 'bg-accent-600 text-white' 
                    : 'bg-white border border-secondary-300 text-secondary-700 hover:bg-secondary-100'
                }`}
                onClick={() => handleCategoryClick('')}
              >
                All
              </button>
              
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`px-3 py-1 rounded-full text-sm ${
                    categoryParam === category.slug 
                      ? 'bg-accent-600 text-white' 
                      : 'bg-white border border-secondary-300 text-secondary-700 hover:bg-secondary-100'
                  }`}
                  onClick={() => handleCategoryClick(category.slug)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Results Count */}
      <p className="text-secondary-600 mb-6">
        Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
      </p>
      
      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-secondary-800 mb-2">No products found</h3>
          <p className="text-secondary-600">
            Try adjusting your search or filter to find what you're looking for.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;