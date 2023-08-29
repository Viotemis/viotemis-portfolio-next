"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NICE_CUBIC } from "@/constants";

const flipVariants = {
  hidden: {
    transform: "scale(0) rotateX(-180deg)",
    opacity: 0,
    transition: {
      delay: 0.4,
      duration: 0.5,
      ease: "easeInOut"
    },
  },
  visible: {
    transform: " scale(1) rotateX(0deg)",
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    },
  },
  exit: {
    transform: "scale(0) rotateX(360deg)",
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    },
  },
};

function Backdrop({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-100 modal-backdrop bg-black/70"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={{
        visible: { opacity: 1, transition: { duration: 0.3 } },
        hidden: { opacity: 0, transition: { duration: 0.3 } },
        exit: { opacity: 0, transition: { duration: 0.3 } },
      }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}

export default function Modal({
  handleClose,
  open,
  className = "",
  children,
}: {
  handleClose: () => void;
  open: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
      {open && (
        <Backdrop onClick={handleClose}>
          <motion.div className={`modal backdrop-blur-sm ${className}`} variants={flipVariants}>
            {children}
          </motion.div>
          ;
        </Backdrop>
      )}
    </AnimatePresence>
  );
}
