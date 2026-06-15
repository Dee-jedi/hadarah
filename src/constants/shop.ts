export type ShopCategory = 
  | 'All'
  | 'Bedding Collections'
  | 'Pillows & Fillings'
  | 'Duvets'
  | 'Bath Collection'
  | 'Hotel Accessories'
  | 'Hotel Operations'
  | 'Hotel Amenities';

export const SHOP_CATEGORIES: ShopCategory[] = [
  'All',
  'Bedding Collections',
  'Pillows & Fillings',
  'Duvets',
  'Bath Collection',
  'Hotel Accessories',
  'Hotel Operations',
  'Hotel Amenities'
];

export type Product = {
  id: string;
  name: string;
  category: ShopCategory;
  price: string;
  image: string;
  aspectRatio: 'square' | 'portrait' | 'landscape' | 'tall'; // For masonry grid varying heights
};

// Mock data using generic premium hotel images
export const PRODUCTS: Product[] = [
  {
    id: 'prod-001',
    name: '300 Thread Count Premium Sheets',
    category: 'Bedding Collections',
    price: '$120.00',
    image: 'https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'portrait'
  },
  {
    id: 'prod-002',
    name: 'Goose Down Luxury Pillows',
    category: 'Pillows & Fillings',
    price: '$85.00',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'square'
  },
  {
    id: 'prod-003',
    name: 'Plush Spa Bathrobes',
    category: 'Bath Collection',
    price: '$95.00',
    image: 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'tall'
  },
  {
    id: 'prod-004',
    name: 'Siberian Goose Down Duvet',
    category: 'Duvets',
    price: '$350.00',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'landscape'
  },
  {
    id: 'prod-005',
    name: 'Premium Leather Luggage Trolley',
    category: 'Hotel Operations',
    price: '$850.00',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'portrait'
  },
  {
    id: 'prod-006',
    name: 'Bergamot & Vetiver Amenities Kit',
    category: 'Hotel Amenities',
    price: '$24.00',
    image: 'https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'square'
  },
  {
    id: 'prod-007',
    name: 'Silk Decorative Cushions',
    category: 'Hotel Accessories',
    price: '$65.00',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'tall'
  },
  {
    id: 'prod-008',
    name: 'Turkish Cotton Towel Set',
    category: 'Bath Collection',
    price: '$110.00',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'portrait'
  },
  {
    id: 'prod-009',
    name: 'Bamboo Mattress Protector',
    category: 'Bedding Collections',
    price: '$75.00',
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'landscape'
  },
  {
    id: 'prod-010',
    name: 'Housekeeping Utility Cart',
    category: 'Hotel Operations',
    price: '$420.00',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    aspectRatio: 'square'
  }
];
