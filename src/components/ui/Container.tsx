import { cn } from "@/lib/utils";

export function SectionContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "flex flex-col items-center py-12 lg:max-w-[1000px] mx-auto relative z-0",
        className
      )}
    >
      {children}
    </section>
  );
}
