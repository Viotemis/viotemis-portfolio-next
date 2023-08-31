import { DateRange } from "./DateRange";

function VerticalLine() {
  return <div className="w-[2px] absolute left-1/2 h-full bg-blue-400"></div>;
}

export function ExperienceCard({
  experience,
  align = "left",
}: {
  experience: Experience;
  align?: "left" | "right";
}) {
  return (
    <div
      className="flex flex-col space-y-1 lg:space-y-2"
      style={{
        alignItems: align === "left" ? "flex-start" : "flex-end",
      }}
    >
      <h3 className="text-lg font-semibold sm:text-2xl">
        {experience.organization}
      </h3>
      <div
        className="flex items-baseline justify-between"
        style={{
          textAlign: align === "left" ? "left" : "right",
        }}
      >
        <span className="text-base italic">{experience.title}</span>
      </div>
      <div
        style={{
          textAlign: align === "left" ? "left" : "right",
        }}
      >
        <p className="text-xs leading-6 md:text-sm text-slate-300">
          {experience.description}
        </p>
      </div>
      {/* <div>
        <BlockContent value={experience.content} />
      </div> */}
    </div>
  );
}

export function ExperienceList({ experiences }: { experiences: Experience[] }) {
  // console.log("experiences", experiences);
  return (
    <div className="grid mx-6 sm:mx-8">
      {experiences.map((experience, i) => (
        <div className="relative flex" key={i}>
          <div className="relative flex items-start md:hidden">
            <div className="absolute z-10 w-2 h-2 bg-blue-100 rounded-full -left-[3px] top-[48px]"></div>
            <div className="flex flex-col items-start flex-1 min-w-0 gap-2 my-10 ml-6 sm:gap-8 sm:ml-8 sm:flex-row">
              <DateRange
                dateRange={experience.dateRange}
                className="mt-1 text-blue-200"
              />
              <ExperienceCard experience={experience} key={experience.slug} />
            </div>
          </div>
          <div className="w-[2px] absolute  md:left-1/2 h-full bg-blue-400"></div>
          <div className="relative hidden w-full py-8 md:flex">
            {i % 2 === 0 ? (
              <>
                <div className="flex-1"></div>
                <div className="flex flex-col items-start flex-1 gap-3 lg:gap-6 lg:flex-row">
                  <div className="z-10 relative shrink-0 flex gap-4 items-center mt-[3px]">
                    <div className="w-2 h-2 bg-blue-100 rounded-full -translate-x-[3px]"></div>
                    <DateRange
                      dateRange={experience.dateRange}
                      className="text-lg text-blue-200"
                    />
                  </div>
                  <div className="flex">
                    <div className="flex-none w-6 lg:w-0"></div>
                    <ExperienceCard
                      experience={experience}
                      key={experience.slug}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col items-end flex-1 gap-2 lg:items-start lg:flex-row-reverse lg:gap-6">
                  <div className="z-10 relative shrink-0 flex gap-4 items-center mt-[3px]">
                    <DateRange
                      dateRange={experience.dateRange}
                      className="text-lg text-blue-200"
                    />
                    <div className="w-2 h-2 bg-blue-100 rounded-full translate-x-[5px]"></div>
                  </div>
                  <div className="flex flex-row-reverse">
                    <div className="flex-none w-6 lg:w-0"></div>
                    <ExperienceCard
                      experience={experience}
                      align="right"
                      key={experience.slug}
                    />
                  </div>
                </div>
                <div className="flex-1"></div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
