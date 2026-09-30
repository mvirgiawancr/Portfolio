import Link from "next/link";
import type { Project } from "@/data/projects";

interface Props {
  project: Project;
  onHover?: (project: Project | null) => void;
}

/** One row of the work index. Hover preview is handled by the parent list. */
export function ProjectCard({ project, onHover }: Props) {
  return (
    <li className="border-b border-rule first:border-t">
      <Link
        href={`/projects/${project.slug}`}
        onMouseEnter={() => onHover?.(project)}
        onMouseLeave={() => onHover?.(null)}
        onFocus={() => onHover?.(project)}
        onBlur={() => onHover?.(null)}
        className="group relative grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-6 gap-y-4 py-6 transition-[padding,background-color] duration-300 sm:py-9 md:hover:bg-hi md:hover:px-6"
      >
        <h3 className="text-[clamp(2.25rem,7vw,6rem)] leading-none font-bold tracking-[-0.04em]">
          {project.title}
        </h3>
        <span className="hidden text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:block" aria-hidden>
          ↗
        </span>

        <p className="col-span-2 flex flex-wrap gap-x-6 gap-y-1 text-ink-2 sm:col-span-1 sm:text-lg">
          <span>{project.kind}</span>
          <span>{project.year}</span>
          <span className="hidden lg:inline">{project.stack.slice(0, 3).join(" · ")}</span>
        </p>

        {/* Inline thumbnail on touch / small screens */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.cover}
          alt=""
          loading="lazy"
          className="col-span-2 aspect-[16/10] w-full border border-rule object-cover object-top md:hidden"
        />
      </Link>
    </li>
  );
}
