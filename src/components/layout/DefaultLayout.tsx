"use client";

import React from "react";
import { motion } from "framer-motion";
import { VARIANTS } from "@/lib/animate";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.main
      className="z-10 flex flex-col items-stretch flex-1 w-full px-4 mx-auto lg:max-w-4xl md:px-8 xl:max-w-6xl min-h-[calc(100vh-228px)]"
      initial={VARIANTS.INITIAL}
      animate={VARIANTS.VISIBLE}
      whileInView={VARIANTS.VISIBLE}
      exit={VARIANTS.EXIT}
    >
      {children}
    </motion.main>
  );
}
