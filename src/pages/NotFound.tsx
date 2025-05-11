import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="container-custom py-20 min-h-[70vh] flex items-center justify-center">
      <div className="max-w-lg text-center">
        <h1 className="text-9xl font-bold text-accent-600 mb-6">404</h1>
        <h2 className="text-3xl font-bold text-secondary-900 mb-4">Page Not Found</h2>
        <p className="text-secondary-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/" className="btn btn-primary w-full sm:w-auto">
            <Home size={18} className="mr-2" />
            Back to Home
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="btn btn-outline w-full sm:w-auto"
          >
            <ArrowLeft size={18} className="mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;