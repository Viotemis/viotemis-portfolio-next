import React from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { getProjects } from "../../../sanity/lib/api";
import { SectionHeader } from "@/components/ui/Typography";
import { ProjectCardList } from "@/components/ui/Card";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <DefaultLayout>
      <div className="flex flex-col items-stretch max-w-[calc(100% - 16px)] mb-8">
        <div className="py-8 fcenter">
          <SectionHeader>My Projects</SectionHeader>
        </div>
        <ProjectCardList projects={projects} />
      </div>
    </DefaultLayout>
  );
}
