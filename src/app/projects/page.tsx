import type { Metadata } from "next";
import { Projects } from "@/components/Projects";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work · mvirgiawancr",
  description: "Web apps, a smart-contract dApp, a landing page and launch videos, all built end to end.",
};

export default function ProjectsPage() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-[96rem] px-5 pt-24 pb-20 sm:px-10 sm:pt-32 sm:pb-28">
        <h1 className="text-[clamp(2.5rem,9vw,7rem)] leading-[0.94] tracking-[-0.03em]">Work</h1>
        <p className="mt-4 mb-10 max-w-md text-base text-paper/55 sm:mb-12 sm:text-lg">
          {projects.length} projects, each designed, built and launched by me.
        </p>
        <Projects thumbs />
      </div>
    </section>
  );
}
