import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import CartIcon from '../cart/CartIcon';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen 
          ? 'bg-white shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent">
              TECHPULSE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium hover:text-accent-600 transition-colors ${
                location.pathname === '/' ? 'text-accent-600' : 'text-secondary-800'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`font-medium hover:text-accent-600 transition-colors ${
                location.pathname === '/products' ? 'text-accent-600' : 'text-secondary-800'
              }`}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className={`font-medium hover:text-accent-600 transition-colors ${
                location.pathname === '/about' ? 'text-accent-600' : 'text-secondary-800'
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium hover:text-accent-600 transition-colors ${
                location.pathname === '/contact' ? 'text-accent-600' : 'text-secondary-800'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-5">
            <button 
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-secondary-100 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-secondary-800" />
            </button>
            
            <Link to="/cart" className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-secondary-100 transition-colors">
              <CartIcon count={itemCount} />
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-secondary-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-secondary-800" />
              ) : (
                <Menu className="w-6 h-6 text-secondary-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6 space-y-4 border-t border-secondary-100">
            <Link 
              to="/" 
              className={`block font-medium py-2 ${
                location.pathname === '/' ? 'text-accent-600' : 'text-secondary-800'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`block font-medium py-2 ${
                location.pathname === '/products' ? 'text-accent-600' : 'text-secondary-800'
              }`}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className={`block font-medium py-2 ${
                location.pathname === '/about' ? 'text-accent-600' : 'text-secondary-800'
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className={`block font-medium py-2 ${
                location.pathname === '/contact' ? 'text-accent-600' : 'text-secondary-800'
              }`}
            >
              Contact
            </Link>
            <div className="flex items-center py-2">
              <Search className="w-5 h-5 text-secondary-800 mr-3" />
              <span className="font-medium text-secondary-800">Search</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;