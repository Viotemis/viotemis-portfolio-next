import { cn, formatDate } from "@/lib/utils";

export function DateRange({
  dateRange,
  className,
}: {
  dateRange: DateRange;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center flex-none gap-1 text-sm text-slate-400",
        className
      )}
    >
      <span className="">{formatDate(dateRange.start)}</span>
      {dateRange.end && (
        <>
          <span>{"-"}</span>
          <span>{formatDate(dateRange.end)}</span>
        </>
      )}
      {dateRange.ongoing && (
        <>
          <span>{"-"}</span>
          <span>{"Present"}</span>
        </>
      )}
    </div>
  );
}
