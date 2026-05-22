import { Link, NavLink } from 'react-router-dom';
import { useCartStore } from '../store/cartStore.js';

export default function Navbar() {
  const totalItems = useCartStore((s) => s.totalItems());

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition hover:text-secondary ${
      isActive ? 'text-secondary' : 'text-primary'
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-xl font-bold tracking-tight">
          KORE<span className="text-accent">.</span>
        </Link>
        <nav className="hidden gap-8 sm:flex">
          <NavLink to="/" end className={linkClass}>
            Shop
          </NavLink>
          <NavLink to="/cart" className={linkClass}>
            Cart
          </NavLink>
          <NavLink to="/checkout" className={linkClass}>
            Checkout
          </NavLink>
        </nav>
        <Link
          to="/cart"
          className="relative inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium hover:border-primary"
          aria-label="Open cart"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293A1 1 0 005.414 17H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Cart
          {totalItems > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-accent px-1 text-xs font-semibold text-white">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
