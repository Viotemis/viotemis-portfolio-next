import DefaultLayout from "@/components/layout/DefaultLayout";
import { getProject } from "../../../../sanity/lib/api";
import { TagPill } from "@/components/ui/Tag";
import { DateRange } from "@/components/ui/DateRange";
import { Row } from "@/components/layout/Row";
import { Col } from "@/components/layout/Col";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const project = await getProject(slug);

  if (!project) {
    return (
      <div>
        <h1 className="mt-24 text-2xl font-medium">404: Project not found</h1>
      </div>
    );
  }

  console.log("[page] project detail");

  return (
    <Col className="mb-8 space-y-8 max-w-7xl">
      <Breadcrumb
        items={[
          { label: "Projects", href: "/projects" },
          {
            label: project.title,
            href: `/projects/${project.slug}`,
          },
        ]}
      />
      <Col className="gap-4 py-8">
        <Row className="items-baseline w-full">
          <div className="flex-none text-2xl font-medium md:text-5xl lg:text-6xl">
            {project.title}
          </div>
          <div className="flex-1"></div>
          <DateRange
            dateRange={project.dateRange}
            className="flex-none text-slate-200"
          />
        </Row>
        <p>{project.description}</p>
      </Col>
      <section className="flex flex-col gap-4">
        <h3 className="text-xl font-medium md:text-2xl">Technologies</h3>
        <div className="flex flex-wrap items-center flex-none gap-2">
          {project.tags.map((tag) => (
            <TagPill tag={tag} key={tag.name} />
          ))}
        </div>
      </section>
    </Col>
  );
}
