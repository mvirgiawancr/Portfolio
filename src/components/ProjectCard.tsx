"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);
  const colors = [
    "bg-accent",
    "bg-accent-secondary",
    "bg-accent-tertiary",
  ];
  const colorClass = colors[index % colors.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group h-full"
    >
      <div className="neo-border bg-background neo-shadow-lg neo-hover overflow-hidden h-full flex flex-col">
        {/* Project Image - Clickable to detail page */}
        <Link href={`/projects/${project.slug}`} className="block">
          <div className={`h-48 ${colorClass} relative flex items-center justify-center overflow-hidden border-b-4 border-accent`}>
            {project.image && !imageError ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                onError={() => setImageError(true)}
              />
            ) : (
              <span className="text-6xl font-black text-background/20">
                {project.title.charAt(0)}
              </span>
            )}
          </div>
        </Link>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <Link href={`/projects/${project.slug}`} className="block">
            <h3 className="text-2xl font-bold mb-3 hover:text-accent transition-colors">{project.title}</h3>
          </Link>
          <p className="text-muted-foreground mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm font-medium bg-muted neo-border-thin"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-3 py-1 text-sm font-medium text-muted-foreground">
                +{project.tags.length - 3}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3 mt-auto">
            {/* View Details Button */}
            <Link
              href={`/projects/${project.slug}`}
              className="w-full text-center py-3 bg-accent text-foreground font-semibold neo-border-thin transition-transform hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              View Details →
            </Link>
            
            <div className="flex gap-3">
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-3 bg-foreground text-background font-semibold neo-border-thin transition-transform hover:translate-x-[-2px] hover:translate-y-[-2px]"
                >
                  Live Demo
                </Link>
              )}
              {project.codeUrl && (
                <Link
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-3 bg-background text-foreground font-semibold neo-border-thin transition-transform hover:translate-x-[-2px] hover:translate-y-[-2px]"
                >
                  View Code
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
