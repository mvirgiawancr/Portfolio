"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="projects" className="py-32 px-6 bg-muted" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-accent text-background font-semibold neo-border-thin neo-shadow mb-6">
                Featured Work
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-black"
            >
              Selected{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Projects</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-accent-secondary -z-0" />
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/projects"
              className="inline-block mt-6 md:mt-0 px-6 py-3 bg-background font-bold neo-border neo-shadow neo-hover"
            >
              See All Projects →
            </Link>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
