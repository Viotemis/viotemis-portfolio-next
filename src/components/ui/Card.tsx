"use client";

import Image from "next/image";
import { DateRange } from "./DateRange";
import { GithubLink, WebsiteLink } from "./Link";
import { useState, useEffect } from "react";
import Modal from "../ui/Modal";
import { Tag } from "../ui/Tag";
import { cn } from "@/lib/utils";
import BlockContent from "./BlockContent";

export function ProjectCard({
  project,
  handleOpen,
}: {
  project: Project;
  handleOpen: (project: Project) => void;
}) {
  return (
    <div
      className="flex flex-col h-auto p-4 border cursor-pointer md:h-auto sm:p-4 md:p-6 hover:bg-blue-400/10 trans border-slate-400/50 hover:border-blue-500/80"
      onClick={(e) => {
        e.preventDefault();
        handleOpen(project);
      }}
    >
      {/* Title */}
      <div className="flex items-center flex-none gap-3 mb-2">
        <h3 className="text-lg font-medium truncate sm:text-xl lg:text-2xl">
          {project.title}
        </h3>
        <div className="items-center hidden gap-3 sm:flex">
          {project.websiteUrl && <WebsiteLink url={project.websiteUrl} />}
          {project.githubUrl && <GithubLink url={project.githubUrl} />}
        </div>
        <div className="flex-1 min-w-0"></div>
        <div className="hidden sm:block shrink-0">
          <DateRange dateRange={project.dateRange} />
        </div>
        <div className="flex items-center gap-3 sm:hidden">
          {project.websiteUrl && <WebsiteLink url={project.websiteUrl} />}
          {project.githubUrl && <GithubLink url={project.githubUrl} />}
        </div>
      </div>

      {/* Description */}
      <div className="mb-2 text-sm leading-6 line-clamp-2 text-slate-300">
        {project.description}
      </div>

      <div className="flex flex-1"></div>

      {/* Tags */}
      <div className="flex flex-wrap items-center flex-none gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag.name}
            className="inline-flex items-center px-3 py-1.5 mt-1 text-sm font-medium text-white rounded-full cursor-default bg-blue-500/20 hover:bg-blue-500/40 trans"
          >
            <div className="relative mr-1 lg:mr-1.5 -translate-x-0 fcenter">
              <Image
                src={"/icons/" + (tag.iconFileName || tag.slug + ".svg")}
                alt={tag.name}
                width={18 * (tag.iconScale || 1)}
                height={18 * (tag.iconScale || 1)}
              />
            </div>
            <div className="text-xs">{tag.name}</div>
          </span>
        ))}
      </div>
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
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      setModalOpen(() => true);
    }
  }, [selectedProject]);

  useEffect(() => {
    if (!modalOpen) {
      setSelectedProject(() => null);
    }
  }, [modalOpen]);

  const handleModalClose = () => {
    setModalOpen(() => false);
  };

  const handleOpen = (project: Project) => {
    setSelectedProject(() => project);
  };

  return (
    <>
      <div className={cn("grid gap-4 md:gap-6 grid-cols-minmax", className)}>
        {projects.map((project) => (
          <ProjectCard
            handleOpen={handleOpen}
            project={project}
            key={project.slug}
          />
        ))}
      </div>
      <Modal
        open={modalOpen}
        handleClose={handleModalClose}
        className="flex flex-col mx-auto w-[80%] sm:w-[600px] md:w-[750px] backdrop-blur-sm lg:w-[800px] px-3 sm:px-4 md:px-6 bg-[var(--bg-modal)] space-y-4 pt-8 pb-10 min-h-[360px] max-h-[70%] overflow-y-scroll"
      >
        {selectedProject && (
          <>
            <div>
              {/* Header (Desktop) */}

              <div className="items-center hidden w-full gap-4 mb-6 md:flex">
                <h1 className="text-2xl font-medium">
                  {selectedProject.title}
                </h1>

                <div className="flex flex-1 min-w-0">
                  {(selectedProject.websiteUrl ||
                    selectedProject.githubUrl) && (
                    <div className="flex items-center gap-4">
                      {selectedProject.websiteUrl && (
                        <WebsiteLink url={selectedProject.websiteUrl} />
                      )}
                      {selectedProject.githubUrl && (
                        <GithubLink url={selectedProject.githubUrl} />
                      )}
                    </div>
                  )}
                  <div className="flex-1 min-w-0"></div>
                  <DateRange dateRange={selectedProject.dateRange} />
                </div>
              </div>

              {/* Header (Mobile) */}
              <div className="flex flex-col items-center gap-3 mb-6 md:hidden">
                <h1 className="text-2xl font-medium md:text-3xl">
                  {selectedProject.title}
                </h1>
                <DateRange dateRange={selectedProject.dateRange} />
                {(selectedProject.websiteUrl || selectedProject.githubUrl) && (
                  <div className="flex items-center gap-3">
                    {selectedProject.websiteUrl && (
                      <WebsiteLink url={selectedProject.websiteUrl} />
                    )}
                    {selectedProject.githubUrl && (
                      <GithubLink url={selectedProject.githubUrl} />
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Body */}
            <div className="flex flex-col items-center w-full">
              <div className="p-1.5 sm:p-2 md:px-5 py-3 md:py-4 text-xs sm:text-sm leading-6 sm:leading-8 md:tracking-wide text-center md:text-left rounded-md bg-slate-800/80 w-full">
                <p>{selectedProject.description}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center flex-none gap-2 mx-auto md:justify-start md:mx-0">
              {selectedProject.tags.map((tag) => (
                <Tag tag={tag} key={tag.name} />
              ))}
            </div>
          </>
        )}
      </Modal>
    </>
  );
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
      className="flex flex-col space-y-2"
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
        <>
          <div
            className="relative flex items-start md:hidden"
            key={experience.slug}
          >
            <div className="absolute z-10 w-2 h-2 bg-blue-100 rounded-full -left-[3px] top-[48px]"></div>
            <div className="flex flex-col items-start flex-1 min-w-0 gap-3 my-10 ml-6 sm:gap-8 sm:ml-8 sm:flex-row">
              <DateRange
                dateRange={experience.dateRange}
                className="mt-1 text-blue-200"
              />
              <ExperienceCard experience={experience} key={experience.slug} />
            </div>
          </div>
          <div className="w-[2px] absolute  md:left-1/2 h-full bg-blue-400"></div>
          <div className="relative hidden py-8 md:flex">
            {i % 2 === 0 ? (
              <>
                <div className="flex-1"></div>
                <div className="flex items-start flex-1 gap-6">
                  <div className="z-10 relative shrink-0 flex gap-4 items-center mt-[3px]">
                    <div className="w-2 h-2 bg-blue-100 rounded-full -translate-x-[3px]"></div>
                    <DateRange
                    dateRange={experience.dateRange}
                    className="text-lg text-blue-200"
                    />
                  </div>
                  <ExperienceCard
                    experience={experience}
                    key={experience.slug}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-row-reverse items-start flex-1 gap-6">
                  <div className="z-10 relative shrink-0 flex gap-4 items-center mt-[3px]">
                    <DateRange
                      dateRange={experience.dateRange}
                      className="text-lg text-blue-200"
                    />
                    <div className="w-2 h-2 bg-blue-100 rounded-full translate-x-[5px]"></div>
                  </div>
                  <ExperienceCard
                    experience={experience}
                    align="right"
                    key={experience.slug}
                  />
                </div>
                <div className="flex-1"></div>
              </>
            )}
          </div>
        </>
      ))}
    </div>
  );
}
