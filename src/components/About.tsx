"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-10 w-48 h-48 bg-accent/5 neo-border opacity-20 rotate-6" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-accent-tertiary/5 neo-border opacity-15 -rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-accent-secondary text-foreground font-semibold neo-border-thin neo-shadow mb-6">
            About Me
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column - Photo & Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Photo */}
            <div className="mb-8 flex justify-center md:justify-start">
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 neo-border neo-shadow-lg overflow-hidden bg-muted flex items-center justify-center">
                  {/* Placeholder - replace with actual photo */}
                  <div className="w-full h-full bg-gradient-to-br from-accent/20 via-accent-secondary/20 to-accent-tertiary/20 flex items-center justify-center">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                </div>
                <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-accent neo-border" />
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-8">
              Passionate about{" "}
              <span className="relative inline-block">
                <span className="relative z-10">crafting</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-accent-tertiary -z-0" />
              </span>{" "}
              digital experiences
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a{" "}
                <span className="text-foreground font-medium">
                  Final Year Informatics Engineering Student
                </span>{" "}
                driven by a curiosity for how things work under the hood. My
                journey in tech is defined by a constant pursuit of{" "}
                <span className="text-accent font-medium">excellence</span> and{" "}
                <span className="text-accent font-medium">innovation</span>.
              </p>
              <p>
                I specialize in building full-stack applications that are not
                only functional but also visually stunning. I believe that good
                design is as important as good code.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="px-5 py-3 bg-muted font-semibold neo-border-thin neo-shadow neo-hover cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
