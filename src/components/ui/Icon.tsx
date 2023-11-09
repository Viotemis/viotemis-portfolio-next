"use client";

import React from "react";
import { type SVGMotionProps, motion } from "framer-motion";

export function IconContainer({
  size = 44,
  onClick,
  children,
  ...rest
}: {
  size?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<"button">) {
  return (
    <button
      className="rounded-full bg-gray-100/10 trans hover:bg-gray-100/30 fcenter"
      onClick={onClick}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}

export const Path = (props: SVGMotionProps<SVGPathElement>) => (
  <motion.path
    fill="transparent"
    strokeLinecap="round"
    {...{
      stroke: "var(--text)",
      strokeWidth: "2.5",
      ...props,
    }}
  />
);
