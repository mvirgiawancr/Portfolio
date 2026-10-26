import Link from "next/link";
import type { Project } from "@/data/projects";

function Meta({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-paper/15 pt-3">
      <dt className="label text-paper/40">{label}</dt>
      <dd className="mt-2">{children}</dd>
    </div>
  );
}

export function ProjectDetail({ project, next }: { project: Project; next: Project }) {
  return (
    <article className="bg-ink pt-24 text-paper sm:pt-32">
      <div className="mx-auto max-w-[96rem] px-5 sm:px-10">
        <Link href="/projects" className="link-line text-sm text-paper/55 hover:text-paper">
          ← All work
        </Link>

        <h1 className="mt-7 text-[clamp(2.5rem,10vw,8.5rem)] leading-[0.92] tracking-[-0.03em]">
          {project.title}
        </h1>
        <p className="mt-4 max-w-[28ch] text-[clamp(1.25rem,2.6vw,2.25rem)] leading-tight text-ember">
          {project.tagline}
        </p>

        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 text-sm sm:mt-12 sm:grid-cols-4 sm:gap-x-8 sm:text-base">
          <Meta label="Type">{project.kind}</Meta>
          <Meta label="Year">{project.year}</Meta>
          <Meta label="Role">{project.role}</Meta>
          <Meta label="Stack">{project.stack.join(", ")}</Meta>
        </dl>

        {project.links.length > 0 && (
          <ul className="mt-9 flex flex-wrap gap-x-8 gap-y-3">
            {project.links.map((l, i) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    i === 0
                      ? "inline-block border-b border-ember pb-1"
                      : "link-line inline-block pb-1 text-paper/60 hover:text-paper"
                  }
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Hero media */}
      <div className="mx-auto mt-12 max-w-[96rem] px-5 sm:mt-14 sm:px-10">
        <figure className="overflow-hidden border border-paper/15 bg-paper/5">
          {project.video ? (
            <video
              src={project.video}
              poster={project.videoPoster ?? project.cover}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="aspect-[4/3] w-full object-cover sm:aspect-[16/9]"
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={project.hero ?? project.cover} alt={`${project.title} screenshot`} className="w-full" />
          )}
        </figure>
      </div>

      {/* Story */}
      <div className="mx-auto mt-20 grid max-w-[96rem] gap-8 px-5 sm:mt-28 sm:px-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <p className="text-[clamp(1.25rem,2.4vw,2rem)] leading-snug tracking-[-0.01em] lg:sticky lg:top-24 lg:self-start">
          {project.summary}
        </p>
        <div className="space-y-5 text-base leading-relaxed text-paper/65 sm:text-lg">
          {project.story.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>

      {/* Highlights */}
      <div className="mx-auto mt-20 max-w-[96rem] px-5 sm:mt-28 sm:px-10">
        <h2 className="text-[clamp(1.75rem,3.4vw,2.75rem)] leading-tight tracking-[-0.02em]">
          Details worth a look
        </h2>
        <ul className="mt-7 grid gap-x-12 md:grid-cols-2">
          {project.highlights.map((h) => (
            <li key={h} className="border-t border-paper/15 py-4 text-base sm:py-5 sm:text-lg">
              {h}
            </li>
          ))}
        </ul>
      </div>

      {/* Screens */}
      {project.shots.length > 0 && (
        <div className="mx-auto mt-20 grid max-w-[96rem] gap-x-6 gap-y-10 px-5 sm:mt-28 sm:px-10 md:grid-cols-2">
          {project.shots.map((s) => (
            <figure key={s.src} className={s.wide ? "md:col-span-2" : ""}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.src} alt={s.caption} loading="lazy" className="w-full border border-paper/15" />
              <figcaption className="mt-3 max-w-xl text-sm text-paper/50">{s.caption}</figcaption>
            </figure>
          ))}
        </div>
      )}

      {/* Next project */}
      <Link
        href={`/projects/${next.slug}`}
        className="group mt-24 block border-t border-paper/15 py-12 transition-colors duration-300 hover:bg-ember hover:text-ink sm:mt-32 sm:py-16"
      >
        <div className="mx-auto max-w-[96rem] px-5 sm:px-10">
          <p className="label text-paper/40 group-hover:text-ink/60">Next project</p>
          <p className="mt-3 flex items-baseline justify-between gap-6 text-[clamp(2rem,7.5vw,6rem)] leading-none tracking-[-0.03em]">
            {next.title}
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </p>
        </div>
      </Link>
    </article>
  );
}
