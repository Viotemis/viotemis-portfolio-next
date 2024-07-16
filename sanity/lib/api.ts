import { groq } from "next-sanity";
import { client } from "./client";
import { projectId } from "../env";

// const SANITY_SERVER =
//   `https://nq1vjp0w.api.sanity.io/v2023-08-13/data/query/portfolio-db?query=`;

// const sanity_fetch = (query: string) => {
//   // console.log("fetching sanity", SANITY_SERVER + query);
//   return fetch(SANITY_SERVER + encodeURIComponent(query), {
//     next: { tags: ["sanity"] },
//   })
//     .then((res) => res.json())
//     .then((res) => res.result);
// };

// export function getPosts() {
//   return client.fetch(groq`*[_type == "post"]{
//     title,
//     "slug": slug.current,
//     _createdAt,
//     _id,
//     _updatedAt,
//   }`);
// }

// export function getOnePost(slug: string) {
//   return client.fetch(`*[_type == "post" && slug.current == "${slug}"][0]`);
// }

export function getProjects(): Promise<Project[]> {
  return client.fetch(`*[_type == "project"]{
    title,
    "slug": slug.current,
    description,
    websiteUrl,
    githubUrl,
    dateRange,
    tags[]-> { name, icon, "slug": slug.current, iconFileName, iconScale },
    content,
  } | order(dateRange.start desc)`);
}

export async function getProject(slug: string): Promise<Project> {
  const res =
    await client.fetch(`*[_type == "project" && slug.current == "${slug}"]{
    title,
    "slug": slug.current,
    description,
    websiteUrl,
    githubUrl,
    dateRange,
    tags[]-> { name, icon, "slug": slug.current, iconFileName, iconScale },
    content,
  } | order(dateRange.start desc)`);
  return res.length === 0 ? null : res[0];
}

export function getExperiences(): Promise<Experience[]> {
  return client.fetch(`*[_type == "experience"]{
    title,
    "slug": slug.current,
    organization,
    description,
    content,
    dateRange,
    } | order(dateRange.start desc)`);
}

export function getQuotes(): Promise<Quote[]> {
  return client.fetch(`*[_type == "quote"]{
    quote,
    "slug": slug.current,
    authors[]-> { name, "slug": slug.current },
  }`);
}

export async function getHomePageData(): Promise<{
  projects: Project[];
  experiences: Experience[];
  quote: Quote;
}> {
  // const projects = await client.fetch(`[_type == "project" && showOnHomePage]`);
  // const experiences = await client.fetch(
  //   `[_type == "experience" && showOnHomePage]`
  // );
  // const quotes = await client.fetch(`[_type == "quote" && Authors]`);

  const projects = await getProjects();
  const experiences = await getExperiences();
  const quotes = await getQuotes();

  console.log("😊❤️💕");
  console.log(projects, experiences, quotes);

  //   const res =
  //     await client.fetch(`*[((_type == "project" || _type == "experience") && showOnHomePage) || _type == "quote"]{
  //   _type, organization,
  //   title,
  //   "slug": slug.current,
  //   description,
  //   content,
  //   websiteUrl,
  //   githubUrl,
  //   dateRange,
  //   tags[]-> { name, icon, "slug": slug.current, iconFileName, iconScale },

  //   quote,
  //   authors[]-> { name, "slug": slug.current },
  // } | order(dateRange.start desc)
  // `);

  // const projects = res.filter((x: any) => x._type == "project");
  // const experiences = res.filter((x: any) => x._type == "experience");
  // const quotes = res.filter((x: any) => x._type == "quote");
  return {
    projects,
    experiences,
    quote: quotes[Math.floor(Math.random() * quotes.length)],
  };
}

export async function getTechItems(): Promise<Tag[]> {
  const data = await client.fetch(`*[_type == "tag" && categories != null]{
    name, icon, "slug": slug.current, iconFileName, iconScale,
    categories[] -> { title, "slug": slug.current },
  }`);

  console.log("😊");
  console.log(data);

  // categorize tags by categories
  const categories: { [key: string]: Tag[] } = {};
  data.forEach((tag: Tag) => {
    if (!tag.categories) return;
    tag.categories.forEach((category: Category) => {
      if (!categories[category.slug]) categories[category.slug] = [];
      categories[category.slug].push(tag);
    });
  });
  return data;
}
