// Renders the exact KORE logo image supplied by the user (no recreation).
// File lives in /public so Vite serves it at the site root.
export default function Logo({ className = '', title = 'KORE' }) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}kore-logo.png`}
      alt={title}
      className={className}
      draggable={false}
    />
  );
}
