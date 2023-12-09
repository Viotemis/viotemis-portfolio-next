import DefaultLayout from "@/components/layout/DefaultLayout";
import { getProject } from "../../../../sanity/lib/api";

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
    <div className="flex flex-col items-stretch max-w-[calc(100% - 16px)] mb-8">
      <div className="flex items-center py-8">
        <div className="text-2xl font-medium md:text-5xl lg:text-6xl">
          {project.title}
        </div>
      </div>
      <div className="flex flex-col gap-4"></div>
    </div>
  );
}
