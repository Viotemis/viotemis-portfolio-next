import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "tag" }],
        },
      ],
    }),
    defineField({
      name: "dateRange",
      title: "Date Range",
      type: "object",
      fields: [
        { name: "start", type: "date", title: "Start" },
        { name: "end", type: "date", title: "End" },
      ],
    }),
    defineField({
      name: "websiteUrl",
      title: "Website URL",
      type: "url",
    }),
    defineField({
      name: "githubUrl",
      title: "Github URL",
      type: "url",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
