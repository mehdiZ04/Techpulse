import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'c1',
    name: 'JoyRoom JR-T03S Air TWS Wireless Earphones',
    image: '/air3.jpg',
    slug: 'airpods-pro'
  },
  {
    id: 'c2',
    name: 'Écouteurs sans fil V5.2 Joyroom JR-T03S Pro ANC TWS',
    image: '/pro1.jpg',
    slug: 'airpods-3'
  },
  
];

export const products: Product[] = [
  {
    id: 'p1',
    name: 'JoyRoom JR-T03S Air TWS Wireless Earphones',
    category: 'airpods-3',
    price: 100.99,
    discountPrice: 69.99,
    images: [
      '/air3.jpg'
    ],
    colors: ['#FFFFFF'],
    
    description: 'The all-new AirPods deliver an unparalleled wireless experience. With spatial audio, longer battery life, and an all-new contoured design, they\'re perfect for all-day listening.',
    features: [
      'Active Noise Cancellation',
      'Adaptive Transparency mode',
      'Personalized Spatial Audio',
      'Up to 30 hours of listening time with charging case',
      'Sweat and water resistant (IPX4)',
      'Force sensor controls',
      'Automatic switching between devices'
    ],
    specifications: {
      'Battery Life': 'Up to 6 hours (30 with case)',
      'Connectivity': 'Bluetooth 5.3',
      'Noise Cancellation': 'Active + Adaptive Transparency',
      'Controls': 'Force sensor, touch control',
      'Water Resistance': 'IPX4',
      'Dimensions': '21.8mm × 30.9mm × 24.0mm (each)',
      'Weight': '5.3g (each)'
    },
    stock: 'en stock',
    reviews: [
      {
        id: 'r1',
        user: 'Ahmed K.',
        rating: 5,
        comment: 'Best noise cancellation Ive ever experienced. Worth every penny!',
        date: '2025-05-10'
      },
      {
        id: 'r2',
        user: 'Nadia T.',
        rating: 5,
        comment: 'The spatial audio feature is incredible. Makes movies and music come alive.',
        date: '2025-04-28'
      }
    ],
    rating: 4.8,
    isNew: true,
    isFeatured: true
  },
  {
    id: 'p2',
    name: 'Écouteurs sans fil V5.2 Joyroom JR-T03S Pro ANC TWS',
    category: 'airpods-pro',
    price: 120.00,
    discountPrice: 79.99,
    images: [
      '/pro1.jpg',
      '/pro2.jpg',
      '/pro3.jpg'
    ],
    colors: ['#FFFFFF'],
    description: 'Experience the next level of active noise cancellation with the AirPods Pro. Featuring personalized spatial audio, adaptive transparency, and all-day comfort, these premium earbuds deliver an unmatched listening experience.',
    features: [
      'Spatial audio with dynamic head tracking',
      'Adaptive EQ',
      'Force sensor controls',
      'Up to 30 hours of listening time with charging case',
      'Sweat and water resistant',
      'One-tap setup',
      'Automatic switching between devices'
    ],
    specifications: {
      'Battery Life': 'Up to 6 hours (30 with case)',
      'Connectivity': 'Bluetooth 5.0',
      'Audio Features': 'Spatial audio, Adaptive EQ',
      'Controls': 'Force sensor',
      'Water Resistance': 'IPX4',
      'Dimensions': '30.79mm × 18.26mm × 19.21mm (each)',
      'Weight': '4.28g (each)'
    },
    stock: 'en stock',
    reviews: [
      {
        id: 'r3',
        user: 'Mehdi B.',
        rating: 5,
        comment: 'Great upgrade from the previous generation. Sound quality is fantastic!',
        date: '2025-05-15'
      },
      {
        id: 'r4',
        user: 'Leila M.',
        rating: 4,
        comment: 'Comfortable fit and good battery life. Spatial audio is amazing.',
        date: '2025-05-02'
      }
    ],
    rating: 4.7,
    isNew: true,
    isFeatured: true
  },
  
];