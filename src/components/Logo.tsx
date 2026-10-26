/** Monogram: a film frame with the initial cut out of it. */
export function Logo({ className = "size-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" fill="none" aria-hidden className={className}>
      <rect x="0.5" y="0.5" width="27" height="27" rx="1" className="stroke-current" strokeOpacity="0.45" />
      <path d="M8.5 7.5 14 20.5 19.5 7.5" strokeWidth="1.8" className="stroke-current" strokeLinecap="square" />
      <rect x="8" y="22.5" width="12" height="1.6" className="fill-ember" />
    </svg>
  );
}
