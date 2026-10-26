import Link from "next/link";
import type { Project } from "@/data/projects";

interface Props {
  project: Project;
  onHover?: (project: Project | null) => void;
}

/** One row of the work index. Hover preview is handled by the parent list. */
export function ProjectCard({ project, onHover }: Props) {
  return (
    <li className="border-b border-paper/15">
      <Link
        href={`/projects/${project.slug}`}
        onMouseEnter={() => onHover?.(project)}
        onMouseLeave={() => onHover?.(null)}
        onFocus={() => onHover?.(project)}
        onBlur={() => onHover?.(null)}
        className="group relative grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-6 gap-y-2 py-6 transition-[padding,background-color,color] duration-300 sm:py-8 md:hover:bg-ember md:hover:px-5 md:hover:text-ink"
      >
        <h3 className="text-[clamp(1.9rem,5.5vw,4rem)] leading-[1.02] tracking-[-0.02em]">{project.title}</h3>
        <span
          aria-hidden
          className="hidden text-xl transition-transform duration-300 group-hover:translate-x-1 sm:block"
        >
          →
        </span>

        <p className="col-span-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-paper/55 transition-colors duration-300 sm:col-span-1 sm:text-base md:group-hover:text-ink/70">
          <span>{project.kind}</span>
          <span>{project.year}</span>
          <span className="hidden lg:inline">{project.stack.slice(0, 3).join(" · ")}</span>
        </p>

        {/* Thumbnail inline on small screens, where there is no cursor preview */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.cover}
          alt=""
          loading="lazy"
          className="col-span-2 mt-3 aspect-[4/3] w-full border border-paper/15 object-cover object-top md:hidden"
        />
      </Link>
    </li>
  );
}
