"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer
      className="relative z-0 py-6 px-page fcenter"
      style={{
        display: pathname === "/admin" ? "none" : "flex",
      }}
    >
      <div>
        <span className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Bowang Lan. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
