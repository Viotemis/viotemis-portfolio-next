import { groq } from "next-sanity";
import { client } from "./client";

const SANITY_SERVER =
  "https://nq1vjp0w.api.sanity.io/v2023-08-13/data/query/portfolio-db?query=";

const sanity_fetch = (query: string) => {
  console.log("fetching sanity", SANITY_SERVER + query);
  return fetch(SANITY_SERVER + query, { next: { revalidate: 1 } })
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
    websiteUrl,
    githubUrl,
    tags[]-> { name, icon, "slug": slug.current },
  }`);
}
