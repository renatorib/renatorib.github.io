import React from "react";
import blogPosts from "~/blog-posts";

const Blog = () => (
  <div>
    <h1>Blog Posts</h1>
    <ul>
      {blogPosts.map(post => (
        <li key={post.mdx.meta.title}>{post.mdx.meta.title}</li>
      ))}
    </ul>
  </div>
);

export default Blog;
