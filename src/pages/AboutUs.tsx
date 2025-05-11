import React from 'react';
import { Shield, Users, Zap, Award } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="pt-8">
      {/* Hero Section */}
      <div className="bg-secondary-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About TechVibe</h1>
            <p className="text-secondary-300 text-lg mb-8">
              We're on a mission to bring the latest technology to Tunisia with exceptional customer service and premium products.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Story */}
      <div className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">Our Story</h2>
              <p className="text-secondary-600 mb-4">
                Founded in 2020, TechVibe started with a simple vision: to bring premium tech products to Tunisia at fair prices with exceptional service. What began as a small operation has now grown into one of the country's most trusted tech retailers.
              </p>
              <p className="text-secondary-600 mb-4">
                Our team of tech enthusiasts is passionate about helping customers find the perfect products that fit their needs and lifestyle. We carefully select each item in our inventory to ensure it meets our high standards for quality and value.
              </p>
              <p className="text-secondary-600">
                As we continue to grow, our commitment remains the same: to provide our customers with the best tech products, honest advice, and exceptional service every step of the way.
              </p>
            </div>
            <div className="lg:pl-10">
              <img 
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Team meeting" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Values */}
      <div className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Our Values</h2>
            <p className="text-secondary-600">
              These core principles guide everything we do at TechVibe
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-full mb-4">
                <Shield className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Quality</h3>
              <p className="text-secondary-600">
                We curate only the best products that meet our high standards for performance and durability.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-full mb-4">
                <Users className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Customer Focus</h3>
              <p className="text-secondary-600">
                We put our customers at the center of everything we do, from product selection to after-sales support.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-full mb-4">
                <Zap className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Innovation</h3>
              <p className="text-secondary-600">
                We stay at the forefront of technology, bringing the latest innovations to the Tunisian market.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-full mb-4">
                <Award className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Integrity</h3>
              <p className="text-secondary-600">
                We operate with transparency and honesty in all our business practices and customer interactions.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Team */}
      <div className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Our Team</h2>
            <p className="text-secondary-600">
              Meet the passionate people behind TechVibe
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-secondary-50 rounded-xl overflow-hidden shadow-sm">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="CEO portrait" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary-900 mb-1">Mehdi Ben Ali</h3>
                <p className="text-accent-600 font-medium mb-3">Founder & CEO</p>
                <p className="text-secondary-600">
                  Tech enthusiast with over 15 years of experience in the industry, passionate about bringing cutting-edge technology to Tunisia.
                </p>
              </div>
            </div>
            
            <div className="bg-secondary-50 rounded-xl overflow-hidden shadow-sm">
              <img 
                src="https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="COO portrait" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary-900 mb-1">Leila Khadhraoui</h3>
                <p className="text-accent-600 font-medium mb-3">Chief Operations Officer</p>
                <p className="text-secondary-600">
                  Operations expert focused on creating seamless customer experiences from purchase to delivery and beyond.
                </p>
              </div>
            </div>
            
            <div className="bg-secondary-50 rounded-xl overflow-hidden shadow-sm">
              <img 
                src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="CTO portrait" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary-900 mb-1">Ahmed Trabelsi</h3>
                <p className="text-accent-600 font-medium mb-3">Chief Technology Officer</p>
                <p className="text-secondary-600">
                  Product specialist with deep knowledge of the tech ecosystem, ensuring we offer only the best products to our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;