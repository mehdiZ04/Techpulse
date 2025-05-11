import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = () => {
    const featuredElement = document.getElementById('featured-products');
    if (featuredElement) {
      featuredElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-secondary-50 to-white pt-20 flex items-center">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
            <span className="inline-block px-4 py-1 bg-accent-100 text-accent-700 rounded-full font-medium mb-6">
              New Release
            </span>
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-secondary-900 leading-tight mb-6">
              Experience Sound 
              <span className="bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent"> Without Limits</span>
            </h1>
            <p className="text-secondary-600 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 mb-8">
              Introducing SoundPods Pro, our most advanced wireless earbuds with noise cancellation and crystal-clear audio.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/products/p1" className="btn btn-primary w-full sm:w-auto">
                Shop Now
              </Link>
              <Link to="/products" className="btn btn-outline w-full sm:w-auto">
                View All Products
              </Link>
            </div>
          </div>
          
          {/* Product Animation */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div 
              className={`product-case relative w-80 h-80 ${isAnimated ? 'open' : ''}`}
              onClick={() => setIsAnimated(!isAnimated)}
            >
              {/* Case Top */}
              <div className="product-case-top absolute w-full h-1/2 top-0 left-0 bg-gradient-to-b from-secondary-200 to-secondary-300 rounded-t-xl shadow-inner flex items-center justify-center">
                <span className="text-secondary-500 text-xs font-medium">SoundPods Pro</span>
              </div>
              
              {/* Case Bottom */}
              <div className="absolute w-full h-full bg-gradient-to-b from-secondary-300 to-secondary-400 rounded-xl shadow-lg flex items-center justify-center overflow-hidden">
                {/* Earbuds */}
                <div className="product-item relative z-10 -mt-10">
                  <img 
                    src="https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="SoundPods Pro" 
                    className="w-48 h-auto drop-shadow-2xl"
                  />
                </div>
              </div>
              
              {/* Instruction */}
              {!isAnimated && (
                <div className="absolute -bottom-12 left-0 right-0 text-center text-secondary-500 animate-pulse">
                  <p className="font-medium mb-2">Click to reveal</p>
                  <ChevronDown className="w-5 h-5 mx-auto" />
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={handleScroll}
            className="flex flex-col items-center text-secondary-400 hover:text-accent-500 transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-sm font-medium mb-2">Scroll Down</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;