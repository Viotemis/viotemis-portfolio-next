import React from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { getProjects } from "../../../sanity/lib/api";
import { SectionHeader } from "@/components/ui/Typography";
import * as Card from "@/components/ui/Card";
import { Col } from "@/components/layout/Col";
import { ExternalLink } from "lucide-react";

export default async function ProjectsPage() {
  console.log("ProjectsPage");

  const projects = await getProjects();

  // console.log("projects", projects);

  return (
    <DefaultLayout>
      <div className="py-8 fcenter">
        <SectionHeader>My Projects</SectionHeader>
      </div>
      <Col className="gap-4 sm:gap-6">
        {projects.map((project) => (
          <Card.Container key={project.slug} href={`/projects/${project.slug}`}>
            <Card.Content>
              <div className="flex justify-between">
                <Card.Title>{project.title}</Card.Title>
                {project.websiteUrl && (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:scale-105 trans opacity-90 z-30"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
              <Card.Description className="line-clamp-none">
                {project.description}
              </Card.Description>
              <Card.Tags tags={project.tags} />
            </Card.Content>
          </Card.Container>
        ))}
      </Col>
    </DefaultLayout>
  );
}
