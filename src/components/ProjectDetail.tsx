import Link from "next/link";
import type { Project } from "@/data/projects";

function Meta({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-ink pt-3">
      <dt className="font-mono text-xs uppercase tracking-widest text-ink-2">{label}</dt>
      <dd className="mt-2 text-lg">{children}</dd>
    </div>
  );
}

export function ProjectDetail({ project, next }: { project: Project; next: Project }) {
  return (
    <article className="pt-28 sm:pt-36">
      <div className="mx-auto max-w-[88rem] px-4 sm:px-8">
        <Link href="/projects" className="link-line text-ink-2">
          ← All work
        </Link>

        <h1 className="mt-8 text-[clamp(3.25rem,12vw,11rem)] leading-[0.9] font-extrabold tracking-[-0.05em]">
          {project.title}
        </h1>
        <p className="mt-6 max-w-[28ch] text-[clamp(1.5rem,3vw,2.5rem)] leading-tight font-medium tracking-tight">
          <span className="mark">{project.tagline}</span>
        </p>

        <dl className="mt-14 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          <Meta label="Type">{project.kind}</Meta>
          <Meta label="Year">{project.year}</Meta>
          <Meta label="Role">{project.role}</Meta>
          <Meta label="Stack">{project.stack.join(", ")}</Meta>
        </dl>

        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          {project.links.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  i === 0
                    ? "inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-ink px-6 py-3 font-medium text-paper transition-transform duration-200 hover:-translate-y-0.5"
                    : "link-line inline-block whitespace-nowrap py-3 font-medium"
                }
              >
                {l.label} ↗
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Hero media */}
      <div className="mx-auto mt-14 max-w-[88rem] px-4 sm:px-8">
        <figure className="overflow-hidden border border-rule bg-paper-2">
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
      <div className="mx-auto mt-24 grid max-w-[88rem] gap-14 px-4 sm:mt-32 sm:px-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <p className="text-[clamp(1.5rem,2.6vw,2.25rem)] leading-snug font-semibold tracking-tight lg:sticky lg:top-28 lg:self-start">
          {project.summary}
        </p>
        <div className="space-y-6 text-lg leading-relaxed text-ink-2 sm:text-xl">
          {project.story.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>

      {/* Highlights */}
      <div className="mx-auto mt-24 max-w-[88rem] px-4 sm:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Details worth a look</h2>
        <ul className="mt-10 grid gap-x-12 md:grid-cols-2">
          {project.highlights.map((h) => (
            <li key={h} className="border-t border-rule py-5 text-lg">
              {h}
            </li>
          ))}
        </ul>
      </div>

      {/* Screens */}
      {project.shots.length > 0 && (
        <div className="mx-auto mt-24 grid max-w-[88rem] gap-x-6 gap-y-14 px-4 sm:px-8 md:grid-cols-2">
          {project.shots.map((s) => (
            <figure key={s.src} className={s.wide ? "md:col-span-2" : ""}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.src} alt={s.caption} loading="lazy" className="w-full border border-rule" />
              <figcaption className="mt-3 max-w-xl text-ink-2">{s.caption}</figcaption>
            </figure>
          ))}
        </div>
      )}

      {/* Next project */}
      <Link
        href={`/projects/${next.slug}`}
        className="group mt-28 block border-t border-rule py-14 transition-colors duration-300 hover:bg-hi sm:mt-40 sm:py-20"
      >
        <div className="mx-auto max-w-[88rem] px-4 sm:px-8">
          <p className="text-ink-2">Next project</p>
          <p className="mt-2 flex items-baseline justify-between gap-6 text-[clamp(2.5rem,9vw,8rem)] leading-none font-extrabold tracking-[-0.045em]">
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
