export function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="py-10 text-3xl font-medium sm:py-12 md:text-4xl text-blue-50">{children}</h2>
  );
}
