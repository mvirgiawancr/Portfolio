"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Project } from "@/data/projects";

interface ProjectDetailProps {
    project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
    const [imageError, setImageError] = useState(false);

    return (
        <article className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-8"
                >
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-muted font-semibold neo-border-thin neo-shadow neo-hover"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M19 12H5" />
                            <path d="m12 19-7-7 7-7" />
                        </svg>
                        Back to Projects
                    </Link>
                </motion.div>

                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    {/* Project Image */}
                    <div className="neo-border neo-shadow-lg overflow-hidden mb-8">
                        <div className="relative aspect-video bg-accent">
                            {project.image && !imageError ? (
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover object-top"
                                    onError={() => setImageError(true)}
                                    priority
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-9xl font-black text-background/20">
                                        {project.title.charAt(0)}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Title & Meta */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-black mb-3">
                                {project.title}
                            </h1>
                            {project.year && (
                                <span className="inline-block px-3 py-1 bg-accent-tertiary text-foreground font-semibold neo-border-thin">
                                    {project.year}
                                </span>
                            )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                            {project.liveUrl && (
                                <Link
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-foreground text-background font-bold neo-border-thin neo-hover flex items-center gap-2"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        <polyline points="15 3 21 3 21 9" />
                                        <line x1="10" x2="21" y1="14" y2="3" />
                                    </svg>
                                    Live Demo
                                </Link>
                            )}
                            {project.codeUrl && (
                                <Link
                                    href={project.codeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-background text-foreground font-bold neo-border-thin neo-hover flex items-center gap-2"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                        <path d="M9 18c-4.51 2-5-2-7-2" />
                                    </svg>
                                    View Code
                                </Link>
                            )}
                        </div>
                    </div>
                </motion.div>

                {/* Description */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-12"
                >
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                        <span className="w-8 h-1 bg-accent"></span>
                        Tentang Project
                    </h2>
                    <div className="neo-border bg-muted p-6 neo-shadow">
                        <p className="text-lg leading-relaxed whitespace-pre-line">
                            {project.longDescription}
                        </p>
                    </div>
                </motion.div>

                {/* Features */}
                {project.features && project.features.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mb-12"
                    >
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <span className="w-8 h-1 bg-accent-secondary"></span>
                            Fitur Utama
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {project.features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="neo-border-thin bg-background p-4 neo-shadow flex items-start gap-3"
                                >
                                    <span className="w-6 h-6 flex-shrink-0 bg-accent-secondary flex items-center justify-center font-bold text-sm neo-border-thin">
                                        {index + 1}
                                    </span>
                                    <span className="font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Tech Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mb-12"
                >
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                        <span className="w-8 h-1 bg-accent-tertiary"></span>
                        Tech Stack
                    </h2>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3 mb-6">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-4 py-2 text-sm font-bold bg-foreground text-background neo-border-thin"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Tech Details */}
                    {project.techDetails && project.techDetails.length > 0 && (
                        <div className="grid gap-4">
                            {project.techDetails.map((tech, index) => (
                                <div
                                    key={index}
                                    className="neo-border bg-background p-5 neo-shadow flex flex-col md:flex-row md:items-center gap-3"
                                >
                                    <span className="font-bold text-lg min-w-[140px]">
                                        {tech.name}
                                    </span>
                                    <span className="hidden md:block w-px h-8 bg-border"></span>
                                    <span className="text-muted-foreground">
                                        {tech.description}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center"
                >
                    <div className="neo-border bg-accent p-8 neo-shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">
                            Tertarik dengan project ini?
                        </h3>
                        <p className="text-lg mb-6">
                            Lihat demo langsung atau jelajahi source code-nya di GitHub!
                        </p>
                        <div className="flex justify-center gap-4 flex-wrap">
                            {project.liveUrl && (
                                <Link
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-foreground text-background font-bold text-lg neo-border-thin neo-hover"
                                >
                                    Coba Sekarang →
                                </Link>
                            )}
                            <Link
                                href="/projects"
                                className="px-8 py-4 bg-background text-foreground font-bold text-lg neo-border-thin neo-hover"
                            >
                                Lihat Project Lain
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </article>
    );
}
