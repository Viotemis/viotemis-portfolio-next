"use client";

import { SANITY_CDN } from "@/constants";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/client";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

function SanityImage({ image, alt }: { image: string; alt: string }) {
  return (
    <Image src={urlForImage(image).width(128).url() as any} fill alt={alt} />
  );
}

function ProjectItem({ project }: { project: Project }) {
  return (
    <div className="p-4 hover:bg-blue-300/20 trans h-96">
      <div className="flex items-center mb-2 text-xl font-medium md:text-2xl">
        {project.title}
        {project.websiteUrl && (
          <a href={project.websiteUrl} target="_blank">
            <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-3 cursor-pointer" />
          </a>
        )}
      </div>
      <div className="flex items-center gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag.name}
            className="inline-flex items-center px-3 py-1.5 mt-1 mr-1 text-sm font-medium text-white rounded-full bg-blue-500/20 hover:bg-blue-500/40 trans"
          >
            <div className="relative mr-1.5 -translate-x0 fcenter">
              <Image
                src={"/icons/" + tag.slug + ".svg"}
                alt={tag.name}
                width={20}
                height={20}
              />
            </div>
            <div className="text-sm">{tag.name}</div>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects({ projects }: { projects: Project[] }) {
  console.log("projects", projects);
  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      }}
    >
      {projects.map((project) => (
        <ProjectItem project={project} key={project.slug} />
      ))}
    </div>
  );
}
