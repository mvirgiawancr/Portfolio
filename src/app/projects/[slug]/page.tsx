import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import { ProjectDetail } from "@/components/ProjectDetail";

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const slugs = getAllProjectSlugs();
    return slugs.map((slug) => ({
        slug: slug,
    }));
}

export async function generateMetadata({
    params,
}: ProjectPageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return {
            title: "Project Not Found | Portfolio",
        };
    }

    return {
        title: `${project.title} | Portfolio`,
        description: project.description,
    };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return <ProjectDetail project={project} />;
}
