import { groq } from "next-sanity";
import { client } from "./client";

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
  return client.fetch(groq`*[_type == "post" && slug.current == "${slug}"][0]`);
}

export function getProjects(): Promise<Project[]> {
  return client.fetch(groq`*[_type == "project"]`);
}
