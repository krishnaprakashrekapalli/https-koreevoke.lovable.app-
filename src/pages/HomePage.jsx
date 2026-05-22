import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';
import Marquee from '../components/Marquee.jsx';
import { products } from '../data/products.js';

const heroCards = [
  { label: 'GRIND SEASON', title: 'Train Hard. Stay Relentless.', sub: 'Breathable vest' },
  { label: 'NO EXCUSES', title: 'Lift. Sweat. Repeat.', sub: 'Transition-ready suits' },
  { label: 'BEAST MODE', title: 'Push Beyond Limits', sub: 'Join KORE' },
];

const marqueeWords = [
  'POWER', 'GRIND', 'HUSTLE', 'STRENGTH', 'BEAST MODE',
  'NO LIMITS', 'PUSH', 'ELEVATE', 'RELENTLESS', 'UNSTOPPABLE',
  'KORE', 'TRAIN HARD',
];

export default function HomePage() {
  const newArrivals = products.filter((p) => p.category === 'Activewear').slice(0, 4);
  const bestSellers = products;

  return (
    <>
      {/* Hero: split-card layout */}
      <section className="mx-auto max-w-6xl px-4 pt-4">
        <div className="grid gap-3 md:grid-cols-3">
          {/* Big left card */}
          <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-3xl bg-elevated md:aspect-auto md:h-[520px]">
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1400&q=80"
              alt="Summer Essentials"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/70" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <h1 className="display text-5xl text-white drop-shadow-lg sm:text-6xl md:text-7xl">
                Summer Essentials<br />— Shop Men
              </h1>
              <Link to="/" className="pill-dark mt-6">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-white text-primary">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-3 w-3">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                Gear Up
              </Link>
            </div>
          </div>

          {/* Right card */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-elevated md:aspect-auto md:h-[520px]">
            <img
              src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900&q=80"
              alt="For Men: Summer"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end gap-3">
              <button
                type="button"
                className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-primary"
                aria-label="Explore"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5">
                  <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div>
                <h2 className="text-lg font-bold text-white">For Men: Summer</h2>
                <p className="text-xs text-white/80">Heat ready comfort suits your movement</p>
              </div>
            </div>
          </div>
        </div>

        {/* Three label strip below hero */}
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {heroCards.map((c, i) => (
            <div
              key={c.label}
              className={`border-t pt-4 ${i === 1 ? 'border-brand' : 'border-line'}`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                {c.label}
              </p>
              <p className="mt-2 text-base font-semibold text-white">{c.title}</p>
              <p className="text-xs text-muted">{c.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section id="shop" className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <span className="section-label">Drop 01</span>
            <h2 className="display mt-3 text-5xl text-white sm:text-6xl md:text-7xl">New Arrivals</h2>
          </div>
          <Link to="/" className="pill-dark hidden sm:inline-flex">
            Explore Activewear
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {newArrivals.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Marquee */}
      <Marquee words={marqueeWords} />

      {/* Brand statement (centered display headline) */}
      <section className="mx-auto max-w-5xl px-4 py-24 text-center">
        <h2 className="display text-6xl text-white sm:text-7xl md:text-8xl">
          Take the<br />First Step
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-sm text-muted sm:text-base">
          Every journey begins with a decision, to move forward and push beyond limits even when
          it&rsquo;s not easy. KORE exists for those decisions — performance essentials for
          everyone ready to begin.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link to="/" className="pill-light">Shop Men</Link>
          <button type="button" className="pill-ghost">Women — Coming Soon</button>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <span className="section-label">Top Picks</span>
            <h2 className="display mt-3 text-5xl text-white sm:text-6xl md:text-7xl">Best Sellers</h2>
          </div>
          <Link to="/" className="pill-dark hidden sm:inline-flex">
            Discover all items
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {bestSellers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Bottom marquee */}
      <Marquee words={['NO EXCUSES', 'PUSH LIMITS', 'TAKE THE FIRST STEP', 'PERFORMANCE', 'STRENGTH', 'KORE']} />
    </>
  );
}
