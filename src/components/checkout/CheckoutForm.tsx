import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Truck, ShieldCheck } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { ShippingInfo, PaymentMethod } from '../../types';

async function sendOrderToFormPress(order: any) {
  const formPressUrl = 'https://formspree.io/f/meoglrke'; // Replace with your FormPress endpoint
  const response = await fetch(formPressUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order),
  });
  if (!response.ok) {
    throw new Error('Failed to send order to FormPress');
  }
}

interface CheckoutFormProps {
  onComplete: (shippingInfo: ShippingInfo, paymentMethod: PaymentMethod) => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ onComplete }) => {
  const navigate = useNavigate();
  const { items } = useCart();

  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    fullName: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    phone: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!shippingInfo.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    if (!shippingInfo.address.trim()) {
      newErrors.address = 'Address is required';
    }
    if (!shippingInfo.state.trim()) {
      newErrors.state = 'State is required';
    }
    if (!shippingInfo.postalCode.trim()) {
      newErrors.postalCode = 'Postal code is required';
    }
    if (!shippingInfo.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{8}$/.test(shippingInfo.phone)) {
      newErrors.phone = 'Please enter a valid 8-digit Tunisian phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setShippingInfo(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (items.length === 0) {
      navigate('/cart');
      return;
    }

    if (validateForm()) {
      const itemNames = items.map(item => item.name);

      const orderData = {
        shippingInfo,
        items: itemNames,
        paymentMethod: "cash_on_delivery" as const,
      };

      try {
        await sendOrderToFormPress(orderData);
        onComplete(shippingInfo, 'cash_on_delivery');
      } catch (error) {
        console.error(error);
        alert('Failed to send order. Please try again.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold text-secondary-900 mb-6">Shipping Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label htmlFor="fullName" className="block text-sm font-medium text-secondary-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={shippingInfo.fullName}
              onChange={handleChange}
              className={`input ${errors.fullName ? 'border-error-500 focus:ring-error-500' : ''}`}
              placeholder="Enter your full name"
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-error-600">{errors.fullName}</p>
            )}
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="address" className="block text-sm font-medium text-secondary-700 mb-2">
              Address *
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={shippingInfo.address}
              onChange={handleChange}
              className={`input ${errors.address ? 'border-error-500 focus:ring-error-500' : ''}`}
              placeholder="Enter your street address"
            />
            {errors.address && (
              <p className="mt-1 text-sm text-error-600">{errors.address}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-secondary-700 mb-2">
              State/Governorate *
            </label>
            <select
              id="state"
              name="state"
              value={shippingInfo.state}
              onChange={handleChange}
              className={`input ${errors.state ? 'border-error-500 focus:ring-error-500' : ''}`}
            >
              <option value="">Select a state</option>
              <option value="Tunis">Tunis</option>
              <option value="Ariana">Ariana</option>
              <option value="Ben Arous">Ben Arous</option>
              <option value="Manouba">Manouba</option>
              <option value="Nabeul">Nabeul</option>
              <option value="Zaghouan">Zaghouan</option>
              <option value="Bizerte">Bizerte</option>
              <option value="Béja">Béja</option>
              <option value="Jendouba">Jendouba</option>
              <option value="Le Kef">Le Kef</option>
              <option value="Siliana">Siliana</option>
              <option value="Sousse">Sousse</option>
              <option value="Monastir">Monastir</option>
              <option value="Mahdia">Mahdia</option>
              <option value="Sfax">Sfax</option>
              <option value="Kairouan">Kairouan</option>
              <option value="Kasserine">Kasserine</option>
              <option value="Sidi Bouzid">Sidi Bouzid</option>
              <option value="Gabès">Gabès</option>
              <option value="Medenine">Medenine</option>
              <option value="Tataouine">Tataouine</option>
              <option value="Gafsa">Gafsa</option>
              <option value="Tozeur">Tozeur</option>
              <option value="Kebili">Kebili</option>
              <option value="Other">Other</option>
            </select>
            {errors.state && (
              <p className="mt-1 text-sm text-error-600">{errors.state}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="postalCode" className="block text-sm font-medium text-secondary-700 mb-2">
              Postal Code *
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={shippingInfo.postalCode}
              onChange={handleChange}
              className={`input ${errors.postalCode ? 'border-error-500 focus:ring-error-500' : ''}`}
              placeholder="Enter your postal code"
            />
            {errors.postalCode && (
              <p className="mt-1 text-sm text-error-600">{errors.postalCode}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={shippingInfo.phone}
              onChange={handleChange}
              className={`input ${errors.phone ? 'border-error-500 focus:ring-error-500' : ''}`}
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-error-600">{errors.phone}</p>
            )}
            <p className="mt-1 text-xs text-secondary-500">
              Format: 8-digit Tunisian phone number (e.g., 71234567)
            </p>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold text-secondary-900 mb-6">Payment Method</h3>
        
        <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-4">
          <div className="flex items-center">
            <input
              type="radio"
              id="cod"
              name="paymentMethod"
              className="w-4 h-4 text-accent-600 focus:ring-accent-500"
              checked
              readOnly
            />
            <label htmlFor="cod" className="ml-2 block text-secondary-900 font-medium">
              Cash on Delivery
            </label>
            <CreditCard className="ml-auto w-5 h-5 text-secondary-500" />
          </div>
          <p className="mt-2 text-sm text-secondary-600 pl-6">
            Pay with cash when your order is delivered to your doorstep.
          </p>
        </div>
      </div>
      
      <div className="bg-secondary-50 p-4 rounded-lg space-y-2">
        <div className="flex items-center text-sm text-secondary-600">
          <Truck className="w-4 h-4 mr-2 text-accent-600" />
          <span>Free shipping for orders over 50TND</span>
        </div>
        <div className="flex items-center text-sm text-secondary-600">
          <ShieldCheck className="w-4 h-4 mr-2 text-accent-600" />
          <span>Secure checkout process</span>
        </div>
      </div>
      
      <button 
        type="submit" 
        className="btn btn-primary w-full"
      >
        Complete Order
      </button>
    </form>
  );
};

export default CheckoutForm;