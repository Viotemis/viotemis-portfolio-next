"use client";

import React from "react";
import { motion } from "framer-motion";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.main
      className="z-10 flex flex-col items-stretch max-w-[var(--w-main)] px-4 mx-auto md:px-8 2xl:max-w-[1500px] w-full"
      initial="initial"
      animate="visible"
      exit="exit"
      variants={{
        initial: {
          opacity: 0,
          y: 20,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.3,
            delay: 0.1,
            when: "beforeChildren",
            staggerChildren: 0.1,
          },
        },
        exit: {
          opacity: 0,
          y: 20,
          transition: {
            duration: 0.3,
          },
        },
      }}
    >
      {children}
    </motion.main>
  );
}
