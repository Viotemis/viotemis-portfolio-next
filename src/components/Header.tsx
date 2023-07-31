"use client";

import React from "react";
import { MobileMenu } from "./MobileMenu";

export default function Header() {
  return (
    <header className="relative z-50 flex items-center justify-between h-[var(--h-header)] px-page">
      <span className="text-lg">Bowang Lan</span>
      <div className="flex-1"></div>
      <div>
        <MobileMenu />
      </div>
    </header>
  );
}
