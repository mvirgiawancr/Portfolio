export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl?: string;
    codeUrl?: string;
    featured?: boolean;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Monity - Finance Tracker AI",
        description:
            "Personal finance tracking web app with AI-powered insights. Features interactive dashboard, multi-account management, transaction categorization, and smart financial analysis using Google Gemini.",
        image: "/Image/monity.png",
        tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Google Gemini AI", "Framer Motion", "Drizzle ORM", "Next Auth"],
        liveUrl: "https://finance-tracker.virlabs.my.id",
        codeUrl: "https://github.com/mvirgiawancr/finance-tracker",
        featured: true,
    },
    {
        id: 2,
        title: "Draftly AI - AI Content Generator",
        description:
            "An AI-powered content generation application that helps creators, marketers, and writers produce high-quality blog posts, social media captions, and marketing copy in seconds.",
        image: "/Image/draftly.png",
        tags: ["Next.js", "Gemini AI", "Tailwind CSS", "Drizzle ORM", "PostgreSQL", "Better Auth"],
        liveUrl: "https://content-generator.virlabs.my.id",
        codeUrl: "https://github.com/mvirgiawancr/ai-content-generator",
        featured: true,
    },
];
