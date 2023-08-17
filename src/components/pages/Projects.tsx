"use client";

import { useEffect, useState } from "react";
import { getProjects } from "@/../sanity/lib/api";

function ProjectItem({ project }: { project: Project }) {
  return (
    <div>
      <div>{project.title}</div>
    </div>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getProjects()
      .then((data) => {
        setProjects(() => data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log("projects changed", projects);
  }, [projects]);

  return (
    <div>
      {projects.map((project) => (
        <ProjectItem project={project} key={project.slug} />
      ))}
    </div>
  );
}
