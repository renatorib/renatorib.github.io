import preval from "babel-plugin-preval/macro";
import authors from "./authors";

const rawPosts =
  preval`module.exports = require('../../scripts/get-posts.js').getPosts()` ||
  [];

export const posts = rawPosts
  .map(({ slug, dir, ...meta }) => {
    try {
      const mdx = require(`../../posts/${dir}/index.mdx`);

      return {
        slug,
        mdx: {
          ...mdx,
          meta: {
            ...meta, // default meta extracted from mdx ast
            ...mdx.meta, // can be override by explicit meta from mdx file
            author: authors[mdx.meta.author] || authors.renatorib
          }
        }
      };
    } catch (e) {
      console.error(e); // eslint-disable-line
      return null;
    }
  })
  .filter(Boolean);

export const getAllPostsByTag = tag =>
  posts.filter(post => (post.mdx?.meta?.tags || []).includes(tag));

export const getAllPostsByAuthor = slug =>
  posts.filter(post => post.mdx?.meta?.author?.slug === slug);

export const getAllTags = () => {
  const tags = new Set();
  posts.forEach(post =>
    (post.mdx?.meta?.tags || []).forEach(tagName => tags.add(tagName))
  );
  return [...tags];
};

export default posts;
