import { cn } from "@/lib/utils";
import React from "react";

export function Row({
  className,
  children,
  ...props
}: {
  children: React.ReactNode;
} & React.HTMLProps<HTMLDivElement>) {
  return (
    <div className={cn("flex items-center", className)} {...props}>
      {children}
    </div>
  );
}
