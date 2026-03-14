"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
}

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 30 },
  down: { y: -30 },
  left: { x: -50 },
  right: { x: 50 },
};

export default function AnimateOnScroll({
  children,
  className,
  delay = 0,
  direction = "up",
}: AnimateOnScrollProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const offset = offsets[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
