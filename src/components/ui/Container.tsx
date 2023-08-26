export function SectionContainer({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col items-center py-12 lg:max-w-[1000px] mx-auto">{children}</section>
  );
}
