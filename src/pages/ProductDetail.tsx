import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { Product } from '../types';
import ProductDetailComponent from '../components/products/ProductDetail';
import ProductCard from '../components/products/ProductCard';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    if (id) {
      const foundProduct = products.find(p => p.id === id);
      if (foundProduct) {
        setProduct(foundProduct);
        
        // Get related products from the same category
        const related = products
          .filter(p => p.category === foundProduct.category && p.id !== id)
          .slice(0, 4);
        setRelatedProducts(related);
      } else {
        navigate('/products', { replace: true });
      }
    }
  }, [id, navigate]);
  
  if (!product) {
    return (
      <div className="container-custom py-20 text-center">
        <p className="text-xl text-secondary-600">Loading product...</p>
      </div>
    );
  }
  
  return (
    <>
      <ProductDetailComponent product={product} />
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="container-custom py-16">
          <h2 className="text-2xl font-bold text-secondary-900 mb-8">You may also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;