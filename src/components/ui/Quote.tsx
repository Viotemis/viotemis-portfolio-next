import React from "react";

export function Quote({ quote }: { quote: Quote }) {
  return (
    <div className="flex flex-col items-center w-full gap-3 p-8 md:px-10 md:py-12 quote-container rounded-lg overflow-hidden">
      <div className="text-lg italic text-center text-slate-200">
        {quote.quote}
      </div>
      <div className="inline-flex gap-2">
        <span>{"-"}</span>
        {quote.authors.map((author, i) => (
          <span key={i} className="text-gray-300">
            {author.name}
          </span>
        ))}
      </div>
    </div>
  );
}
