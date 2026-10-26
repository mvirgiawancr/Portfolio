import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[96rem] border-t border-paper/15 px-5 pt-12 pb-8 sm:px-10 sm:pt-14">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="label text-paper/40">Elsewhere</p>
            <ul className="mt-3 flex flex-wrap gap-x-7 gap-y-2">
              {site.socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-line whitespace-nowrap text-paper/70 transition-colors hover:text-paper"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <a href={`mailto:${site.email}`} className="link-line text-base break-all text-paper/80 sm:text-lg">
            {site.email}
          </a>
        </div>

        <p
          aria-hidden
          className="mt-14 select-none text-[17vw] leading-[0.86] tracking-[-0.04em] text-paper/[0.07] sm:text-[12vw]"
        >
          {site.short}
        </p>

        <div className="mt-8 flex flex-col gap-1 border-t border-paper/15 pt-5 text-xs text-paper/45 sm:flex-row sm:justify-between sm:text-sm">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <span>
            Bandung, Indonesia ·{" "}
            <Link href="/projects" className="hover:text-paper">
              All work
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
