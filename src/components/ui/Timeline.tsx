"use client";

import { cn } from "@/lib/utils";
import { DateRange } from "./DateRange";
import { motion } from "framer-motion";

function Dot({ className }: { className?: string }) {
  return <div className={cn(`w-2 h-2 bg-blue-100 rounded-full`, className)} />;
}

function VSpacer({ className }: { className?: string }) {
  return <div className={cn("flex-none w-6", className)} />;
}

export function ExperienceCard({
  experience,
  align = "left",
}: {
  experience: Experience;
  align?: "left" | "right";
}) {
  return (
    <motion.div
      // whileInView="inView"
      // variants={{
      //   initial: {
      //     opacity: 0,
      //     y: 20,
      //   },
      //   inView: {
      //     opacity: 1,
      //     y: 0,
      //     transition: {
      //       duration: 0.3,
      //     },
      //   },
      // }}
      className="flex flex-col space-y-1 cursor-default md:px-4 md:py-4 lg:p-6 lg:space-y-2 md:hover:bg-blue-400/10 trans"
      style={{
        alignItems: align === "left" ? "flex-start" : "flex-end",
      }}
    >
      <h3
        className="text-lg font-semibold sm:text-2xl"
        style={{
          textAlign: align === "left" ? "left" : "right",
        }}
      >
        {experience.organization}
      </h3>
      <div
        className="flex items-baseline justify-between"
        style={{
          textAlign: align,
        }}
      >
        <span className="text-base italic">{experience.title}</span>
      </div>
      <div
        style={{
          textAlign: align,
        }}
      >
        <p className="text-xs sm:leading-6 md:text-sm text-slate-300 md:leading-6">
          {experience.description}
        </p>
      </div>
      {/* <div>
        <BlockContent value={experience.content} />
      </div> */}
    </motion.div>
  );
}

export function ExperienceList({ experiences }: { experiences: Experience[] }) {
  // console.log("experiences", experiences);
  return (
    <motion.div
      className="grid mx-6 sm:mx-8"
      // initial="initial"
      // whileInView={"inView"}
      // variants={{
      //   initial: {
      //     opacity: 0,
      //     y: 20,
      //   },
      //   inView: {
      //     opacity: 1,
      //     y: 0,
      //     transition: {
      //       duration: 0.3,
      //       delay: 0.1,
      //       staggerChildren: 0.2,
      //       delayChildren: 0.1,
      //     },
      //   },
      // }}
    >
      {experiences.map((experience, i) => (
        <div className="relative flex group" key={i}>
          <div className="relative flex items-start md:hidden">
            <div className="absolute z-10 w-2 h-2 bg-blue-100 rounded-full -left-[3px] top-[48px]"></div>
            <div className="flex flex-col items-start flex-1 min-w-0 gap-2 my-10 ml-6 sm:gap-8 sm:ml-8 sm:flex-row">
              <DateRange
                dateRange={experience.dateRange}
                className="text-lg text-blue-200"
              />
              <ExperienceCard experience={experience} key={experience.slug} />
            </div>
          </div>
          <div className="w-[2px] absolute  md:left-1/2 h-full bg-blue-500"></div>
          <div className="relative hidden w-full py-8 md:flex">
            {i % 2 === 0 ? (
              <>
                <div className="flex items-start justify-end flex-1 pt-5">
                  <DateRange
                    dateRange={experience.dateRange}
                    className="text-lg text-blue-200 trans group-hover:font-semibold"
                  />
                  <VSpacer className="lg:w-8" />
                </div>
                <Dot className="translate-x-[1px] translate-y-7" />
                <div className="flex items-start flex-1 lg:-translate-y-2">
                  <VSpacer className="w-3 lg:w-4" />
                  <ExperienceCard
                    experience={experience}
                    key={experience.slug}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-row-reverse items-start flex-1 lg:-translate-y-2">
                  <VSpacer className="w-3 lg:w-4" />
                  <ExperienceCard
                    experience={experience}
                    align="right"
                    key={experience.slug}
                  />
                </div>
                <Dot className="translate-x-[1px] translate-y-7" />
                <div className="flex items-start flex-1 pt-5">
                  <VSpacer className="lg:w-8" />
                  <DateRange
                    dateRange={experience.dateRange}
                    className="text-lg text-blue-200 trans group-hover:font-semibold"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </motion.div>
  );
}
