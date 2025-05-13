export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  discountPrice?: number;
  images: string[];
  colors?: string[];
  description: string;
  features: string[];
  specifications: {
    [key: string]: string;
  };
  stock: string;
  reviews: Review[];
  rating: number;
  isNew?: boolean;
  isFeatured?: boolean;
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  color?: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  slug: string;
}

export interface ShippingInfo {
  fullName: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  phone: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  shippingInfo: ShippingInfo;
  paymentMethod: string;
  subtotal: number;
  shippingCost: number;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  createdAt: string;
}

export type PaymentMethod = 'cash_on_delivery';