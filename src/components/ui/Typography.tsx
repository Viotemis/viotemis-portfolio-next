"use client";
import { motion } from "framer-motion";

export function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 40, rotateX: 90 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      exit={{ opacity: 0, y: 40 }}
      viewport={{ once: true }}
      className="py-10 text-3xl font-medium sm:py-12 md:py-16 md:text-4xl text-blue-50"
    >
      {children}
    </motion.h2>
  );
}
