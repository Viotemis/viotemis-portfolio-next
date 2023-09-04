"use client";

import React from "react";
import { AnimatePresence } from "framer-motion";

export function GlobalWrapper({ children }: { children: React.ReactNode }) {
  return <AnimatePresence>{children}</AnimatePresence>;
}
