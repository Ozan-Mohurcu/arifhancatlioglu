// ============================================================================
// İnce çizgi (line) SVG ikon seti — emoji yerine, premium görünüm
// ============================================================================
type P = { className?: string; size?: number };

const base = (size = 20) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export const MapPin = ({ className, size }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const Compass = ({ className, size }: P) => (
  <svg {...base(size)} className={className}>
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

export const Coffee = ({ className, size }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
    <line x1="6" y1="2" x2="6" y2="4" />
    <line x1="10" y1="2" x2="10" y2="4" />
    <line x1="14" y1="2" x2="14" y2="4" />
  </svg>
);

export const Utensils = ({ className, size }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M3 2v7c0 1.1.9 2 2 2h0a2 2 0 0 0 2-2V2" />
    <path d="M5 2v20" />
    <path d="M19 15V2a5 5 0 0 0-3 4.5V11c0 1 1 2 2 2h1Zm0 0v7" />
  </svg>
);

export const Bed = ({ className, size }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M2 4v16" />
    <path d="M2 8h18a2 2 0 0 1 2 2v10" />
    <path d="M2 17h20" />
    <path d="M6 8v9" />
  </svg>
);

export const Heart = ({ className, size }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
  </svg>
);

export const ArrowUpRight = ({ className, size }: P) => (
  <svg {...base(size)} className={className}>
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

export const ChevronDown = ({ className, size }: P) => (
  <svg {...base(size)} className={className}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export const Send = ({ className, size }: P) => (
  <svg {...base(size)} className={className}>
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

export const Chat = ({ className, size }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
  </svg>
);

export const Close = ({ className, size }: P) => (
  <svg {...base(size)} className={className}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const Menu = ({ className, size }: P) => (
  <svg {...base(size)} className={className}>
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

// Marka ikonları (dolgulu)
export const YouTube = ({ className, size = 20 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23 12s0-3.7-.46-5.46a2.78 2.78 0 0 0-1.94-1.94C18.84 4.1 12 4.1 12 4.1s-6.84 0-8.6.5A2.78 2.78 0 0 0 1.46 6.54C1 8.3 1 12 1 12s0 3.7.46 5.46a2.78 2.78 0 0 0 1.94 1.94c1.76.5 8.6.5 8.6.5s6.84 0 8.6-.5a2.78 2.78 0 0 0 1.94-1.94C23 15.7 23 12 23 12Zm-13 3.5v-7l6 3.5Z" />
  </svg>
);

export const Instagram = ({ className, size = 20 }: P) => (
  <svg {...base(size)} className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
  </svg>
);

export const TikTok = ({ className, size = 20 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M16.5 3a5 5 0 0 0 4.5 4.5v3a8 8 0 0 1-4.5-1.4v6.4a6 6 0 1 1-6-6c.34 0 .67.03 1 .08v3.1a3 3 0 1 0 2 2.82V3Z" />
  </svg>
);
