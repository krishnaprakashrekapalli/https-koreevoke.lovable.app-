import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../data/products.js';
import { useCartStore } from '../store/cartStore.js';
import { formatINR } from '../utils/currency.js';

export default function ProductPage() {
  const { id } = useParams();
  const product = getProductById(id);
  const navigate = useNavigate();
  const addToCart = useCartStore((s) => s.addToCart);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-white">Product not found</h1>
        <Link to="/" className="btn-primary mt-6">Back to shop</Link>
      </div>
    );
  }

  const handleAdd = () => {
    addToCart(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-sm text-muted hover:text-white"
      >
        ← Back
      </button>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-line bg-surface">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted">{product.category}</p>
          <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">{product.name}</h1>
          <p className="mt-3 text-2xl font-semibold text-white">{formatINR(product.price)}</p>

          <div className="mt-2 flex items-center gap-2 text-sm text-muted">
            <span>★ {product.rating}</span>
            <span aria-hidden>·</span>
            <span>{product.reviews} reviews</span>
          </div>

          <p className="mt-6 text-base leading-relaxed text-white/80">{product.description}</p>

          <div className="mt-8 flex items-center gap-4">
            <div className="inline-flex items-center rounded-lg border border-line bg-surface text-white">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="px-3 py-2 text-lg hover:text-white/80"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="w-10 text-center text-sm font-medium">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="px-3 py-2 text-lg hover:text-white/80"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
            <button onClick={handleAdd} className="btn-primary">
              {added ? 'Added ✓' : 'Add to cart'}
            </button>
            <button className="btn-secondary" type="button" aria-label="Save to wishlist">
              ♡
            </button>
          </div>

          <div className="mt-10">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
              Specifications
            </h2>
            <dl className="mt-3 divide-y divide-line border-y border-line">
              {Object.entries(product.specs).map(([k, v]) => (
                <div key={k} className="flex justify-between py-3 text-sm">
                  <dt className="text-muted">{k}</dt>
                  <dd className="font-medium text-white">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-16 border-t border-line pt-10">
        <h2 className="text-xl font-bold text-white">Customer reviews</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {[
            { name: 'Ava M.', rating: 5, text: 'Beautiful quality, exactly as described. Fit is generous but flattering.' },
            { name: 'Daniel R.', rating: 4, text: 'Lovely material. Shipping took a few extra days but worth the wait.' },
          ].map((r) => (
            <div key={r.name} className="rounded-xl border border-line bg-surface p-5">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-white">{r.name}</p>
                <span className="text-sm text-white">{'★'.repeat(r.rating)}</span>
              </div>
              <p className="mt-2 text-sm text-white/80">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
