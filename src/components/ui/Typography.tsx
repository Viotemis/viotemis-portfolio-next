"use client";

import { VARIANTS } from "@/lib/animate";
import { motion } from "framer-motion";

const variants = {
  [VARIANTS.INITIAL]: { opacity: 0, y: 40, rotateX: 90 },
  [VARIANTS.VISIBLE]: { opacity: 1, y: 0, rotateX: 0 },
  [VARIANTS.EXIT]: { opacity: 0, y: 40 },
};

export function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      viewport={{ once: true }}
      variants={variants}
      className="py-10 text-3xl font-medium sm:py-12 md:py-28 md:text-5xl text-blue-50"
    >
      {children}
    </motion.h2>
  );
}
