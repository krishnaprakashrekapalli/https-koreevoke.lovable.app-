// Stylized angular "K" mark — used in navbar, footer, favicon.
// Uses currentColor so it inherits text color from the parent.
export default function Logo({ className = '', title = 'KORE' }) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={className}
      fill="currentColor"
    >
      <title>{title}</title>
      {/* Left vertical stroke (slightly angled inward at top & bottom) */}
      <polygon points="22,8 38,8 38,92 22,92" />
      {/* Upper diagonal stroke meeting the vertical at center-right */}
      <polygon points="78,8 92,8 50,50 38,50" />
      {/* Lower diagonal stroke mirroring the upper one */}
      <polygon points="38,50 50,50 92,92 78,92" />
    </svg>
  );
}
