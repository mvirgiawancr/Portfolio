import { services, site } from "@/data/site";

export function Services() {
  return (
    <section id="services" className="border-t border-rule bg-paper-2 py-24 sm:py-32">
      <div className="mx-auto grid max-w-[88rem] gap-12 px-4 sm:px-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-[clamp(2.25rem,5vw,4.5rem)] leading-[0.98] font-bold tracking-[-0.04em]">
            What I can take off your plate
          </h2>
          <p className="mt-6 max-w-md text-lg text-ink-2">
            Every project is scoped and quoted after a short chat, so you know exactly what you&apos;re getting before we begin.
          </p>
          <a
            href={site.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="link-line mt-8 inline-block font-medium"
          >
            Not sure which one? Book a 30-min call ↗
          </a>
        </div>

        <ul>
          {services.map((s) => (
            <li
              key={s.title}
              className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-6 gap-y-2 border-b border-rule py-7 first:pt-0 sm:py-8"
            >
              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{s.title}</h3>
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent(s.title)}`}
                className="link-line row-span-2 self-start whitespace-nowrap font-mono text-sm"
              >
                Get a quote ↗
              </a>
              <p className="max-w-lg text-ink-2">{s.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
