"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial theme
    const isDarkMode = document.documentElement.classList.contains("dark") ||
      (!document.documentElement.classList.contains("light") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold neo-border-thin px-4 py-2 bg-accent text-background neo-shadow neo-hover"
          >
            mvirgiawancr
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 font-semibold text-lg transition-colors hover:bg-muted neo-border-thin neo-hover"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-2 p-3 neo-border-thin neo-shadow neo-hover bg-muted"
              aria-label="Toggle theme"
            >
              <motion.span
                key={isDark ? "dark" : "light"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                className="block text-xl"
              >
                {isDark ? "☀️" : "🌙"}
              </motion.span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className="p-3 neo-border-thin neo-shadow bg-muted"
              aria-label="Toggle theme"
            >
              <span className="text-lg">{isDark ? "☀️" : "🌙"}</span>
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="neo-border-thin p-3 neo-shadow neo-hover bg-background"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className="w-full h-0.5 bg-foreground block"
                />
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-full h-0.5 bg-foreground block"
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="w-full h-0.5 bg-foreground block"
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="flex flex-col gap-2 neo-border p-4 bg-muted neo-shadow-lg">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 font-semibold text-lg neo-border-thin bg-background neo-hover"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
