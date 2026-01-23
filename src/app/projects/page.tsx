import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects | Portfolio",
  description: "Browse all my projects and see my work in action",
};

export default function ProjectsPage() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="inline-block px-4 py-2 bg-accent text-background font-semibold neo-border-thin neo-shadow mb-6">
            All Projects
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            My{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Work</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-accent-secondary -z-0" />
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A collection of projects I&apos;ve worked on, ranging from web
            applications to design systems. Each project represents a unique
            challenge and learning experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
