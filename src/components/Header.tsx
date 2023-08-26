"use client";

import React, { useLayoutEffect, useRef } from "react";
import { MobileMenu } from "./MobileMenu";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { navItems } from "@/constants";

function NavItem({
  text,
  className = "",
  ...props
}: {
  text: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "z-10 px-6 py-2 bg-transparent cursor-pointer trans active:bg-blue-400/70",
        className
      )}
      {...props}
    >
      {text}
    </div>
  );
}

const animateOptions = {
  duration: 300,
  easing: "ease-in-out",
  fill: "forwards",
};

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const hoverBox = useRef<HTMLDivElement | null>(null);
  const activeBox = useRef<HTMLDivElement | null>(null);
  const mouseInsideNav = useRef<boolean>(false);

  // useLayoutEffect(() => {
  //   if (pathname === "/admin") {
  //     return;
  //   }

  //   const activeItem = navItems.find((item) => item.href === pathname);
  //   if (!activeItem) {
  //     return;
  //   }

  //   activeBox.current!.animate(
  //     {
  //       transform: `translateX(${activeItem.offsetLeft}px)`,
  //       width: `${activeItem.offsetWidth}px`,
  //     },
  //     animateOptions
  //   );
  // }, [])

  return (
    <header
      className="relative flex items-center justify-between h-[var(--h-header)] px-page trans w-screen"
      style={{
        display: pathname.startsWith("/admin") ? "none" : "flex",
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
        <nav
          className="relative hidden gap-2 md:flex"
          onMouseEnter={() => {
            hoverBox.current!.animate(
              {
                opacity: 1,
              },
              {
                duration: 300,
                fill: "forwards",
                easing: "ease-in-out",
              }
            );
          }}
          onMouseLeave={() => {
            mouseInsideNav.current = false;
            hoverBox.current!.animate(
              {
                opacity: 0,
              },
              {
                duration: 300,
                easing: "ease-in-out",
                fill: "forwards",
              }
            );
          }}
        >
          <div
            ref={hoverBox}
            className="absolute inset-y-0 left-0 opacity-0 pointer-events-none bg-blue-400/30"
          ></div>
          <div
            ref={activeBox}
            className="absolute inset-y-0 left-0 opacity-0 pointer-events-none bg-blue-700/70"
          ></div>
          {navItems.map((item, i) => (
            <NavItem
              {...item}
              key={i}
              className={
                item.href === pathname
                  ? "bg-blue-500/70"
                  : "text-slate-400 hover:text-white"
              }
              onMouseEnter={(e) => {
                hoverBox.current!.animate(
                  {
                    transform: `translateX(${e.currentTarget.offsetLeft}px)`,
                    width: `${e.currentTarget.offsetWidth}px`,
                  },
                  {
                    duration: mouseInsideNav.current ? 300 : 10,
                    easing: "ease-in-out",
                    fill: "forwards",
                  }
                );
                mouseInsideNav.current = true;
              }}
              onClick={(e) => {
                activeBox.current!.animate(
                  {
                    transform: `translateX(${e.currentTarget.offsetLeft}px)`,
                    width: `${e.currentTarget.offsetWidth}px`,
                  },
                  {
                    duration: 300,
                    easing: "ease-in-out",
                    fill: "forwards",
                  }
                );
                router.push(item.href);
              }}
            />
          ))}
        </nav>
      </div>
      <div>
        <MobileMenu />
      </div>
    </header>
  );
}
