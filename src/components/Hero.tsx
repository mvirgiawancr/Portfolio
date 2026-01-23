"use client";

import { motion } from "motion/react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent/5 neo-border opacity-30 rotate-12" />
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-accent-secondary/5 neo-border opacity-20 -rotate-6" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-accent-tertiary/5 neo-border opacity-25 rotate-45" />
        <div className="absolute top-1/3 right-1/3 w-2 h-40 bg-foreground/5" />
        <div className="absolute bottom-1/4 left-1/3 w-40 h-2 bg-foreground/5" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-xl md:text-2xl font-light text-muted-foreground mb-4 block tracking-wide">
                Hello, I&apos;m
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6"
            >
              <span className="block text-5xl md:text-7xl font-black leading-tight tracking-tighter">
                Moch Virgiawan
              </span>
              <span className="block text-4xl md:text-6xl font-black mt-2 text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-secondary to-accent-tertiary">
                Caesar Ridollohi
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed"
            >
              Crafting immersive{" "}
              <span className="text-accent font-medium">digital experiences</span>{" "}
              with code and creativity.
              <br className="hidden md:block" />
              Final Year Informatics Student & Full Stack Enthusiast.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="#projects"
                className="px-8 py-4 bg-foreground text-background font-bold text-lg neo-border neo-shadow-lg neo-hover"
              >
                View Projects
              </Link>
              <Link
                href="#contact"
                className="px-8 py-4 bg-background text-foreground font-bold text-lg neo-border neo-shadow neo-hover"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="w-72 h-72 md:w-96 md:h-96 bg-accent neo-border neo-shadow-lg flex items-center justify-center">
                <span className="text-8xl md:text-9xl font-black text-background">
                  {"</>"}
                </span>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent-secondary neo-border" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-tertiary neo-border" />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex justify-center mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <div className="w-6 h-10 neo-border-thin rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-2 h-2 bg-foreground rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
