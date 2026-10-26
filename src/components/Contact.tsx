import { site } from "@/data/site";

const rows = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  ...site.socials.map((s) => ({
    label: s.label,
    value: s.href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""),
    href: s.href,
  })),
];

export function Contact() {
  return (
    <section id="contact" className="bg-ink text-paper">
      <div className="mx-auto max-w-[96rem] px-5 py-20 sm:px-10 sm:py-28">
        <h2 className="max-w-[15ch] text-[clamp(2.5rem,7.5vw,6.5rem)] leading-[0.95] tracking-[-0.025em]">
          Open to full-time roles.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/65 sm:text-lg">
          Front end, full stack, or anything that needs a smart contract and an interface on top of it. Bandung, or
          remote.
        </p>

        <ul className="mt-12 sm:mt-16">
          {rows.map((r) => (
            <li key={r.href} className="border-b border-paper/15 first:border-t first:border-paper/15">
              <a
                href={r.href}
                target={r.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex flex-col gap-1 py-5 transition-[padding,background-color,color] duration-300 sm:flex-row sm:items-baseline sm:justify-between sm:py-6 md:hover:bg-ember md:hover:px-5 md:hover:text-ink"
              >
                <span className="text-xl tracking-tight sm:text-2xl">{r.label}</span>
                <span className="flex items-center gap-3 text-sm break-all text-paper/55 sm:text-base md:group-hover:text-ink/80">
                  {r.value}
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
