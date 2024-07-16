import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

import { apiVersion, dataset, projectId, useCdn, token } from "../env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token
});

const builder = imageUrlBuilder(client);

export function urlForImage(source: any) {
  return builder.image(source);
}
