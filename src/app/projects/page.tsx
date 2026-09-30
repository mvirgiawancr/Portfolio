import type { Metadata } from "next";
import { Projects } from "@/components/Projects";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work · Virgiawan",
  description: "Web apps, a smart-contract dApp, a landing page and launch videos, all built end to end.",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-[88rem] px-4 pt-32 pb-24 sm:px-8 sm:pt-40">
      <h1 className="text-[clamp(3rem,10vw,9rem)] leading-[0.92] font-extrabold tracking-[-0.045em]">Work</h1>
      <p className="mt-6 mb-14 max-w-xl text-lg text-ink-2 sm:text-xl">
        {projects.length} projects, each designed, built and launched by me.
      </p>
      <Projects />
    </section>
  );
}
