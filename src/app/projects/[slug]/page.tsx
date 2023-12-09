import DefaultLayout from "@/components/layout/DefaultLayout";
import { getProject } from "../../../../sanity/lib/api";

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const project = await getProject(slug);

  if (!project) {
    return <div>
      <h1 className="mt-24 text-2xl font-medium">404: Project not found</h1>
    </div>;
  }

  console.log("[page] project detail", project);

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{slug}</p>
    </div>
  );
}
