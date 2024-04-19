"use client";

import { DateRange } from "./DateRange";
import { GithubLink, WebsiteLink } from "./Link";
import { TagPill } from "../ui/Tag";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { VARIANTS } from "@/lib/animate";

export function Title({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="flex items-center">
      <h3
        className={cn(
          "text-lg font-medium truncate sm:text-xl trans relative z-20 group-hover:shadow-white",
          className
        )}
      >
        {children}
        <div className="h-[3px] w-0 trans group-hover:w-full bg-white mt-2 rounded-full"></div>
      </h3>
    </div>
  );
}

export function HSpacer() {
  return <div className="flex-1 min-w-0"></div>;
}

export function VSpacer() {
  return <div className="flex-1 min-h-0"></div>;
}

export function Description({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "text-sm leading-6 md:text-base md:leading-7 line-clamp-2 group-hover:line-clamp-none text-slate-300 group-hover:text-slate-100 trans relative z-20",
        className
      )}
    >
      {children}
    </div>
  );
}

export function Content({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "px-4 sm:px-6 md:py-8 py-6 sm:py-6 space-y-3 flex flex-col",
        className
      )}
    >
      {children}
    </div>
  );
}

const CARD_VARIANTS = {
  [VARIANTS.INITIAL]: {
    opacity: 0,
    // x: 40,
    rotateX: 90,
  },
  [VARIANTS.VISIBLE]: {
    opacity: 1,
    x: 0,
    rotateX: 0,
  },
};

export function Container({
  children,
  className = "",
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) {
  return (
    <motion.div
      variants={CARD_VARIANTS}
      transition={{
        duration: 0.5,
        // ease: "easeOut",
      }}
      className={cn(
        "relative rounded-lg border border-slate-500 group backdrop-blur-sm text-white group:text-black trans overflow-hidden hover:border-transparent cursor-pointer",
        className
      )}
    >
      {children}
      <div
        className="absolute inset-0 group-hover:translate-x-0 -translate-x-[100%] trans z-0 bg-blue-600/70"
        style={{
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          transitionDuration: "0.5s",
        }}
      ></div>
      <Link href={href} className="absolute inset-0 z-20 block opacity-0"></Link>
    </motion.div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="relative rounded-lg border group md:border-[var(--border)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-hover)] trans">
      <div className="z-10 flex flex-col p-4 space-y-3 cursor-pointer md:space-y-4 sm:p-5">
        {/* Title */}
        <div className="flex items-center flex-none gap-3">
          <h3 className="text-lg font-medium truncate sm:text-xl lg:text-2xl trans">
            {project.title}
          </h3>
          <div className="items-center hidden gap-3 sm:flex">
            {project.websiteUrl && (
              <WebsiteLink url={project.websiteUrl} name={project.title} />
            )}
            {project.githubUrl && (
              <GithubLink url={project.githubUrl} name={project.title} />
            )}
          </div>
          <div className="flex-1 min-w-0"></div>
          <div className="hidden sm:block shrink-0">
            <DateRange dateRange={project.dateRange} />
          </div>
          <div className="flex items-center gap-3 sm:hidden">
            {project.websiteUrl && (
              <WebsiteLink url={project.websiteUrl} name={project.title} />
            )}
            {project.githubUrl && (
              <GithubLink url={project.githubUrl} name={project.title} />
            )}
          </div>
        </div>

        {/* Description */}
        <div className="text-sm leading-6 md:leading-7 line-clamp-2 text-slate-300">
          {project.description}
        </div>

        <div className="flex flex-1"></div>

        {/* Tags */}
        <div className="flex flex-wrap items-center flex-none gap-2">
          {project.tags.map((tag) => (
            <TagPill tag={tag} key={tag.name} />
          ))}
        </div>
      </div>
      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0 z-0 block opacity-0"
      ></Link>
    </div>
  );
}

export function ProjectCardList({
  projects,
  className = "",
}: {
  projects: Project[];
  className?: string;
}) {
  return (
    <div className={cn("grid gap-4 lg:mx-auto max-w-4xl", className)}>
      {projects.map((project) => (
        <ProjectCard project={project} key={project.slug} />
      ))}
    </div>
  );
}

const LIST_VARIANTS = {
  [VARIANTS.VISIBLE]: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

export function List({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={LIST_VARIANTS}
      className={cn(
        "grid gap-4 sm:gap-6 md:gap-8 lg:mx-auto max-w-4xl",
        className
      )}
      // {...props}
    >
      {children}
    </motion.div>
  );
}

export function Tags({ tags }: { tags: Tag[] }) {
  return (
    <div className="z-20 flex flex-wrap items-center flex-none gap-2">
      {tags.map((tag) => (
        <TagPill tag={tag} key={tag.name} />
      ))}
    </div>
  );
}
