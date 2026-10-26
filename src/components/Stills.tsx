import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

/** Contact sheet: the newest stills, one swipe wide, so the first thing after the title card is proof. */
export function Stills({ limit = 5 }: { limit?: number }) {
  return (
    <ul className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pt-10 pb-1 sm:gap-6 sm:px-10 sm:pt-12 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {projects.slice(0, limit).map((p, i) => (
        <li key={p.slug} className="w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-[30%]">
          <Link href={`/projects/${p.slug}`} className="group block">
            <div className="relative aspect-[16/10] overflow-hidden border border-paper/15 bg-ink-2">
              <Image
                src={p.cover}
                alt={`${p.title}: ${p.tagline}`}
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 78vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
            <div className="mt-3 flex items-baseline gap-4 border-t border-paper/15 pt-2">
              <span className="label text-paper/40">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-sm text-paper/85 transition-colors group-hover:text-ember">{p.title}</span>
              <span className="label ml-auto text-paper/40">{p.year}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
