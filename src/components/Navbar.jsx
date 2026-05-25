import { Link, NavLink, useLocation } from 'react-router-dom';
import { useCartStore } from '../store/cartStore.js';
import Logo from './Logo.jsx';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/?explore', label: 'Explore fits' },
  { to: '/?drops', label: 'Seasonal Drops' },
  { to: '/?new', label: 'New in' },
  { to: '/?about', label: 'About' },
];

export default function Navbar() {
  const totalItems = useCartStore((s) => s.totalItems());
  const { pathname, search } = useLocation();

  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo (small, top-left). mix-blend-mode: screen erases the black
            background of the PNG against the dark page, leaving only the K. */}
        <Link to="/" aria-label="KORE — Home" className="block text-white">
          <Logo className="h-10 w-auto mix-blend-screen" />
        </Link>

        {/* Floating pill nav */}
        <nav className="hidden items-center gap-1 rounded-full border border-line bg-surface/80 p-1 backdrop-blur md:flex">
          {navItems.map((item) => {
            const isActive =
              pathname === '/' && (item.to === '/' ? !search : search.includes(item.to.split('?')[1] ?? ''));
            return (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.to === '/'}
                className={() =>
                  `rounded-full px-4 py-2 text-sm font-semibold transition ${
                    isActive
                      ? 'bg-white text-primary'
                      : 'text-white/80 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Right cluster: search / account / wishlist / bag */}
        <div className="flex items-center gap-2">
          <IconButton ariaLabel="Search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" strokeLinecap="round" />
            </svg>
          </IconButton>
          <IconButton ariaLabel="Account">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21a8 8 0 0 1 16 0" strokeLinecap="round" />
            </svg>
          </IconButton>
          <IconButton ariaLabel="Wishlist">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <path d="M19 14c1.5-1.5 3-3.5 3-6a4 4 0 0 0-8 0 4 4 0 0 0-8 0c0 2.5 1.5 4.5 3 6l5 5 5-5Z" strokeLinejoin="round" />
            </svg>
          </IconButton>

          <Link
            to="/cart"
            className="pill-dark"
            aria-label="Open cart"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <path d="M6 7h12l-1 12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L6 7Z" />
              <path d="M9 7V5a3 3 0 0 1 6 0v2" strokeLinecap="round" />
            </svg>
            BAG / {String(totalItems).padStart(2, '0')}
          </Link>
        </div>
      </div>
    </header>
  );
}

function IconButton({ children, ariaLabel }) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-white transition hover:border-white"
    >
      {children}
    </button>
  );
}
