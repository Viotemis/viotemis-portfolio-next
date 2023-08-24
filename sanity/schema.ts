import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import post from "./schemas/post";
import project from "./schemas/project";
import tag from "./schemas/tag";
import experience from "./schemas/experience";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, project, experience, tag, post, category],
};
