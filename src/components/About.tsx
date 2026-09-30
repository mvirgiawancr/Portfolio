const stack = [
  { group: "Front end", items: ["TypeScript", "React", "Next.js", "Tailwind CSS"] },
  { group: "Back end", items: ["Node.js", "Express.js", "PostgreSQL", "Laravel"] },
  { group: "On-chain", items: ["Solidity", "Foundry", "Hyperledger Fabric"] },
  { group: "Motion", items: ["GSAP", "Puppeteer", "ffmpeg"] },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-[88rem] px-4 sm:px-8">
        <h2 className="max-w-[24ch] text-[clamp(1.75rem,4.2vw,3.75rem)] leading-[1.08] font-semibold tracking-[-0.03em]">
          I take an idea from rough sketch to <span className="mark">something people can use</span>: the interface,
          the backend, the smart contract when it needs one, and a short film that shows what it does.
        </h2>

        <div className="mt-16 grid gap-10 sm:mt-24 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((s) => (
            <div key={s.group} className="border-t border-ink pt-4">
              <h3 className="font-mono text-xs font-normal uppercase tracking-widest text-ink-2">{s.group}</h3>
              <ul className="mt-4 space-y-1.5 text-lg">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
