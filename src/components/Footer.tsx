"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { SocialMedia } from "./SocialMedia";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer
      className="relative z-10 flex-none w-full py-6 space-y-3 md:space-y-4 px-page fcenter"
      style={{
        display: pathname === "/admin" ? "none" : "flex",
      }}
    >
      <div>
        <span className="text-sm text-gray-300">
          &copy; {new Date().getFullYear()} Bowang Lan. All rights reserved.
        </span>
      </div>
      <SocialMedia size="sm" />
    </footer>
  );
}
