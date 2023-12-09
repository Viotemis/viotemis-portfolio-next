import DefaultLayout from "@/components/layout/DefaultLayout";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DefaultLayout>{children}</DefaultLayout>;
}
