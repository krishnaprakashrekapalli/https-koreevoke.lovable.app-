// Stylized angular "K" mark — matched to the reference image.
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
      {/* Left vertical stroke — slim, slight forward slant */}
      <polygon points="26,6 38,6 34,94 22,94" />
      {/* Upper diagonal — meets the vertical just to its right */}
      <polygon points="82,6 94,6 46,52 36,52" />
      {/* Lower diagonal — mirrors the upper, with a small triangular gap between them */}
      <polygon points="40,56 50,56 90,94 78,94" />
    </svg>
  );
}
