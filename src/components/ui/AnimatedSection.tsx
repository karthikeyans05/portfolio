"use client";

import { motion } from "framer-motion";
import { cn } from "@/src/lib/utils";

interface AnimatedSectionProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

export default function AnimatedSection({
  className,
  children,
  delay = 0,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
