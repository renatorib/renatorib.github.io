import React from "react";
import Link from "next/link";
import blogPosts from "~/blog-posts";

const Blog = () => (
  <div>
    <h1>Blog Posts</h1>
    <ul>
      {blogPosts.map(post => (
        <li key={post.mdx.meta.title}>
          <Link href="/blog/[slug]" as={`/blog/${post.slug}`} passHref prefetch>
            <a>{post.mdx.meta.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Blog;
