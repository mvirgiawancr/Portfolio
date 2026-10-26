"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { Logo } from "@/components/Logo";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#background", label: "Background" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bare over the still; once you scroll it turns into a strip of the same ink, so the bar never
  // cuts a white band across the dark opening.
  const solid = scrolled || open || pathname !== "/";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid
          ? "border-b border-paper/10 bg-ink/90 text-paper backdrop-blur-md"
          : "border-b border-transparent text-paper"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[96rem] items-center justify-between gap-6 px-5 sm:px-10">
        <Link href="/" aria-label={`${site.short}, home`} className="flex items-center gap-3 whitespace-nowrap">
          <Logo className="size-7" />
          <span className="text-sm font-medium tracking-tight">{site.short}</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition-opacity hover:opacity-100 ${solid ? "opacity-70" : "opacity-80"}`}            >
              {l.label}
            </Link>
          ))}
          <a
            href={`mailto:${site.email}`}
            className="border-b border-ember pb-0.5 text-sm"
          >
            Email me
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="label -mr-2 p-2 md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <div id="mobile-nav" className="border-t border-paper/15 px-5 pt-2 pb-6 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-paper/15 py-4 font-display text-2xl"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`mailto:${site.email}`}
            onClick={() => setOpen(false)}
            className="mt-6 inline-block border-b border-ember pb-0.5 text-sm"
          >
            {site.email}
          </a>
        </div>
      )}
    </header>
  );
}
