export interface Project {
    id: number;
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    tags: string[];
    features?: string[];
    techDetails?: {
        name: string;
        description: string;
    }[];
    liveUrl?: string;
    codeUrl?: string;
    featured?: boolean;
    year?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        slug: "monity-finance-tracker",
        title: "Monity - Personal Finance Tracker",
        description:
            "Personal finance tracking web app with AI-powered insights. Features interactive dashboard, multi-account management, transaction tracking with auto-categorization, and smart financial analysis using Google Gemini AI.",
        longDescription: `Monity adalah aplikasi web pelacak keuangan pribadi yang dilengkapi dengan fitur AI untuk memberikan insight dan analisis keuangan yang cerdas.

Aplikasi ini memungkinkan pengguna untuk mengelola keuangan mereka dengan mudah melalui dashboard interaktif yang menampilkan ringkasan kesehatan finansial, grafik pengeluaran per kategori, dan perbandingan keuangan bulanan. Dengan integrasi Google Gemini AI, Monity dapat memberikan ringkasan keuangan, peringatan pengeluaran, dan tips penghematan yang dipersonalisasi berdasarkan pola pengeluaran pengguna.

Fitur manajemen multi-akun memungkinkan pengguna untuk melacak berbagai sumber keuangan seperti rekening bank, dompet digital (e-wallet), dan uang tunai dalam satu tempat. Setiap transaksi dapat dikategorikan secara otomatis berdasarkan merchant untuk memudahkan analisis pengeluaran.`,
        image: "/Image/monity.png",
        tags: ["Next.js 16", "TypeScript", "Supabase (PostgreSQL)", "Tailwind CSS 4", "Google Gemini AI", "Framer Motion", "Drizzle ORM", "NextAuth v5"],
        features: [
            "Dashboard interaktif dengan visualisasi data keuangan real-time",
            "Manajemen multi-akun (bank, e-wallet, cash)",
            "Tracking transaksi dengan auto-kategorisasi berdasarkan merchant",
            "AI Insights: ringkasan keuangan, spending alerts, dan saving tips menggunakan Google Gemini",
            "Perbandingan keuangan bulanan (monthly comparison)",
            "Dark mode yang nyaman di mata",
            "Autentikasi aman dengan NextAuth v5 (email/password & Google OAuth)"
        ],
        techDetails: [
            {
                name: "Next.js 16",
                description: "Framework React dengan App Router dan Turbopack untuk performa optimal"
            },
            {
                name: "TypeScript",
                description: "Type-safe development untuk mengurangi bug dan meningkatkan developer experience"
            },
            {
                name: "Supabase (PostgreSQL)",
                description: "Database PostgreSQL via Supabase untuk menyimpan data transaksi dan user"
            },
            {
                name: "Google Gemini AI",
                description: "Model AI untuk analisis keuangan dan saran finansial yang dipersonalisasi (monthly summary, spending alerts, saving tips)"
            },
            {
                name: "Drizzle ORM",
                description: "TypeScript ORM untuk query database yang type-safe"
            },
            {
                name: "NextAuth v5",
                description: "Authentication solution dengan dukungan Credentials dan Google OAuth"
            }
        ],
        liveUrl: "https://finance-tracker.virlabs.my.id",
        codeUrl: "https://github.com/mvirgiawancr/finance-tracker",
        featured: true,
        year: "2025"
    },
    {
        id: 2,
        slug: "draftly-ai-content-generator",
        title: "Draftly AI - AI Content Generator",
        description:
            "An AI-powered content generation application that helps creators, marketers, and writers produce high-quality blog posts, social media captions, and marketing copy in seconds.",
        longDescription: `Draftly AI adalah aplikasi pembuat konten berbasis AI yang dirancang untuk membantu content creator, marketer, dan penulis menghasilkan konten berkualitas tinggi dengan cepat dan efisien.

Dengan memanfaatkan teknologi Google Gemini AI, Draftly dapat menghasilkan berbagai jenis konten seperti artikel blog, caption media sosial, email marketing, dan copy iklan dalam hitungan detik. Pengguna cukup memasukkan topik atau brief singkat, dan AI akan menghasilkan konten yang relevan dan engaging.

Aplikasi ini dilengkapi dengan fitur personalisasi tone dan style, sehingga konten yang dihasilkan sesuai dengan brand identity pengguna. Dashboard yang intuitif memudahkan pengguna untuk mengelola dan menyimpan semua konten yang telah dibuat.`,
        image: "/Image/draftly.png",
        tags: ["Next.js 16", "Gemini AI", "Tailwind CSS v4", "Drizzle ORM", "PostgreSQL", "Better Auth", "React Three Fiber"],
        features: [
            "Generate berbagai jenis konten (blog, social media, marketing copy)",
            "Customizable tone dan writing style",
            "Dashboard management untuk mengelola project konten",
            "Light & Dark Mode support",
            "3D Interactive Landing Page",
            "Real-time content generation dengan Gemini AI",
            "Autentikasi aman dengan Better Auth"
        ],
        techDetails: [
            {
                name: "Next.js 16",
                description: "React framework terbaru dengan App Router untuk web app yang cepat dan SEO-friendly"
            },
            {
                name: "Gemini AI",
                description: "Google's AI model untuk generasi konten natural dan berkualitas"
            },
            {
                name: "Tailwind CSS v4",
                description: "Utility-first CSS framework versi terbaru untuk styling yang konsisten"
            },
            {
                name: "Drizzle ORM",
                description: "TypeScript ORM modern untuk interaksi database PostgreSQL"
            },
            {
                name: "PostgreSQL (Neon)",
                description: "Serverless PostgreSQL database untuk menyimpan user data dan generated content"
            },
            {
                name: "Better Auth",
                description: "Modern authentication library untuk Next.js dengan keamanan tinggi"
            },
            {
                name: "React Three Fiber",
                description: "Library untuk 3D graphics dan animasi interaktif pada landing page"
            },
            {
                name: "TanStack Query",
                description: "State management dan data fetching library untuk React"
            },
            {
                name: "Framer Motion",
                description: "Library animasi untuk transisi dan micro-interactions yang smooth"
            },
            {
                name: "Shadcn UI",
                description: "Komponen UI yang dapat di-customize dengan Radix UI primitives"
            }
        ],
        liveUrl: "https://content-generator.virlabs.my.id",
        codeUrl: "https://github.com/mvirgiawancr/ai-content-generator",
        featured: true,
        year: "2025"
    },
    {
        id: 3,
        slug: "dejau-watch-tracker",
        title: "DejaU - Personal Watch Tracker",
        description:
            "A personal watch tracking application that helps movie and series enthusiasts remember not just what they watched, but when, with whom, and how it felt.",
        longDescription: `DejaU adalah aplikasi personal tracker untuk mencatat film dan series yang telah ditonton. Lebih dari sekadar daftar tontonan biasa, DejaU membantu pengguna mengabadikan momen spesial saat menonton — kapan menontonnya, dengan siapa, dan catatan personal tentang pengalaman tersebut.

Dengan integrasi TMDB API, pengguna dapat mencari film dan series dengan mudah lengkap dengan poster dan informasi detail. Dashboard yang intuitif menampilkan timeline tontonan, insight personal seperti teman nonton favorit dan genre yang paling sering dipilih.

Aplikasi ini dilengkapi dengan halaman statistik yang menampilkan berbagai chart interaktif seperti distribusi genre, aktivitas bulanan, dan teman nonton paling sering. Tema "Cinema Diary" dengan warna hangat memberikan nuansa nostalgic yang cocok untuk mengingat momen-momen spesial saat menonton.`,
        image: "/Image/dejau.png",
        tags: ["Next.js 16", "React 19", "Supabase", "TMDB API", "Tailwind CSS v4", "Chart.js", "Shadcn UI"],
        features: [
            "Pencarian film & series dengan TMDB API integration",
            "Catat tanggal nonton, rating, teman nonton, dan catatan personal",
            "Timeline tontonan dengan desain kartu yang menarik",
            "Insight personal: teman favorit, genre favorit, rata-rata rating",
            "Statistik dengan chart interaktif (genre distribution, monthly activity, co-watching)",
            "Autentikasi dengan Supabase Auth",
            "Light & Dark Mode support"
        ],
        techDetails: [
            {
                name: "Next.js 16",
                description: "React framework terbaru dengan App Router untuk web app yang cepat dan SEO-friendly"
            },
            {
                name: "React 19",
                description: "Versi terbaru React dengan fitur-fitur terkini untuk UI yang responsif"
            },
            {
                name: "Supabase",
                description: "Backend-as-a-Service untuk authentication dan PostgreSQL database dengan Row Level Security"
            },
            {
                name: "TMDB API",
                description: "The Movie Database API untuk data film dan series lengkap dengan poster"
            },
            {
                name: "Tailwind CSS v4",
                description: "Utility-first CSS framework versi terbaru untuk styling yang konsisten"
            },
            {
                name: "Chart.js + React-Chartjs-2",
                description: "Library untuk visualisasi statistik dengan chart interaktif"
            },
            {
                name: "Shadcn UI",
                description: "Komponen UI yang dapat di-customize dengan Radix UI primitives"
            },
            {
                name: "Lucide React",
                description: "Icon library yang modern dan konsisten untuk antarmuka pengguna"
            }
        ],
        liveUrl: "https://dejau.virlabs.my.id",
        codeUrl: "https://github.com/mvirgiawancr/watch-tracker",
        featured: true,
        year: "2026"
    }
];

// Helper function to find project by slug
export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((project) => project.slug === slug);
}

// Helper function to get all slugs for static generation
export function getAllProjectSlugs(): string[] {
    return projects.map((project) => project.slug);
}
