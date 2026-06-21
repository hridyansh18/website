// Lucide's package no longer ships trademarked brand glyphs, so these are
// hand-drawn inline SVGs matching the real Instagram / Facebook / YouTube
// logo shapes. They inherit color via `currentColor` so they pick up
// whatever text color class is applied to the parent (e.g. text-gold).

export const InstagramIcon = ({ size = 17, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <rect
      x="2.5"
      y="2.5"
      width="19"
      height="19"
      rx="5.5"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <circle cx="12" cy="12" r="4.4" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
  </svg>
);

export const FacebookIcon = ({ size = 17, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M14.5 8.5h2.25V5.34c-.39-.05-1.72-.17-3.27-.17-3.24 0-5.46 2.04-5.46 5.78v2.8H4.75v3.53h3.27V21.5h3.55v-9.22h3.04l.48-3.53h-3.52V11.4c0-1.02.27-1.9 1.93-1.9Z"
      fill="currentColor"
    />
  </svg>
);

export const YoutubeIcon = ({ size = 17, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M21.8 8.2a3 3 0 0 0-2.1-2.1C17.9 5.5 12 5.5 12 5.5s-5.9 0-7.7.6a3 3 0 0 0-2.1 2.1A31 31 0 0 0 1.6 12a31 31 0 0 0 .6 3.8 3 3 0 0 0 2.1 2.1c1.8.6 7.7.6 7.7.6s5.9 0 7.7-.6a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .6-3.8 31 31 0 0 0-.6-3.8Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path d="M10 9.6 15 12l-5 2.4V9.6Z" fill="currentColor" />
  </svg>
);
