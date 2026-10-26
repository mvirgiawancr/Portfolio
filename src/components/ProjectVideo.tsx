"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  src: string;
  poster: string;
  className?: string;
}

/** Poster until the clip is on screen; it only plays itself when the visitor has not asked for less motion or less data. */
export function ProjectVideo({ src, poster, className }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    // Asked for less motion or less data: leave it paused with controls instead of autoplaying.
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const save = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData === true;
    if (calm || save) {
      v.autoplay = false;
      v.loop = false;
      v.muted = false;
      v.controls = true;
    }

    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        setArmed(true);
        io.disconnect();
      },
      { rootMargin: "250px" },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={armed ? src : undefined}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      className={className}
    />
  );
}
