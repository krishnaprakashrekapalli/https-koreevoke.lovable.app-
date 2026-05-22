import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore.js';

export default function ProductCard({ product }) {
  const addToCart = useCartStore((s) => s.addToCart);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group relative block"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-elevated">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <button
          type="button"
          onClick={handleQuickAdd}
          className="pill-light absolute bottom-3 right-3 text-xs opacity-0 transition group-hover:opacity-100"
        >
          Quick Add +
        </button>
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-bold uppercase tracking-wide text-white">{product.name}</h3>
        <div className="mt-1 flex items-center gap-2 text-sm">
          <span className="font-semibold text-white">${product.price.toFixed(2)}</span>
          <span className="text-muted line-through">
            ${(product.price * 1.2).toFixed(2)}
          </span>
        </div>
      </div>
    </Link>
  );
}
