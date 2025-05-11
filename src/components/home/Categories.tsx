import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

const Categories = () => {
  return (
    <section className="py-16 bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-secondary-900 mb-4">Shop by Category</h2>
          <p className="text-secondary-600 max-w-2xl mx-auto">
            Browse our collection of premium tech products by category.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {categories.map(category => (
            <Link 
              key={category.id} 
              to={`/products?category=${category.slug}`}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-sm overflow-hidden aspect-square relative group-hover:shadow-md transition-shadow card-hover">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/70 to-transparent flex items-end">
                  <h3 className="text-white font-medium p-4 w-full text-center">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;