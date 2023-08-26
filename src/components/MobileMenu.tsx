"use client";

import { motion, useCycle } from "framer-motion";
import React from "react";
import { IconContainer, Path } from "./ui/Icon";
import { navItems } from "@/constants";

export const MenuToggle = ({
  toggle,
}: {
  toggle: React.MouseEventHandler<HTMLButtonElement>;
}) => (
  <IconContainer onClick={toggle}>
    <svg width="24" height="24" viewBox="0 0 24 24">
      <Path
        variants={{
          closed: { d: "M 4 6 L 20 6" },
          open: { d: "M 18 6 6 18" },
        }}
      />
      <Path
        d="M 20 12 L 4 12"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 4 18 L 20 18" },
          open: { d: "m 6 6 12 12" },
        }}
      />
    </svg>
  </IconContainer>
);

const menuContainerVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  closed: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.6,
      ease: "easeIn",
    },
  },
};

export function MobileMenu() {
  const [open, toggleOpen] = useCycle(false, true);
  return (
    <motion.nav
      className="relative block md:hidden"
      initial={false}
      animate={open ? "open" : "closed"}
    >
      <div className="fixed z-20 right-4 top-4">
        <MenuToggle toggle={() => toggleOpen()} />
      </div>
      <motion.div
        className="fixed z-10 w-full lg:max-w-xl backdrop-blur-sm"
        style={{
          // top: "var(--h-header)",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          background: "rgba(var(--primary-950) / 0.5)",
        }}
        variants={menuContainerVariants}
      >
        <motion.div
          className="flex flex-col items-center justify-center h-full space-y-6 text-base font-medium text-center text-white"
          variants={{
            open: {
              transition: { staggerChildren: 0.15, delayChildren: 0.3 },
            },
            closed: {
              transition: { staggerChildren: 0.1, staggerDirection: -1 },
            },
          }}
        >
          {navItems.map((item) => (
            <motion.a
              key={item.text}
              href={item.href}
              className="w-full py-2 text-center"
              variants={{
                open: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    y: { stiffness: 1000, velocity: -100 },
                  },
                },
                closed: {
                  y: 50,
                  opacity: 0,
                  transition: {
                    y: { stiffness: 1000 },
                  },
                },
              }}
            >
              {item.text}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.nav>
  );
}
