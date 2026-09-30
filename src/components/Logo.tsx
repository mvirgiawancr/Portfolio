/** Monogram: a V with a highlighter stroke, the same motif used across the site. */
export function Logo({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden className={className}>
      <rect width="32" height="32" rx="8" className="fill-ink" />
      <rect x="8.5" y="18.5" width="15" height="5.5" className="fill-hi" />
      <path d="M8 8.5 16 24 24 8.5" strokeWidth="3.6" className="stroke-paper" />
    </svg>
  );
}
