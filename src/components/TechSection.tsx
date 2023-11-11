"use client";

import React, { useMemo } from "react";
// import { AnimatePresence, motion, usePresence } from "framer-motion";
import Image from "next/image";

const Tab = ({
  name,
  active,
  onClick,
}: {
  name: string;
  active: boolean;
  onClick: (e: any) => void;
}) => {
  return (
    <div
      className="px-6 py-2 cursor-pointer lg:px-8 lg:py-4 trans hover:bg-slate-200/20 rounded-lg"
      style={{
        backgroundColor: active ? "var(--bg-hover)" : "",
      }}
      onClick={onClick}
    >
      {name}
    </div>
  );
};

// const transition = { type: "spring", stiffness: 500, damping: 50, mass: 1 };

function TagCircle({ tag }: { tag: Tag }) {
  // const [isPresent, safeToRemove] = usePresence();
  return (
    <div
      className="flex flex-col items-center hover:bg-[var(--bg-hover)] trans bg-slate-400/10 rounded-lg p-2"
      style={{
        width: 120,
        height: 120,
      }}
      // layout={true}
      // initial="out"
      // style={{
      //   position: isPresent ? "static" : "absolute",
      // }}
      // animate={isPresent ? "in" : "out"}
      // whileTap="tapped"
      // variants={variants}
      // onAnimationComplete={() => !isPresent && safeToRemove()}
      // transition={transition}
    >
      <div className="relative flex-none translate-y-1.5 -translate-x-0 fcenter h-3/5">
        <Image
          src={"/icons/" + (tag.iconFileName || tag.slug + ".svg")}
          alt={tag.name}
          width={40 * (tag.iconScale || 1)}
          height={40 * (tag.iconScale || 1)}
        />
      </div>
      <div className="text-sm text-center">{tag.name}</div>
    </div>
  );
}

export function TechSection({ data }: { data: Tag[] }) {
  const [tabs, tabsData] = useMemo(() => {
    let tabs: Category[] = [];
    const slugSet = new Set<string>();
    data.forEach((tag) => {
      tag.categories.forEach((category) => {
        if (slugSet.has(category.slug)) return;
        slugSet.add(category.slug);
        tabs.push(category);
      });
    });
    const tabsData: Record<string, Tag[]> = {};
    for (const tab of tabs) {
      tabsData[tab.slug] = data.filter((tag) =>
        tag.categories.map((c) => c.slug).includes(tab.slug)
      );
    }
    tabs = [{ title: "All", slug: "all" }, ...tabs];
    tabsData["all"] = data;
    return [tabs, tabsData];
  }, [data]);
  const [activeTab, setActiveTab] = React.useState({
    i: 0,
    slug: tabs[0].slug,
  });

  return (
    <div className="flex flex-col items-center w-full space-y-8">
      <div className="flex flex-wrap justify-center gap-1 md:gap-2">
        {tabs.map((tab, i) => (
          <Tab
            key={i}
            name={tab.title}
            active={i === activeTab.i}
            onClick={(e: any) => {
              setActiveTab(() => ({
                i,
                slug: tab.slug,
              }));
            }}
          />
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-3 md:gap-6 max-w-[80%]">
        {tabsData[activeTab.slug].map((tag, i) => (
          <TagCircle tag={tag} key={i} />
        ))}
      </div>
    </div>
  );
}
