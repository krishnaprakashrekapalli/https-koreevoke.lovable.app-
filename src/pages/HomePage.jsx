import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';
import { products } from '../data/products.js';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:py-28 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-accent">Spring / Summer ’26</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Quietly confident.<br />Built to last.
            </h1>
            <p className="mt-5 max-w-md text-base text-gray-300">
              A focused edit of everyday essentials — cut from natural fibers, finished by hand,
              and priced honestly.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#shop" className="btn-accent">Shop the edit</a>
              <Link to="/cart" className="btn-secondary border-white text-white hover:bg-white hover:text-primary">
                View cart
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&q=80"
              alt="Featured campaign"
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="shop" className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Featured products</h2>
            <p className="mt-1 text-sm text-gray-600">A small selection, considered carefully.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:grid-cols-3">
          {[
            { title: 'Free shipping', body: 'On every order over $100, anywhere in the world.' },
            { title: '30-day returns', body: 'Not what you expected? Send it back, no questions.' },
            { title: 'Made responsibly', body: 'European production, traceable materials, fair wages.' },
          ].map((b) => (
            <div key={b.title}>
              <h3 className="text-base font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{b.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
