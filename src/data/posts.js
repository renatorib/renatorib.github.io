import dynamic from "next/dynamic";
import preval from "babel-plugin-preval/macro";

export const posts =
  preval`module.exports = require('../../scripts/get-posts.js').getPosts()` ||
  [];

export const getFullPostBySlug = slug => {
  const post = posts.find(p => p.slug === slug);
  return {
    ...post,
    Component: dynamic(() => import(`../../posts/${post.dir}/index.mdx`))
  };
};

export const getAllPostsByTag = tag =>
  posts.filter(post => (post.tags || []).includes(tag));

export const getAllPostsByAuthor = authorSlug =>
  posts.filter(post => post.author === authorSlug);

export const getAllTags = () => {
  const tags = new Set();
  posts.forEach(post =>
    (post.tags || []).forEach(tagName => tags.add(tagName))
  );
  return [...tags];
};
