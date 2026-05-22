import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore.js';
import { formatINR } from '../utils/currency.js';

export default function CartPage() {
  const items = useCartStore((s) => s.items);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeFromCart = useCartStore((s) => s.removeFromCart);
  const clearCart = useCartStore((s) => s.clearCart);
  const subtotal = useCartStore((s) => s.subtotal());

  // India: free shipping over ₹999, else flat ₹99. 18% GST.
  const shipping = subtotal > 0 ? (subtotal > 999 ? 0 : 99) : 0;
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-3xl font-bold text-white">Your cart is empty</h1>
        <p className="mt-2 text-muted">Start with a featured piece from the shop.</p>
        <Link to="/" className="btn-primary mt-8">Browse products</Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold text-white">Cart</h1>

      <div className="mt-8 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="overflow-hidden rounded-xl border border-line bg-surface">
            <table className="w-full text-sm text-white">
              <thead className="bg-elevated text-left text-xs uppercase tracking-wide text-muted">
                <tr>
                  <th className="px-4 py-3">Product</th>
                  <th className="px-4 py-3">Qty</th>
                  <th className="px-4 py-3 text-right">Price</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {items.map((item) => (
                  <tr key={item.id}>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <img src={item.image} alt={item.name} className="h-16 w-16 rounded object-cover" />
                        <div>
                          <Link to={`/product/${item.id}`} className="font-medium text-white hover:underline">
                            {item.name}
                          </Link>
                          <p className="text-xs text-muted">{item.category}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="inline-flex items-center rounded-lg border border-line bg-primary">
                        <button
                          className="px-2 py-1"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          className="px-2 py-1"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-right font-medium">
                      {formatINR(item.price * item.quantity)}
                    </td>
                    <td className="px-4 py-4 text-right">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-muted hover:text-white"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button
            onClick={clearCart}
            className="mt-4 text-xs text-muted hover:text-white"
          >
            Clear cart
          </button>
        </div>

        <aside className="h-fit rounded-xl border border-line bg-surface p-6">
          <h2 className="text-lg font-semibold text-white">Order summary</h2>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted">Subtotal</dt>
              <dd className="text-white">{formatINR(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted">Shipping</dt>
              <dd className="text-white">{shipping === 0 ? 'Free' : formatINR(shipping)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted">GST (18%)</dt>
              <dd className="text-white">{formatINR(tax)}</dd>
            </div>
            <div className="mt-3 flex justify-between border-t border-line pt-3 text-base font-semibold text-white">
              <dt>Total</dt>
              <dd>{formatINR(total)}</dd>
            </div>
          </dl>
          <Link to="/checkout" className="btn-primary mt-6 w-full">
            Checkout
          </Link>
        </aside>
      </div>
    </section>
  );
}
