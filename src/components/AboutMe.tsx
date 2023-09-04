"use client";
import { motion } from "framer-motion";
import { ABOUT_ME_TEXT } from "@/constants";

export function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      exit={{ opacity: 0, y: 40 }}
      viewport={{ once: true }}
      className="max-w-[600px] text-center"
    >
      {ABOUT_ME_TEXT.map((t, i) => (
        <p
          key={i}
          className="mb-6 leading-8 tracking-wide md:leading-10"
          dangerouslySetInnerHTML={{ __html: t }}
        ></p>
      ))}
    </motion.div>
  );
}
