import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { products } from '../../data/products';

const NewArrivals = () => {
  const newProducts = products.filter(product => product.isNew);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const slideWidth = container.offsetWidth;
      container.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      });
    }
  };
  
  const handlePrev = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };
  
  const handleNext = () => {
    const newIndex = Math.min(newProducts.length - 1, currentIndex + 1);
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };
  
  useEffect(() => {
    // Auto slideshow
    const timer = setInterval(() => {
      if (currentIndex < newProducts.length - 1) {
        setCurrentIndex(prev => prev + 1);
        scrollToIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0);
        scrollToIndex(0);
      }
    }, 5000);
    
    return () => clearInterval(timer);
  }, [currentIndex, newProducts.length]);
  
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-secondary-900 mb-2">New Arrivals</h2>
            <p className="text-secondary-600">The latest additions to our tech lineup</p>
          </div>
          
          <div className="hidden sm:flex items-center space-x-3">
            <button 
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                currentIndex === 0 
                  ? 'bg-secondary-100 text-secondary-400 cursor-not-allowed' 
                  : 'bg-secondary-100 text-secondary-800 hover:bg-secondary-200'
              }`}
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button 
              onClick={handleNext}
              disabled={currentIndex === newProducts.length - 1}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                currentIndex === newProducts.length - 1 
                  ? 'bg-secondary-100 text-secondary-400 cursor-not-allowed' 
                  : 'bg-secondary-100 text-secondary-800 hover:bg-secondary-200'
              }`}
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
      
      <div 
        ref={containerRef}
        className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {newProducts.map((product) => (
          <div 
            key={product.id} 
            className="min-w-full snap-center"
          >
            <div className="container-custom">
              <div className="flex flex-col md:flex-row items-center bg-secondary-50 rounded-2xl overflow-hidden shadow-sm">
                {/* Product Image */}
                <div className="md:w-1/2 h-64 md:h-96 overflow-hidden">
                  <img 
                    src={product.images[0]} 
                    alt={product.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Product Info */}
                <div className="md:w-1/2 p-6 md:p-10">
                  <div className="bg-accent-600 text-white text-xs inline-block px-3 py-1 rounded-full font-medium mb-4">
                    NEW ARRIVAL
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-3">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center space-x-1 mb-4">
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
                    <span className="text-sm text-secondary-500 ml-1">
                      ({product.reviews.length} reviews)
                    </span>
                  </div>
                  
                  <p className="text-secondary-600 mb-6 line-clamp-3">
                    {product.description}
                  </p>
                  
                  <div className="flex items-baseline mb-6">
                    {product.discountPrice ? (
                      <>
                        <span className="text-error-600 text-2xl font-bold">TND{product.discountPrice}</span>
                        <span className="text-secondary-400 line-through ml-3">TND{product.price}</span>
                      </>
                    ) : (
                      <span className="text-secondary-900 text-2xl font-bold">TND{product.price}</span>
                    )}
                  </div>
                  
                  <Link 
                    to={`/products/${product.id}`} 
                    className="btn btn-primary"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination Dots */}
      <div className="container-custom">
        <div className="flex justify-center mt-6 space-x-2">
          {newProducts.map((_, index) => (
            <button 
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                scrollToIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-accent-600 w-6' 
                  : 'bg-secondary-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;