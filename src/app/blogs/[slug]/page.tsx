import React from "react";
import { getOnePost } from "@/../sanity/lib/api";

export default async function BlogItemPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const blog = await getOnePost(slug);

  if (!blog) {
    return <div>404</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-center h-48">
        <h1 className="text-4xl font-medium">{blog.title}</h1>
      </div>
    </div>
  );
}
