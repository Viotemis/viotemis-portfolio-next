"use client"

import React from "react";
import { EMAIL_URL, RESUME_URL } from "@/constants";
import va from "@vercel/analytics";

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
        // va.track("ClickContactMe");
        document.location.href = EMAIL_URL;
      }}
    >
      Contact Me
    </Button>
  );
}

export function DownloadResumeButton() {
  return (
    <Button
      onClick={() => {
        // va.track("ClickContactMe");
        window.open(RESUME_URL, "_blank");
      }}
    >
      Download My Resume
    </Button>
  );
}

