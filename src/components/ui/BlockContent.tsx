import React from "react";
import { PortableText } from "@portabletext/react";

const components = {
  // list: {
  //   // Ex. 1: customizing common list types
  //   bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
  //   number: ({ children }) => <ol className="mt-lg">{children}</ol>,
  //   // Ex. 2: rendering custom lists
  //   checkmarks: ({ children }) => (
  //     <ol className="m-auto text-lg">{children}</ol>
  //   ),
  // },
  // h1: ({ children }: { children: React.ReactNode }) => (
  //   <h1 className="text-3xl font-bold">{children}</h1>
  // ),
};

export default function BlockContent({ value }: { value: any }) {
  return (
    <div className="block-content-container">
      <PortableText value={value} components={components} />
    </div>
  );
}
