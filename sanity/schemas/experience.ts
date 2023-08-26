import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({
      name: "organization",
      title: "Organization",
      type: "string",
    }),
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
      name: "showOnResume",
      title: "Show on Resume",
      type: "boolean",
    }),
    defineField({
      name: "showOnHomePage",
      title: "Show on Home Page",
      type: "boolean",
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
        { name: "ongoing", type: "boolean", title: "Ongoing" },
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
