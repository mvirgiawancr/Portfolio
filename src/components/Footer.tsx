import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[88rem] px-4 pt-16 pb-8 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-paper/50">Say hello</p>
            <a
              href={`mailto:${site.email}`}
              className="link-line mt-3 inline-block font-display text-2xl font-semibold sm:text-4xl break-all"
            >
              {site.email}
            </a>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {site.socials.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-nowrap text-paper/70 transition-colors hover:text-hi"
                >
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p
          aria-hidden
          className="mt-16 select-none font-display text-[21vw] leading-[0.8] font-extrabold tracking-[-0.06em] text-paper/[0.07] sm:text-[18vw]"
        >
          Virgiawan
        </p>

        <div className="mt-6 flex flex-col gap-2 border-t border-paper/15 pt-6 text-sm text-paper/50 sm:flex-row sm:justify-between">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <span>
            Designed and built in {site.location.split(",")[0]} ·{" "}
            <Link href="/projects" className="hover:text-paper">
              All work
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
