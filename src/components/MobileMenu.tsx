"use client";

import { motion, useCycle } from "framer-motion";
import React from "react";
import { IconContainer, Path } from "./ui/Icon";

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
      <MenuToggle toggle={() => toggleOpen()} />
      <motion.div
        className="fixed w-full lg:max-w-xl"
        style={{
          top: "var(--h-header)",
          bottom: 0,
          // left: 0,
          right: 0,
          background: "rgba(var(--primary-950), 0.7)",
        }}
        variants={menuContainerVariants}
      ></motion.div>
    </motion.nav>
  );
}
