import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import NewArrivals from '../components/home/NewArrivals';
import Categories from '../components/home/Categories';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <NewArrivals />
      <Categories />
    </div>
  );
};

export default Home;