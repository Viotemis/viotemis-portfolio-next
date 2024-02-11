import React from "react";
import { Row } from "../layout/Row";
import Link from "next/link";

export function Breadcrumb({
  items,
}: {
  items: {
    label: string;
    href: string;
  }[];
}) {
  return (
    <Row className="gap-3">
      {items.map((item, i) => (
        <>
          <Link
            href={item.href}
            className="text-base hover:underline text-slate-100"
            key={item.label}
          >
            {item.label}
          </Link>
          {i < items.length - 1 && <div className="">/</div>}
        </>
      ))}
    </Row>
  );
}
