import { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const faqs: FAQItem[] = [
    {
      question: 'How long does shipping take within Tunisia?',
      answer: 'We offer standard shipping which takes 3-5 business days for delivery across Tunisia. For orders in Tunis and surrounding areas, we also offer express shipping which delivers within 24-48 hours.',
      category: 'shipping'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept Cash on Delivery (COD) as our primary payment method. This allows you to pay for your order when it arrives at your doorstep.',
      category: 'payment'
    },
    {
      question: 'How does Cash on Delivery work?',
      answer: 'With Cash on Delivery, you place your order online and only pay when the product is delivered to your address. Our delivery personnel will collect the payment amount in cash when they deliver your order.',
      category: 'payment'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for most products. If you\'re not satisfied with your purchase, you can return it within 30 days for a full refund or exchange. The product must be in its original condition and packaging.',
      category: 'returns'
    },
    {
      question: 'Are all products covered by warranty?',
      answer: 'Yes, all our products come with at least a one-year manufacturer\'s warranty. Some premium products offer extended warranties of up to two years. Specific warranty information is listed on each product page.',
      category: 'warranty'
    },
    {
      question: 'How do I track my order?',
      answer: 'Once your order is shipped, you\'ll receive an email with a tracking number. You can use this number on our website under "Track Order" to see the status and estimated delivery date of your purchase.',
      category: 'shipping'
    },
    {
      question: 'Do you ship to all areas in Tunisia?',
      answer: 'Yes, we deliver to all regions across Tunisia. Delivery times may vary depending on your location, with major cities receiving faster delivery compared to remote areas.',
      category: 'shipping'
    },
    {
      question: 'What happens if my product arrives damaged?',
      answer: 'If your product arrives damaged, please contact our customer service team within 48 hours of receiving the order. Take photos of the damaged product and packaging and send them to our support email. We\'ll arrange for a replacement or refund.',
      category: 'returns'
    },
    {
      question: 'How do I claim warranty service?',
      answer: 'To claim warranty service, contact our customer support team with your order number and a description of the issue. For valid warranty claims, we\'ll provide instructions for sending the product back to us or to an authorized service center.',
      category: 'warranty'
    },
    {
      question: 'Do you offer installation services for products?',
      answer: 'Yes, we offer professional installation services for select products like TVs, home theaters, and complex electronics. This service is available at an additional cost and can be added during checkout.',
      category: 'services'
    },
    {
      question: 'Are the products on your website genuine?',
      answer: 'Absolutely. We only sell 100% genuine products sourced directly from manufacturers or authorized distributors. Each product comes with an official warranty and all original accessories.',
      category: 'products'
    },
    {
      question: 'Do you price match with other retailers?',
      answer: 'Yes, we offer price matching for identical products found at lower prices from authorized Tunisian retailers. Contact our customer service with proof of the lower price, and we\'ll match it if it meets our price match policy criteria.',
      category: 'payment'
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  const filteredFAQs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);
  
  const categories = [
    { id: 'all', name: 'All FAQs' },
    { id: 'shipping', name: 'Shipping & Delivery' },
    { id: 'payment', name: 'Payment & Pricing' },
    { id: 'returns', name: 'Returns & Refunds' },
    { id: 'warranty', name: 'Warranty & Support' },
    { id: 'products', name: 'Products' },
    { id: 'services', name: 'Services' }
  ];
  
  return (
    <div className="pt-8">
      {/* Hero Section */}
      <div className="bg-secondary-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-secondary-300 text-lg">
              Find answers to the most common questions about our products and services.
            </p>
          </div>
        </div>
      </div>
      
      {/* FAQs Section */}
      <div className="py-16 bg-white">
        <div className="container-custom">
          {/* Categories */}
          <div className="mb-12 overflow-x-auto">
            <div className="flex space-x-4 pb-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-accent-600 text-white'
                      : 'bg-secondary-100 text-secondary-800 hover:bg-secondary-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* FAQ Items */}
          <div className="space-y-4 mb-12">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <div 
                  key={index}
                  className="border border-secondary-200 rounded-lg overflow-hidden"
                >
                  <button
                    className="flex justify-between items-center w-full p-5 text-left bg-white hover:bg-secondary-50 transition-colors"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-medium text-lg text-secondary-900">{faq.question}</span>
                    {activeIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-secondary-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-secondary-500" />
                    )}
                  </button>
                  
                  {activeIndex === index && (
                    <div className="px-5 py-4 bg-secondary-50 border-t border-secondary-200">
                      <p className="text-secondary-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-secondary-500">No FAQs found in this category.</p>
              </div>
            )}
          </div>
          
          {/* Contact Section */}
          <div className="bg-secondary-50 rounded-xl p-8 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-full mb-6">
              <MessageCircle className="w-8 h-8 text-accent-600" />
            </div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">Still have questions?</h3>
            <p className="text-secondary-600 mb-6">
              Can't find the answer you're looking for? Please contact our friendly support team.
            </p>
            <a href="/contact" className="btn btn-primary">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;