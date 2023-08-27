import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/client";
import { ProjectCardList } from "../ui/Card";
import { SectionHeader } from "../ui/Typography";

function SanityImage({ image, alt }: { image: string; alt: string }) {
  return (
    <Image src={urlForImage(image).width(128).url() as any} fill alt={alt} />
  );
}


export default function Projects({ projects }: { projects: Project[] }) {
  // console.log("projects", projects);
  return (
    <div className="flex flex-col items-stretch max-w-[calc(100% - 16px)] mb-8">
      <div className="py-8 fcenter">
        <SectionHeader>My Projects</SectionHeader>
      </div>
      <ProjectCardList projects={projects} />
    </div>
  );
}
