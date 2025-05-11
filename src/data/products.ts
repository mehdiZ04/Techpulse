import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'c1',
    name: 'AirPods Pro',
    image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    slug: 'airpods-pro'
  },
  {
    id: 'c2',
    name: 'AirPods 3',
    image: 'https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    slug: 'airpods-3'
  },
  {
    id: 'c3',
    name: 'AirPods Sport',
    image: 'https://images.pexels.com/photos/5081399/pexels-photo-5081399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    slug: 'airpods-sport'
  }
];

export const products: Product[] = [
  {
    id: 'p1',
    name: 'AirPods Pro (2nd Generation)',
    category: 'airpods-pro',
    price: 249.99,
    discountPrice: 199.99,
    images: [
      'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5081399/pexels-photo-5081399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    colors: ['#FFFFFF'],
    description: 'Experience the next level of active noise cancellation with the AirPods Pro. Featuring personalized spatial audio, adaptive transparency, and all-day comfort, these premium earbuds deliver an unmatched listening experience.',
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
    stock: 999999,
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
    name: 'AirPods (3rd Generation)',
    category: 'airpods-3',
    price: 179.99,
    discountPrice: 159.99,
    images: [
      'https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5081399/pexels-photo-5081399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    colors: ['#FFFFFF'],
    description: 'The all-new AirPods deliver an unparalleled wireless experience. With spatial audio, longer battery life, and an all-new contoured design, they\'re perfect for all-day listening.',
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
    stock: 999999,
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
  {
    id: 'p3',
    name: 'AirPods Sport',
    category: 'airpods-sport',
    price: 199.99,
    images: [
      'https://images.pexels.com/photos/5081399/pexels-photo-5081399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    colors: ['#000000', '#FFFFFF', '#FF3B30'],
    description: 'Designed for athletes and fitness enthusiasts, the AirPods Sport deliver premium sound quality while staying securely in place during intense workouts. With enhanced sweat and water resistance, they\'re your perfect workout companion.',
    features: [
      'Secure-fit ear hooks',
      'Enhanced sweat and water resistance (IPX7)',
      'Advanced noise isolation',
      'Transparency mode for awareness',
      'Up to 36 hours of battery life with case',
      'Quick charging: 5 minutes for 1 hour of playback',
      'Custom high-excursion Apple driver'
    ],
    specifications: {
      'Battery Life': 'Up to 9 hours (36 with case)',
      'Connectivity': 'Bluetooth 5.3',
      'Water Resistance': 'IPX7',
      'Controls': 'Touch control',
      'Features': 'Transparency mode, Voice assistant',
      'Dimensions': '33.3mm × 24.0mm × 26.0mm (each)',
      'Weight': '5.8g (each)'
    },
    stock: 999999,
    reviews: [
      {
        id: 'r5',
        user: 'Yasmine K.',
        rating: 5,
        comment: 'Perfect for running! They stay in place and the sound is amazing.',
        date: '2025-04-20'
      },
      {
        id: 'r6',
        user: 'Omar F.',
        rating: 5,
        comment: 'Great for workouts. The battery life is impressive and theyre very comfortable.',
        date: '2025-03-15'
      }
    ],
    rating: 4.9,
    isNew: true,
    isFeatured: true
  }
];