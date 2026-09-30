import { site } from "@/data/site";

const rows = [
  { label: "Book a 30-min call", value: "calendly.com/mochvirgiawancr", href: site.calendly },
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "Hire me on Contra", value: "contra.com", href: site.socials[0].href },
  { label: "Connect on LinkedIn", value: "linkedin.com/in/mvirgiawancr", href: site.socials[1].href },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-rule py-24 sm:py-32">
      <div className="mx-auto max-w-[88rem] px-4 sm:px-8">
        <h2 className="max-w-[12ch] text-[clamp(3rem,9vw,8rem)] leading-[0.92] font-extrabold tracking-[-0.045em]">
          Have a project? <span className="mark">Let&apos;s talk.</span>
        </h2>

        <ul className="mt-16 sm:mt-24">
          {rows.map((r) => (
            <li key={r.label} className="border-b border-rule first:border-t">
              <a
                href={r.href}
                target={r.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex flex-col gap-1 py-6 transition-[padding,background-color] duration-300 sm:flex-row sm:items-baseline sm:justify-between sm:py-8 md:hover:bg-hi md:hover:px-6"
              >
                <span className="text-2xl font-semibold tracking-tight sm:text-4xl">{r.label}</span>
                <span className="flex items-center gap-3 font-mono text-sm text-ink-2 break-all sm:text-base">
                  {r.value}
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    ↗
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
