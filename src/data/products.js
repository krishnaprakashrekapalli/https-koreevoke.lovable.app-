export const products = [
  {
    id: 1,
    name: 'Oversized Cotton Tee',
    price: 39.0,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
    category: 'Tops',
    rating: 4.6,
    reviews: 128,
    description:
      'A breathable, drop-shoulder tee made from 100% organic cotton. Pre-washed for a soft, lived-in feel from day one.',
    specs: {
      Material: '100% Organic Cotton',
      Fit: 'Oversized',
      Care: 'Machine wash cold',
      Origin: 'Made in Portugal',
    },
  },
  {
    id: 2,
    name: 'Wide-Leg Denim Trouser',
    price: 89.0,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80',
    category: 'Bottoms',
    rating: 4.8,
    reviews: 91,
    description:
      'High-rise, wide-leg denim cut from rigid Japanese selvedge. Made to soften and shape to you over time.',
    specs: {
      Material: '13.5oz Japanese Selvedge',
      Fit: 'High-rise, wide leg',
      Care: 'Wash sparingly, inside out',
      Origin: 'Made in Japan',
    },
  },
  {
    id: 3,
    name: 'Merino Knit Crewneck',
    price: 119.0,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
    category: 'Knitwear',
    rating: 4.9,
    reviews: 204,
    description:
      'Fine-gauge merino wool in a relaxed crewneck silhouette. Lightweight enough to layer, warm enough to wear alone.',
    specs: {
      Material: '100% Extra-fine Merino Wool',
      Fit: 'Relaxed',
      Care: 'Hand wash or dry clean',
      Origin: 'Knit in Italy',
    },
  },
  {
    id: 4,
    name: 'Leather Penny Loafer',
    price: 195.0,
    image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&q=80',
    category: 'Footwear',
    rating: 4.7,
    reviews: 67,
    description:
      'Hand-finished penny loafers built on a Blake-stitched leather sole. Classic shape, modern proportions.',
    specs: {
      Material: 'Full-grain Italian leather',
      Construction: 'Blake stitch',
      Care: 'Polish monthly',
      Origin: 'Made in Italy',
    },
  },
  {
    id: 5,
    name: 'Structured Wool Overcoat',
    price: 349.0,
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80',
    category: 'Outerwear',
    rating: 4.9,
    reviews: 142,
    description:
      'A long-line overcoat tailored in a Loro Piana wool-cashmere blend. Half-canvas construction for a sharp lapel roll.',
    specs: {
      Material: '90% Wool / 10% Cashmere',
      Fit: 'Tailored, long-line',
      Care: 'Dry clean only',
      Origin: 'Tailored in Portugal',
    },
  },
  {
    id: 6,
    name: 'Minimalist Leather Tote',
    price: 159.0,
    image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&q=80',
    category: 'Accessories',
    rating: 4.5,
    reviews: 58,
    description:
      'An unstructured tote in vegetable-tanned leather. Roomy enough for a 16" laptop and the rest of your day.',
    specs: {
      Material: 'Vegetable-tanned leather',
      Dimensions: '40 × 30 × 12 cm',
      Care: 'Condition every 6 months',
      Origin: 'Made in Spain',
    },
  },
];

export function getProductById(id) {
  return products.find((p) => String(p.id) === String(id));
}
