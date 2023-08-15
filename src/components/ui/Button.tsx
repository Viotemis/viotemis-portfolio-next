import React from "react";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <div className="fcenter">
      <div className="mt-3 text-base button-outline">{children}</div>
    </div>
  );
}
