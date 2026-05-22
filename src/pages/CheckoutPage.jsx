import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore.js';

export default function CheckoutPage() {
  const items = useCartStore((s) => s.items);
  const subtotal = useCartStore((s) => s.subtotal());
  const clearCart = useCartStore((s) => s.clearCart);

  const [confirmed, setConfirmed] = useState(null);
  const [form, setForm] = useState({
    email: '',
    name: '',
    address: '',
    city: '',
    zip: '',
    country: 'United States',
    cardNumber: '',
    expiry: '',
    cvc: '',
  });

  const shipping = subtotal > 100 ? 0 : 9.95;
  const tax = +(subtotal * 0.08).toFixed(2);
  const total = +(subtotal + shipping + tax).toFixed(2);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderId = 'KR-' + Math.random().toString(36).slice(2, 8).toUpperCase();
    setConfirmed({ orderId, total });
    clearCart();
  };

  if (confirmed) {
    return (
      <section className="mx-auto max-w-2xl px-4 py-24 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10 text-secondary">
          ✓
        </div>
        <h1 className="mt-6 text-3xl font-bold">Order confirmed</h1>
        <p className="mt-2 text-gray-600">
          Thanks — your order <span className="font-semibold">{confirmed.orderId}</span> for{' '}
          <span className="font-semibold">${confirmed.total.toFixed(2)}</span> is on the way.
        </p>
        <p className="mt-1 text-sm text-gray-500">
          We sent the receipt to your inbox. (Demo only — no real charge was made.)
        </p>
        <Link to="/" className="btn-primary mt-8">Continue shopping</Link>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-3xl font-bold">Nothing to check out</h1>
        <p className="mt-2 text-gray-600">Add a product to your cart first.</p>
        <Link to="/" className="btn-primary mt-8">Browse products</Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold">Checkout</h1>

      <form onSubmit={handleSubmit} className="mt-8 grid gap-10 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <fieldset>
            <legend className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Contact &amp; shipping
            </legend>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <input className="input sm:col-span-2" placeholder="Email" type="email" required value={form.email} onChange={update('email')} />
              <input className="input sm:col-span-2" placeholder="Full name" required value={form.name} onChange={update('name')} />
              <input className="input sm:col-span-2" placeholder="Address" required value={form.address} onChange={update('address')} />
              <input className="input" placeholder="City" required value={form.city} onChange={update('city')} />
              <input className="input" placeholder="ZIP / Postal" required value={form.zip} onChange={update('zip')} />
              <input className="input sm:col-span-2" placeholder="Country" required value={form.country} onChange={update('country')} />
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Payment
            </legend>
            <p className="mt-1 text-xs text-gray-500">Demo only — do not enter a real card.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <input className="input sm:col-span-2" placeholder="Card number" required value={form.cardNumber} onChange={update('cardNumber')} />
              <input className="input" placeholder="MM / YY" required value={form.expiry} onChange={update('expiry')} />
              <input className="input" placeholder="CVC" required value={form.cvc} onChange={update('cvc')} />
            </div>
          </fieldset>
        </div>

        <aside className="h-fit rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold">Order summary</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {items.map((i) => (
              <li key={i.id} className="flex justify-between">
                <span className="text-gray-700">
                  {i.name} <span className="text-gray-400">× {i.quantity}</span>
                </span>
                <span>${(i.price * i.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <dl className="mt-4 space-y-2 border-t border-gray-200 pt-4 text-sm">
            <div className="flex justify-between">
              <dt className="text-gray-600">Subtotal</dt>
              <dd>${subtotal.toFixed(2)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-600">Shipping</dt>
              <dd>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-600">Tax</dt>
              <dd>${tax.toFixed(2)}</dd>
            </div>
            <div className="mt-2 flex justify-between border-t border-gray-200 pt-2 text-base font-semibold">
              <dt>Total</dt>
              <dd>${total.toFixed(2)}</dd>
            </div>
          </dl>
          <button type="submit" className="btn-primary mt-6 w-full">
            Place order
          </button>
        </aside>
      </form>
    </section>
  );
}
