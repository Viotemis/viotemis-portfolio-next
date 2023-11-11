"use client";

import Image from "next/image";
import { DateRange } from "./DateRange";
import { GithubLink, WebsiteLink } from "./Link";
import { useState, useEffect } from "react";
import Modal from "../ui/Modal";
import { TagPill } from "../ui/Tag";
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
      className="flex flex-col h-auto p-4 space-y-3 border cursor-pointer group md:space-y-4 md:h-auto sm:p-5 md:p-6 trans border-[var(--border)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-hover)] rounded-lg"
      onClick={(e) => {
        e.preventDefault();
        handleOpen(project);
      }}
    >
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
                        <WebsiteLink
                          url={selectedProject.websiteUrl}
                          name={selectedProject.title}
                        />
                      )}
                      {selectedProject.githubUrl && (
                        <GithubLink
                          url={selectedProject.githubUrl}
                          name={selectedProject.title}
                        />
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
                      <WebsiteLink
                        url={selectedProject.websiteUrl}
                        name={selectedProject.title}
                      />
                    )}
                    {selectedProject.githubUrl && (
                      <GithubLink
                        url={selectedProject.githubUrl}
                        name={selectedProject.title}
                      />
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

              {selectedProject.content && (
                <BlockContent value={selectedProject.content} />
              )}
            </div>

            <div className="flex flex-wrap items-center justify-center flex-none gap-2 mx-auto md:justify-start md:mx-0">
              {selectedProject.tags.map((tag) => (
                <TagPill tag={tag} key={tag.name} />
              ))}
            </div>
          </>
        )}
      </Modal>
    </>
  );
}
