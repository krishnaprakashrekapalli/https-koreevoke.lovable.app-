export default function Marquee({ words, className = '' }) {
  const content = words.join(' \u2022 ');
  // Two identical tracks side-by-side; parent shifts -50% to loop seamlessly.
  return (
    <div className={`relative overflow-hidden border-y border-line bg-primary py-4 ${className}`}>
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="display shrink-0 px-6 text-3xl text-white sm:text-5xl md:text-6xl">
          {content} &nbsp;&bull;&nbsp;
        </span>
        <span aria-hidden className="display shrink-0 px-6 text-3xl text-white sm:text-5xl md:text-6xl">
          {content} &nbsp;&bull;&nbsp;
        </span>
      </div>
    </div>
  );
}
