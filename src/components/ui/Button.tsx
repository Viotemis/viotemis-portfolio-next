"use client"

import React from "react";
import { EMAIL_URL } from "@/constants";

export default function Button({
  children,
  className,
  ...props
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={"fcenter " + className} {...props}>
      <div className="mt-3 text-base button-outline">{children}</div>
    </div>
  );
}

export function ContactMeButton() {
  return (
    <Button
      onClick={() => {
        document.location.href = EMAIL_URL;
      }}
    >
      Contact Me
    </Button>
  );
}
