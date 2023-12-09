import { TagPill } from "@/components/ui/Tag";
import { getProject } from "../../../../sanity/lib/api";
import { DateRange } from "@/components/ui/DateRange";
import BlockContent from "@/components/ui/BlockContent";

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

  console.log("[page] project detail", project);

  return (
    <div className="flex flex-col items-stretch max-w-5xl mx-auto w-full mb-8">
      <div className="flex items-center py-8">
        {/* Project Meta Data */}
        <div className="space-y-3">
          <h1 className="text-2xl font-medium md:text-5xl lg:text-6xl block">
            {project.title}
          </h1>
          <span className="block">
            <DateRange
              dateRange={project.dateRange}
              className="text-base md:text-lg"
            />
          </span>

          <div className="flex flex-wrap items-center flex-none gap-2">
            {project.tags.map((tag) => (
              <TagPill tag={tag} key={tag.name} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {/* Body */}
        <div className="flex flex-col items-center w-full">
          <div className="px-4 py-4 md:p-6 leading-6 md:leading-8 md:tracking-wide text-center md:text-left rounded-lg bg-slate-800/80 w-full">
            <p>{project.description}</p>
          </div>

          {project.content && <BlockContent value={project.content} />}
        </div>
      </div>
    </div>
  );
}
