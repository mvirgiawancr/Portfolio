export interface ProjectLink {
    label: string;
    href: string;
}

export interface ProjectShot {
    src: string;
    caption: string;
    wide?: boolean;
}

export interface Project {
    slug: string;
    title: string;
    kind: string;
    year: string;
    role: string;
    tagline: string;
    summary: string;
    story: string[];
    highlights: string[];
    stack: string[];
    links: ProjectLink[];
    cover: string;
    video?: string;
    videoPoster?: string;
    hero?: string;
    shots: ProjectShot[];
}

export const projects: Project[] = [
    {
        slug: "sift",
        title: "Sift",
        kind: "AI web app",
        year: "2026",
        role: "Design, development, launch video",
        tagline: "Every review, sorted by what to fix.",
        summary:
            "Paste customer feedback or upload a CSV. Sift groups it into themes, scores each one and puts the problem that hurts most at the top, with a next step.",
        story: [
            "Teams collect reviews, support tickets and survey answers, then never get through them. Sift turns that pile into a short, ranked list.",
            "An AI model groups the responses into themes and scores sentiment. Each theme is ranked by how many people mention it, weighted by how unhappy they are, so the costliest one is pinned to the top with the worst real quote and one concrete action.",
            "The demo runs on Bloomcart, a fictional plant shop. Names, reviews and numbers in the sample are made up, and the sample is pre-analyzed so the whole app can be explored without an API key.",
        ],
        highlights: [
            "Fix-first card: the costliest theme, how often it comes up, and a recommended action",
            "Weekly health score with the change since last week",
            "Every response searchable and filterable, so you can check the grouping yourself",
            "Paste text or import a CSV, up to 200 responses per analysis",
            "Ctrl+K command palette to jump to any page or theme",
            "Per-visitor and daily rate limits to keep a public demo's API bill small",
        ],
        stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "OpenAI-compatible API"],
        links: [
            { label: "Live demo", href: "https://sift.virlabs.my.id" },
            { label: "Source code", href: "https://github.com/mvirgiawancr/sift" },
        ],
        cover: "/work/sift/cover.png",
        video: "/work/sift/scroll.mp4",
        shots: [
            { src: "/work/sift/overview.png", caption: "Overview: the fix-first card, health score and sentiment split.", wide: true },
            { src: "/work/sift/theme.png", caption: "Theme detail: summary, recommended fix, weekly trend and every response in the theme." },
            { src: "/work/sift/feedback.png", caption: "All feedback: search and filter by sentiment or theme." },
        ],
    },
    {
        slug: "pact",
        title: "Pact",
        kind: "Escrow dApp",
        year: "2026",
        role: "Smart contract, web app, visual design, launch video",
        tagline: "Get paid for the work, not the promise.",
        summary:
            "A smart-contract escrow for freelance work. The client locks payment, the freelancer delivers and gets paid. Live on Base Sepolia.",
        story: [
            "Freelancers deliver and then wait weeks to be paid. Clients hesitate to pay upfront because the work might never arrive. Both sides end up trusting a promise.",
            "Pact puts the payment in a contract before the work starts. The client locks it, the freelancer marks the job delivered, the client releases it in one click.",
            "The contract is small on purpose so it is easy to read and hard to misuse: no admin key, no platform wallet, no fee. Only the client and the freelancer can move the money, and only by the rules.",
        ],
        highlights: [
            "If the client goes quiet for 3 days after delivery, the freelancer can claim the payment",
            "If nothing is delivered by the deadline, the client can take the money back",
            "21 automated tests including attack scenarios, 100% coverage",
            "Source verified on-chain, so anyone can read exactly what runs",
            "Web app for both sides: create a pact, deliver, release, claim or refund",
            "Runs on a testnet, so no real money is involved",
        ],
        stack: ["Solidity", "Foundry", "Next.js", "TypeScript", "Base Sepolia"],
        links: [
            { label: "Live demo", href: "https://pact.virlabs.my.id" },
            { label: "Source code", href: "https://github.com/mvirgiawancr/pact" },
            {
                label: "Contract on BaseScan",
                href: "https://sepolia.basescan.org/address/0xe3a8619cE87406E4bB590Ca9FC491b797A40CaDb",
            },
        ],
        cover: "/work/pact/cover.png",
        video: "/work/pact/scroll.mp4",
        shots: [
            { src: "/work/pact/hero.png", caption: "One idea on the page: the vault holds the money until the work is done.", wide: true },
            { src: "/work/pact/app.png", caption: "Create a pact on the left, track every pact you are part of on the right." },
            { src: "/work/pact/rules.png", caption: "Who can move the money, and when, in plain language." },
        ],
    },
    {
        slug: "pocket",
        title: "Pocket",
        kind: "Landing page",
        year: "2026",
        role: "Brand, design, front-end",
        tagline: "Save the change.",
        summary:
            "A landing page for a concept savings app that rounds up every card purchase and tucks the difference away.",
        story: [
            "Pocket is a concept brand, built to show how far a single static page can go without stock photos or device mockups.",
            "The hero stacks product UI cards built purely in CSS. A four-step story walks from spend to round up to pocket to weekly recap, and the FAQ is native details elements.",
            "The waitlist form validates and shows all its states, but nothing is sent anywhere.",
        ],
        highlights: [
            "Product UI cards drawn in CSS, no mockups and no stock photography",
            "Round-up counter and scroll reveals in a few lines of JavaScript",
            "Keyboard accessible, mobile friendly, respects reduced-motion",
            "No build step: plain HTML, CSS and tokens",
        ],
        stack: ["HTML", "CSS", "JavaScript"],
        links: [
            { label: "Live site", href: "https://pocket.virlabs.my.id" },
            { label: "Source code", href: "https://github.com/mvirgiawancr/pocket" },
        ],
        cover: "/work/pocket/cover.png",
        video: "/work/pocket/scroll.mp4",
        shots: [
            { src: "/work/pocket/hero.png", caption: "Hero with the waitlist form and CSS-built product cards.", wide: true },
            { src: "/work/pocket/how.png", caption: "How it works: spend, round up, pocket, recap." },
            { src: "/work/pocket/recap.png", caption: "The weekly recap." },
        ],
    },
    {
        slug: "adem-service",
        title: "Adem Service",
        kind: "Booking app",
        year: "2026",
        role: "Product design and build with Lovable",
        tagline: "Ten WhatsApp messages become one link.",
        summary:
            "A booking flow for a one-man AC technician in Bandung, built for the Contra x Lovable challenge. Customers only see days he is already in their area.",
        story: [
            "Kang Dedi is a fictional client with a real problem. Every booking took 6 to 10 WhatsApp messages, his days zig-zagged across the city, and customers forgot he was coming.",
            "Adem Service covers the whole path from inquiry to confirmed booking: pick a neighborhood, pick a service, get a live price and time on site, then choose a slot that fits around other jobs and the Friday prayer break.",
            "On the owner side, one dashboard shows today's route, the week by area, every automated message and the waitlist. Messages are simulated in the demo; production would use the WhatsApp Business API.",
        ],
        highlights: [
            "Area-aware slots: mornings in the customer's area, afternoons in the center",
            "Reminder the evening before with still on / reschedule, no reply gets flagged",
            "Cancelled slots are offered to the area's waitlist automatically",
            "Owner dashboard with route map, week view, message log and waitlist",
            "Impact numbers are labelled as estimates",
        ],
        stack: ["Lovable", "React", "TypeScript"],
        links: [
            { label: "Live app", href: "https://ademservice.lovable.app" },
            { label: "Owner demo", href: "https://ademservice.lovable.app/demo" },
        ],
        cover: "/work/adem/hero.png",
        hero: "/work/adem/hero.png",
        shots: [
            { src: "/work/adem/list.png", caption: "Services, prices and which area he covers on which day." },
        ],
    },
    {
        slug: "motion",
        title: "Launch videos",
        kind: "Motion",
        year: "2026",
        role: "Story, animation, sound design",
        tagline: "Short films for products.",
        summary:
            "Launch videos and logo stings for my own products and for concept brands, each with its own visual world and original sound.",
        story: [
            "Each video starts from a story rather than a feature list: an unpaid invoice, a locked vault, a payment that finally arrives.",
            "They are built as HTML and GSAP compositions with real UI clips recorded from the live app, rendered frame by frame, with synthesized music and sound effects.",
            "The reel includes launch videos for Pact, Sift and Pocket, an Orbit logo sting and a personal promo.",
        ],
        highlights: [
            "Story first: one recurring visual world per video",
            "Real UI clips recorded from the live product",
            "Deterministic frame render, original synthesized music and SFX",
            "Burned-in subtitles so it works with the sound off",
        ],
        stack: ["HTML", "GSAP", "Puppeteer", "ffmpeg"],
        links: [
            { label: "Contra profile", href: "https://contra.com/moch_virgiawan_caesar_r_w19nvsk6" },
        ],
        cover: "/work/reel/cover.png",
        video: "/work/reel/reel.mp4",
        videoPoster: "/work/reel/cover.png",
        shots: [],
    },
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
    return projects.map((project) => project.slug);
}

export function getNextProject(slug: string): Project {
    const i = projects.findIndex((p) => p.slug === slug);
    return projects[(i + 1) % projects.length];
}
