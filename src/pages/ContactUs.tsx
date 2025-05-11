import { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field if user is typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (formData.phone && !/^\d{8}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 8-digit Tunisian phone number';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }, 1500);
    }
  };
  
  return (
    <div className="pt-8">
      {/* Hero Section */}
      <div className="bg-secondary-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-secondary-300 text-lg">
              Have questions or need assistance? We're here to help.
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Info & Form */}
      <div className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-accent-100 rounded-full p-3 mr-4">
                    <MapPin className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary-900 mb-1">Our Location</h3>
                    <p className="text-secondary-600">
                      123 Tech Boulevard, Tunis 1002, Tunisia
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent-100 rounded-full p-3 mr-4">
                    <Mail className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary-900 mb-1">Email Us</h3>
                    <p className="text-secondary-600">
                      support@techvibe.com
                    </p>
                    <p className="text-secondary-600">
                      sales@techvibe.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent-100 rounded-full p-3 mr-4">
                    <Phone className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary-900 mb-1">Call Us</h3>
                    <p className="text-secondary-600">
                      +216 71 234 567
                    </p>
                    <p className="text-secondary-600">
                      +216 71 234 568
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent-100 rounded-full p-3 mr-4">
                    <MessageCircle className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary-900 mb-1">Business Hours</h3>
                    <p className="text-secondary-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-secondary-600">
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                    <p className="text-secondary-600">
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-secondary-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-secondary-900 mb-6">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <div className="bg-success-100 text-success-800 p-6 rounded-lg text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-success-200 rounded-full mb-4">
                      <svg className="w-8 h-8 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Message Sent Successfully!</h3>
                    <p>Thank you for reaching out. We'll get back to you as soon as possible.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`input ${errors.name ? 'border-error-500 focus:ring-error-500' : ''}`}
                          placeholder="Enter your name"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-error-600">{errors.name}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`input ${errors.email ? 'border-error-500 focus:ring-error-500' : ''}`}
                          placeholder="Enter your email"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-error-600">{errors.email}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`input ${errors.phone ? 'border-error-500 focus:ring-error-500' : ''}`}
                          placeholder="Enter your phone number"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-error-600">{errors.phone}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className={`input ${errors.subject ? 'border-error-500 focus:ring-error-500' : ''}`}
                        >
                          <option value="">Select a subject</option>
                          <option value="Product Inquiry">Product Inquiry</option>
                          <option value="Order Status">Order Status</option>
                          <option value="Returns & Refunds">Returns & Refunds</option>
                          <option value="Technical Support">Technical Support</option>
                          <option value="Other">Other</option>
                        </select>
                        {errors.subject && (
                          <p className="mt-1 text-sm text-error-600">{errors.subject}</p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className={`input resize-none ${errors.message ? 'border-error-500 focus:ring-error-500' : ''}`}
                        placeholder="Enter your message"
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-sm text-error-600">{errors.message}</p>
                      )}
                    </div>
                    
                    <button 
                      type="submit" 
                      className="btn btn-primary w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Map */}
      <div className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Visit Our Store</h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Come experience our products in person at our flagship store in Tunis
            </p>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-sm h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102239.97813671325!2d10.1001526!3d36.7976224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd337f5e7ef543%3A0xd671924e714a0275!2sTunis!5e0!3m2!1sen!2stn!4v1695035228540!5m2!1sen!2stn" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="TechVibe Store Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;