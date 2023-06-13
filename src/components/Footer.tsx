import React from "react";

export default function Footer() {
  return (
    <footer className="relative z-0 flex-none py-3 px-page fcenter">
      <div>
        <span className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Bowang Lan. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
