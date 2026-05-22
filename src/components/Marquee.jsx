export default function Marquee({ words, className = '' }) {
  const content = words.join(' \u2022 ');
  return (
    <div className={`relative overflow-hidden border-y border-line bg-primary py-4 ${className}`}>
      <div className="flex w-[200%] animate-marquee whitespace-nowrap">
        <span className="display block w-1/2 px-6 text-3xl text-white/10 sm:text-5xl md:text-6xl">
          {content} &bull; {content} &bull;{' '}
        </span>
        <span aria-hidden className="display block w-1/2 px-6 text-3xl text-white/10 sm:text-5xl md:text-6xl">
          {content} &bull; {content} &bull;{' '}
        </span>
      </div>
    </div>
  );
}
