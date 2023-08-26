import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const year = date.toLocaleDateString("en-US", { year: "numeric" });
  const month = date.toLocaleDateString("en-US", { month: "short" });
  return `${month} ${year}`;
}
