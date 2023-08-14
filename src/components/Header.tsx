"use client";

import React from "react";
import { MobileMenu } from "./MobileMenu";
import { usePathname, useRouter } from "next/navigation";

function NavItem({ text, href }: { text: string; href: string }) {
  const router = useRouter();
  return (
    <div
      className="px-4 py-2 cursor-pointer"
      onClick={() => {
        router.push(href);
      }}
    >
      {text}
    </div>
  );
}

const navItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Projects",
    href: "/projects",
  },
  {
    text: "Blogs",
    href: "/blogs",
  },
];

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header
      className="relative z-50 flex items-center justify-between h-[var(--h-header)] px-page"
      style={{
        display: pathname === "/admin" ? "none" : "flex",
      }}
    >
      <span
        className="text-lg cursor-pointer"
        onClick={() => {
          router.push("/");
        }}
      >
        Bowang Lan
      </span>
      <div className="flex-1"></div>
      <div>
        <div className="flex">
          {navItems.map((item) => (
            <NavItem {...item} key={item.href} />
          ))}
        </div>
      </div>
      <div>
        <MobileMenu />
      </div>
    </header>
  );
}
