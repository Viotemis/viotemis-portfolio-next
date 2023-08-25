"use client"

import React from "react";
import { EMAIL_URL, RESUME_URL } from "@/constants";
import va from "@vercel/analytics";
import { Download } from "lucide-react";

export default function Button({
  children,
  className,
  ...props
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={"fcenter " + className} {...props}>
      <div className="flex items-center px-3 py-2 text-base border-2 cursor-pointer md:px-4 md:py-3 hover:border-transparent hover:bg-[var(--primary)] trans">{children}</div>
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
      <Download className="mr-2" size={20} />
      Download My Resume
    </Button>
  );
}

