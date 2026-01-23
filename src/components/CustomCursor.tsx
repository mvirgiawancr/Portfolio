"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

type CursorVariant = "default" | "hover";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [variant, setVariant] = useState<CursorVariant>("default");
  
  // Mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smoother, lighter easing
  const ringX = useSpring(mouseX, { stiffness: 200, damping: 25, mass: 0.5 });
  const ringY = useSpring(mouseY, { stiffness: 200, damping: 25, mass: 0.5 });
  
  // Dot follows more closely
  const dotX = useSpring(mouseX, { stiffness: 400, damping: 30, mass: 0.3 });
  const dotY = useSpring(mouseY, { stiffness: 400, damping: 30, mass: 0.3 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
    setIsVisible(true);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    // Check if device has fine pointer (mouse)
    if (typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseleave", handleMouseLeave);
      document.addEventListener("mouseenter", handleMouseEnter);

      // Add hover detection for interactive elements
      const handleElementHover = () => {
        const interactiveElements = document.querySelectorAll(
          'a, button, [role="button"], input, textarea, select, .neo-hover'
        );

        interactiveElements.forEach((el) => {
          el.addEventListener("mouseenter", () => setVariant("hover"));
          el.addEventListener("mouseleave", () => setVariant("default"));
        });
      };

      // Initial setup
      handleElementHover();

      // Setup mutation observer for dynamically added elements
      const observer = new MutationObserver(handleElementHover);
      observer.observe(document.body, { childList: true, subtree: true });

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseleave", handleMouseLeave);
        document.removeEventListener("mouseenter", handleMouseEnter);
        observer.disconnect();
      };
    }
  }, [handleMouseMove, handleMouseLeave, handleMouseEnter]);

  // Don't render on touch devices
  if (typeof window !== "undefined" && !window.matchMedia("(pointer: fine)").matches) {
    return null;
  }

  // Slightly larger, more visible sizing
  const ringSize = variant === "hover" ? 36 : 32;
  const dotSize = 8;

  return (
    <>
      {/* Ring - uses mix-blend-difference to invert on any background */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
        }}
        animate={{
          width: ringSize,
          height: ringSize,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          width: { duration: 0.2, ease: "easeOut" },
          height: { duration: 0.2, ease: "easeOut" },
          opacity: { duration: 0.15 },
        }}
      >
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 border-2 border-white"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </motion.div>

      {/* Dot - solid center, also inverts on background */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          opacity: { duration: 0.1 },
        }}
      >
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 bg-white"
          style={{
            width: dotSize,
            height: dotSize,
          }}
        />
      </motion.div>
    </>
  );
}
