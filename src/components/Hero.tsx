import Link from "next/link";
import { site } from "@/data/site";

/** Full-bleed opening frame: the still, a slate row, one line of type, one way in. */
export function Hero() {
  return (
    <section className="relative isolate flex min-h-svh flex-col overflow-hidden bg-ink text-paper">
      {/* The still, with a slow push in and a scrim that lands on ink so the next section continues it */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero/dawn.jpg"
          alt="Dawn over the highlands of Bandung, layered ridges fading into haze"
          className="kenburns h-full w-full object-cover object-[56%_45%]"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/40" />
        <div className="absolute inset-0 bg-[radial-gradient(115%_75%_at_68%_40%,transparent_30%,oklch(16.5%_0.014_240/0.55)_100%)]" />
      </div>

      <div className="mx-auto flex w-full max-w-[96rem] flex-1 flex-col px-5 pt-20 pb-10 sm:px-10 sm:pt-24 sm:pb-14">
        {/* Slate: the facts a title card carries, on one rule */}
        <dl
          className="rise grid grid-cols-[3.5rem_minmax(0,1fr)] gap-x-4 gap-y-1.5 border-b border-paper/15 pb-3 sm:flex sm:flex-wrap sm:items-baseline sm:gap-x-8 sm:gap-y-2"
          style={{ "--i": 0 } as React.CSSProperties}
        >
          <div className="contents sm:flex sm:gap-3">
            <dt className="label text-paper/40">Name</dt>
            <dd className="label text-paper/85">{site.name}</dd>
          </div>
          <div className="contents sm:flex sm:gap-3">
            <dt className="label text-paper/40">Role</dt>
            <dd className="label text-paper/85">{site.role}</dd>
          </div>
          <div className="contents sm:flex sm:gap-3 sm:ml-auto">
            <dt className="label text-paper/40">Based</dt>
            <dd className="label text-paper/85">Bandung</dd>
          </div>
        </dl>

        <div className="mt-auto pt-14 sm:pt-16">
          <h1
            className="rise max-w-[16ch] text-[clamp(2.5rem,10.5vw,7.5rem)] leading-[0.95] tracking-[-0.025em] text-balance"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            Small products, built <em className="text-ember not-italic">end to end.</em>
          </h1>

          <div className="mt-7 flex flex-col gap-6 sm:mt-9 md:flex-row md:items-end md:justify-between md:gap-10">
            <p
              className="rise max-w-lg text-[0.95rem] leading-relaxed text-paper/70 sm:text-lg"
              style={{ "--i": 2 } as React.CSSProperties}
            >
              I&apos;m {site.short}. I build web apps, AI features and smart contracts, then shoot the launch video.
              Most of it starts as a hackathon brief with a deadline I can&apos;t move.
            </p>

            <div
              className="rise flex flex-col items-start gap-3 sm:flex-row sm:items-baseline sm:gap-8"
              style={{ "--i": 3 } as React.CSSProperties}
            >
              <Link
                href="#work"
                className="group inline-flex items-baseline gap-3 border-b border-ember pb-1 text-lg text-paper"
              >
                See the work
                <span aria-hidden className="text-ember transition-transform duration-300 group-hover:translate-y-0.5">
                  ↓
                </span>
              </Link>
              <a href={`mailto:${site.email}`} className="link-line text-sm text-paper/60 hover:text-paper sm:text-base">
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
