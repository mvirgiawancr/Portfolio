import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

interface Props {
  project: Project;
  onHover?: (project: Project | null) => void;
  /** Inline cover on small screens, for lists with no cursor preview above them. */
  thumb?: boolean;
}

/** One row of the work index. Hover preview is handled by the parent list. */
export function ProjectCard({ project, onHover, thumb }: Props) {
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

        {thumb && (
          <div className="relative col-span-2 mt-3 aspect-[4/3] overflow-hidden border border-paper/15 md:hidden">
            <Image src={project.cover} alt="" fill sizes="100vw" className="object-cover object-top" />
          </div>
        )}
      </Link>
    </li>
  );
}
