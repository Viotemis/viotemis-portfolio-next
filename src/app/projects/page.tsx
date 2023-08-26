import React from "react";
import Projects from "@/components/pages/ProjectsPage";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { getProjects } from "../../../sanity/lib/api";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <DefaultLayout>
      <Projects projects={projects} />
    </DefaultLayout>
  );
}
