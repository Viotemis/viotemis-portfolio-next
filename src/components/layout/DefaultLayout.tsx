import React from "react";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="z-10 flex flex-col items-stretch max-w-[var(--w-main)] px-4 mx-auto md:px-8 2xl:max-w-[1500px]">
      {children}
    </main>
  );
}
