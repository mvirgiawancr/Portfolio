import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

function Frame({ slug, title, kind, year, cover, tagline }: (typeof projects)[number]) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group block w-[78vw] shrink-0 snap-start sm:w-[44vw] lg:w-[26rem] xl:w-[30rem]"
    >
      <div className="relative aspect-[16/10] overflow-hidden border border-paper/15 bg-ink-2">
        <Image
          src={cover}
          alt={`${title}: ${tagline}`}
          fill
          sizes="(min-width: 1280px) 30rem, (min-width: 1024px) 26rem, (min-width: 640px) 44vw, 78vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-3 flex items-baseline gap-4 border-t border-paper/15 pt-2">
        <span className="text-sm text-paper/85 transition-colors group-hover:text-ember">{title}</span>
        <span className="label ml-auto text-paper/40">{kind}</span>
        <span className="label text-paper/40">{year}</span>
      </div>
    </Link>
  );
}

/** Contact sheet: the newest stills on one advancing strip, so the first thing after the title card is proof. */
export function Stills({ limit = 5 }: { limit?: number }) {
  const shown = projects.slice(0, limit);

  return (
    <div className="drift overflow-x-auto pt-10 pb-1 sm:pt-12 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {/* The set repeats once so the drift can loop without a jump; the copy is decorative */}
      <ul className="drift-track flex w-max gap-4 sm:gap-6">
        {shown.map((p) => (
          <li key={p.slug} className="contents">
            <Frame {...p} />
          </li>
        ))}
        {shown.map((p) => (
          <li key={`${p.slug}-loop`} className="contents" aria-hidden>
            <Frame {...p} />
          </li>
        ))}
      </ul>
    </div>
  );
}
