export const products = [
  {
    id: 1,
    name: 'Compression Performance Tee',
    price: 39.0,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    category: 'Compression Tee',
    rating: 4.8,
    reviews: 214,
    description:
      'Lightweight compression top engineered for high-intensity training. Four-way stretch with moisture-wicking finish keeps you dry from warm-up to cooldown.',
    specs: {
      Material: '82% Polyester / 18% Elastane',
      Fit: 'Compression',
      Care: 'Machine wash cold, hang dry',
      Origin: 'Engineered in Portugal',
    },
  },
  {
    id: 2,
    name: 'Active Training Track Pant',
    price: 69.0,
    image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800&q=80',
    category: 'Track Pant',
    rating: 4.9,
    reviews: 312,
    description:
      'Tapered training track pants with bonded ankle zips and a hidden phone pocket. Built for the gym, finished for the street.',
    specs: {
      Material: '88% Nylon / 12% Spandex',
      Fit: 'Tapered, mid-rise',
      Care: 'Machine wash cold',
      Origin: 'Made in Vietnam',
    },
  },
  {
    id: 3,
    name: 'Ribbed Gym Vest',
    price: 34.0,
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80',
    category: 'Gym Vest',
    rating: 4.7,
    reviews: 178,
    description:
      'Breathable ribbed gym vest with a relaxed armhole for unrestricted range of motion. Quick-drying and built to layer.',
    specs: {
      Material: '92% Cotton / 8% Elastane',
      Fit: 'Relaxed',
      Care: 'Machine wash cold',
      Origin: 'Made in Portugal',
    },
  },
  {
    id: 4,
    name: 'Boxy Power T-Shirt',
    price: 29.0,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
    category: 'T-Shirt',
    rating: 4.8,
    reviews: 256,
    description:
      'A boxy fit t-shirt cut from heavyweight cotton, made to move. Durable enough for training, clean enough for the street.',
    specs: {
      Material: '100% Heavyweight Cotton',
      Fit: 'Boxy, drop shoulder',
      Care: 'Machine wash cold',
      Origin: 'Made in Portugal',
    },
  },
];

export function getProductById(id) {
  return products.find((p) => String(p.id) === String(id));
}

export const CATEGORIES = ['T-Shirt', 'Compression Tee', 'Track Pant', 'Gym Vest'];
