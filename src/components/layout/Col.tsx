import { cn } from "@/lib/utils";
import React from "react";

export function Col({
  className,
  children,
  ...props
}: {
  children: React.ReactNode;
} & React.HTMLProps<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col items-stretch", className)} {...props}>
      {children}
    </div>
  );
}
