"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { Logo } from "@/components/Logo";

const links = [
  { href: "/projects", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-paper/90 backdrop-blur-md border-b border-rule" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[88rem] items-center justify-between px-4 sm:px-8">
        <Link href="/" aria-label="Virgiawan, home" className="group flex items-center gap-3 whitespace-nowrap">
          <Logo className="size-8 transition-transform duration-300 group-hover:-rotate-6" />
          <span className="font-display text-lg font-bold tracking-tight">Virgiawan</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const active = l.href === "/projects" && pathname.startsWith("/projects");
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-[15px] whitespace-nowrap transition-colors hover:text-ink ${active ? "text-ink" : "text-ink-2"}`}
              >
                {l.label}
              </Link>
            );
          })}
          <a
            href={site.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-ink px-4 py-2 text-[14px] font-medium text-paper transition-transform duration-200 hover:-translate-y-px active:translate-y-0"
          >
            <span className="size-1.5 rounded-full bg-hi" aria-hidden />
            Book a call
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="-mr-2 p-2 font-mono text-xs uppercase tracking-widest md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <div id="mobile-nav" className="border-t border-rule px-4 pb-6 pt-2 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-rule py-4 font-display text-3xl font-semibold"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={site.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 font-medium text-paper"
          >
            Book a 30-min call
          </a>
        </div>
      )}
    </header>
  );
}
