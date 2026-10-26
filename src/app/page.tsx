import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Stills } from "@/components/Stills";
import { Background } from "@/components/Background";
import { Contact } from "@/components/Contact";
import { projects } from "@/data/projects";

// the home page shows the newest few; /projects has all of them
const SELECTED = 5;

export default function Home() {
  return (
    <>
      <Hero />

      {/* Still on ink: the hero frame simply keeps going into the stills, then the index */}
      <section id="work" className="bg-ink text-paper">
        <Stills limit={SELECTED} />

        <div className="mx-auto max-w-[96rem] px-5 pt-12 pb-20 sm:px-10 sm:pt-16 sm:pb-28">
          <div className="mb-2 flex items-end justify-between gap-6 border-b border-paper/15 pb-4 sm:mb-4">
            <h2 className="text-[clamp(2rem,4.4vw,3.75rem)] leading-[1] tracking-[-0.02em]">Selected work</h2>
            <Link href="/projects" className="link-line mb-1 shrink-0 text-sm text-paper/55 hover:text-paper">
              All {projects.length}
            </Link>
          </div>
          <Projects limit={SELECTED} />
        </div>
      </section>

      <Background />
      <Contact />
    </>
  );
}
