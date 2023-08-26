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
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Website", value: "website" },
        ]
      }
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
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "In Ideation", value: "ideation" },
          { title: "Developing", value: "developing" },
          { title: "Deployed", value: "deployed" },
        ],
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
        { name: "ongoing", type: "boolean", title: "Ongoing" },
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
