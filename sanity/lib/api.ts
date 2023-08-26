import { groq } from "next-sanity";
import { client } from "./client";

const SANITY_SERVER =
  "https://nq1vjp0w.api.sanity.io/v2023-08-13/data/query/portfolio-db?query=";

const sanity_fetch = (query: string) => {
  // console.log("fetching sanity", SANITY_SERVER + query);
  return fetch(SANITY_SERVER + encodeURIComponent(query), {
    next: { revalidate: 1 },
  })
    .then((res) => res.json())
    .then((res) => res.result);
};

export function getPosts() {
  return client.fetch(groq`*[_type == "post"]{
    title,
    "slug": slug.current,
    _createdAt,
    _id,
    _updatedAt,
  }`);
}

export function getOnePost(slug: string) {
  return sanity_fetch(`*[_type == "post" && slug.current == "${slug}"][0]`);
}

export function getProjects(): Promise<Project[]> {
  return sanity_fetch(`*[_type == "project"]{
    title,
    "slug": slug.current,
    description,
    websiteUrl,
    githubUrl,
    dateRange,
    tags[]-> { name, icon, "slug": slug.current, iconFileName, iconScale },
  } | order(dateRange.start desc)`);
}

export async function getHomePageData(): Promise<{
  projects: Project[];
  experiences: Experience[];
}> {
  const res =
    await sanity_fetch(`*[(_type == "project" || _type == "experience") && showOnHomePage]{
  organization, _type,
  title,
  "slug": slug.current,
  description,
  content,
  websiteUrl,
  githubUrl,
  dateRange,
  tags[]-> { name, icon, "slug": slug.current, iconFileName, iconScale },
} | order(dateRange.start)
`);
  const projects = res.filter((x: any) => x._type == "project");
  const experiences = res.filter((x: any) => x._type == "experience");
  return { projects, experiences };
}
