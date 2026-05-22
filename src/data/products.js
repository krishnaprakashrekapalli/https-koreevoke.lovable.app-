export const products = [
  {
    id: 1,
    name: 'Compression Performance Tee',
    price: 39.0,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    category: 'Activewear',
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
    name: 'Active Training Joggers',
    price: 69.0,
    image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800&q=80',
    category: 'Activewear',
    rating: 4.9,
    reviews: 312,
    description:
      'Tapered training joggers with bonded ankle zips and a hidden phone pocket. Built for the gym, finished for the street.',
    specs: {
      Material: '88% Nylon / 12% Spandex',
      Fit: 'Tapered, mid-rise',
      Care: 'Machine wash cold',
      Origin: 'Made in Vietnam',
    },
  },
  {
    id: 3,
    name: 'Ribbed Training Vest',
    price: 34.0,
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80',
    category: 'Activewear',
    rating: 4.7,
    reviews: 178,
    description:
      'Breathable ribbed vest with a relaxed armhole for unrestricted range of motion. Quick-drying and built to layer.',
    specs: {
      Material: '92% Cotton / 8% Elastane',
      Fit: 'Relaxed',
      Care: 'Machine wash cold',
      Origin: 'Made in Portugal',
    },
  },
  {
    id: 4,
    name: 'Pro Training Shorts',
    price: 45.0,
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&q=80',
    category: 'Activewear',
    rating: 4.8,
    reviews: 156,
    description:
      'Lightweight 7-inch training shorts with an inner liner and side pockets. Built for sprint sessions, lifting, and recovery walks.',
    specs: {
      Material: '100% Recycled Polyester',
      Fit: 'Athletic, 7" inseam',
      Care: 'Machine wash cold',
      Origin: 'Made in Vietnam',
    },
  },
];

export function getProductById(id) {
  return products.find((p) => String(p.id) === String(id));
}
