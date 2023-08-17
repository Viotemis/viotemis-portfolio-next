"use client";

import React, { useEffect } from "react";
import { getPosts } from "../../sanity/lib/api";

export default function Blogs() {
  // const posts = await getPosts();

  const [posts, setPosts] = React.useState<any[]>([]);

  useEffect(() => {
    getPosts()
      .then((data) => {
        setPosts(() => data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log("posts changed", posts);
  }, [posts]);

  return (
    <div>
      {posts.map((post: any) => (
        <a href={`/blogs/${post.slug}`} key={post.slug}>
          <h1>{post.title}</h1>
        </a>
      ))}
    </div>
  );
}
