import { background, stack } from "@/data/site";

export function Background() {
  return (
    <section id="background" className="border-t border-paper/15 bg-ink text-paper">
      <div className="mx-auto max-w-[96rem] px-5 py-20 sm:px-10 sm:py-28">
        <h2 className="max-w-[24ch] text-[clamp(1.75rem,4vw,3.5rem)] leading-[1.08] tracking-[-0.02em]">
          Informatics graduate, <span className="text-ember whitespace-nowrap">cum laude</span>, with a thesis on the
          chain.
        </h2>
        <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-paper/60 sm:text-lg">
          I also spend most weekends in hackathons and design challenges. A brief, a sponsor API and a jury is the
          fastest way I know to find out whether an idea survives contact with real constraints.
        </p>

        <div className="mt-12 grid gap-14 sm:mt-16 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-20">
          <ol>
            {background.map((b) => (
              <li
                key={b.title}
                className="grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-4 border-t border-paper/15 py-6 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-x-8"
              >
                <span className="label pt-1 text-paper/40">{b.year}</span>
                <div>
                  <h3 className="text-lg leading-snug tracking-tight sm:text-xl">{b.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-paper/55 sm:text-base">{b.detail}</p>
                </div>
              </li>
            ))}
          </ol>

          <div>
            <p className="label text-paper/40">Tools I reach for</p>
            <dl className="mt-4">
              {stack.map((s) => (
                <div
                  key={s.group}
                  className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-x-4 border-t border-paper/15 py-3"
                >
                  <dt className="text-sm text-paper/45">{s.group}</dt>
                  <dd className="text-sm sm:text-base">{s.items.join(", ")}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
