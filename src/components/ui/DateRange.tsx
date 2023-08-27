import { formatDate } from "@/lib/utils";

export function DateRange({ dateRange }: { dateRange: DateRange }) {
  return (
    <div className="flex items-center flex-none gap-1 text-sm text-slate-400">
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
