"use client";

import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/client";
import { ProjectCard } from "../ui/Card";
import { SectionHeader } from "../ui/Typography";
import { SectionContainer } from "../ui/Container";

function SanityImage({ image, alt }: { image: string; alt: string }) {
  return (
    <Image src={urlForImage(image).width(128).url() as any} fill alt={alt} />
  );
}

export default function Projects({ projects }: { projects: Project[] }) {
  // console.log("projects", projects);
  return (
    <>
      <div className="flex flex-col items-center mb-8">
        <div className="py-8">
          <SectionHeader>My Projects</SectionHeader>
        </div>
        <div
          className="grid flex-grow-0 gap-4 md:gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
          }}
        >
          {projects.map((project) => (
            <ProjectCard project={project} key={project.slug} />
          ))}
        </div>
      </div>
    </>
  );
}
