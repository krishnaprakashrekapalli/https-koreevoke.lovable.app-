export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold">
            KORE<span className="text-accent">.</span>
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Considered fashion, built to last. Designed in studio, made in Europe.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Shop</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li>New Arrivals</li>
            <li>Bestsellers</li>
            <li>Outerwear</li>
            <li>Accessories</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Support</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li>Contact</li>
            <li>Shipping &amp; Returns</li>
            <li>Size Guide</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Koreevoke. All rights reserved.
      </div>
    </footer>
  );
}
