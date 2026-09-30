import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />

      <section id="work" className="mx-auto max-w-[88rem] px-4 pt-24 pb-24 sm:px-8 sm:pt-32">
        <div className="mb-10 flex items-end justify-between gap-6 sm:mb-14">
          <h2 className="text-[clamp(2.25rem,5vw,4.5rem)] leading-none font-bold tracking-[-0.04em]">
            Selected work
          </h2>
          <Link href="/projects" className="link-line hidden whitespace-nowrap font-medium sm:inline-block">
            All projects
          </Link>
        </div>
        <Projects />
      </section>

      <Services />
      <About />
      <Contact />
    </>
  );
}
