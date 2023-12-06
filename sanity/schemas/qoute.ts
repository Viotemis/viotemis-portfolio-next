import { defineField, defineType } from "sanity";

export default defineType({
  name: "qoute",
  title: "Qoute",
  type: "document",
  fields: [
    defineField({
      name: "qoute",
      title: "Qoute",
      type: "text",
    }),
    defineField({
      name: "authors",
      title: "Authors",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "people" }],
        },
      ],
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "qoute",
        maxLength: 96,
      },
    }),
  ],
});
