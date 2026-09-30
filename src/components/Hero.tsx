import Link from "next/link";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative pt-28 sm:pt-36">
      <div className="mx-auto max-w-[88rem] px-4 sm:px-8">
        <p className="rise font-mono text-xs uppercase tracking-widest text-ink-2" style={{ "--i": 0 } as React.CSSProperties}>
          Full-stack developer · {site.location}
        </p>

        <h1
          className="rise mt-6 max-w-[16ch] text-[clamp(3rem,10.5vw,9.5rem)] leading-[0.92] font-extrabold tracking-[-0.045em]"
          style={{ "--i": 1 } as React.CSSProperties}
        >
          Small products, built <span className="mark">end to end.</span>
        </h1>

        <div className="mt-10 grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <p
            className="rise max-w-xl text-lg leading-relaxed text-ink-2 sm:text-xl"
            style={{ "--i": 3 } as React.CSSProperties}
          >
            I&apos;m Virgiawan. I design and build web apps, AI features and smart contracts, then make the launch
            video. Currently open for freelance work.
          </p>
          <div className="rise flex flex-wrap items-center gap-x-6 gap-y-3" style={{ "--i": 4 } as React.CSSProperties}>
            <a
              href={site.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-ink px-6 py-3.5 font-medium text-paper transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              Book a 30-min call
              <span aria-hidden>↗</span>
            </a>
            <Link href="/projects" className="link-line whitespace-nowrap font-medium">
              See the work
            </Link>
          </div>
        </div>
      </div>


      {/* Real projects: slow auto-scroll, pauses on hover; manual scroll if motion is reduced */}
      <div className="marquee mt-16 pb-4 sm:mt-24">
        <ul className="marquee-track flex w-max items-start">
          {[...projects, ...projects].map((p, i) => (
            <li
              key={`${p.slug}-${i}`}
              aria-hidden={i >= projects.length}
              className="w-[68vw] shrink-0 pr-4 sm:w-[34vw] sm:pr-6 lg:w-[24vw]"
              style={{ marginTop: i % 2 ? "2.5rem" : 0 }}
            >
              <Link
                href={`/projects/${p.slug}`}
                tabIndex={i >= projects.length ? -1 : undefined}
                className="group block"
              >
                <figure className="overflow-hidden border border-rule bg-paper-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.cover}
                    alt={i >= projects.length ? "" : `${p.title} preview`}
                    className="aspect-[4/3] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </figure>
                <p className="mt-3 flex items-baseline justify-between gap-3 text-sm">
                  <span className="font-medium">{p.title}</span>
                  <span className="text-ink-2">{p.kind}</span>
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
