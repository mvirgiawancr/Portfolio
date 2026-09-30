"use client";

import { useEffect, useRef, useState } from "react";
import { projects, type Project } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

/** The work index: big type rows, with a preview that follows the cursor on desktop. */
export function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const preview = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    let raf = 0;
    const move = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };
    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.16;
      pos.current.y += (target.current.y - pos.current.y) * 0.16;
      if (preview.current) {
        preview.current.style.transform = `translate3d(${pos.current.x + 28}px, ${pos.current.y - 130}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", move, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <ul>
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} onHover={setActive} />
        ))}
      </ul>

      <div
        ref={preview}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-40 hidden md:block"
      >
        <div
          className={`h-[16rem] w-[21rem] overflow-hidden border border-ink bg-paper-2 transition-[opacity,scale] duration-300 ${
            active ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          {projects.map((p) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={p.slug}
              src={p.cover}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-200 ${
                active?.slug === p.slug ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
