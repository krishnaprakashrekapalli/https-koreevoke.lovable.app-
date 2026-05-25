import Logo from './Logo.jsx';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-primary">
      {/* Mega brand mark */}
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-16">
        <Logo className="h-40 w-auto sm:h-52 md:h-64" />
        <p className="mt-6 text-center text-xs uppercase tracking-[0.3em] text-muted">
          Move with purpose
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 border-t border-line px-4 py-12 sm:grid-cols-4">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Know More</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>Terms &amp; Conditions</li>
            <li>Returns &amp; Exchange</li>
            <li>Privacy Policy</li>
            <li>Cookie Preferences</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Shop</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>New Arrivals</li>
            <li>Bestsellers</li>
            <li>Outerwear</li>
            <li>Accessories</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Support</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>Contact</li>
            <li>Shipping</li>
            <li>Size Guide</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Stay in the loop</h4>
          <p className="mt-4 text-sm text-muted">
            Drops, restocks, and quiet news. No spam.
          </p>
          <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email" className="input" />
            <button type="submit" className="pill-light shrink-0">Join</button>
          </form>
        </div>
      </div>

      <div className="border-t border-line py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} KORE. All rights reserved. &nbsp;·&nbsp; Based worldwide.
      </div>
    </footer>
  );
}
