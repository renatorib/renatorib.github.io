import preval from "babel-plugin-preval/macro";

const rawPosts =
  preval`module.exports = require('../scripts/get-posts.js').getPosts()` || [];

const posts = rawPosts
  .map(({ slug, ...meta }) => {
    try {
      const mdx = require(`../posts/${slug}/index.mdx`);

      return {
        slug,
        mdx: {
          ...mdx,
          meta: {
            ...meta, // default meta extracted from mdx ast
            ...mdx.meta // can be override by explicit meta from mdx file
          }
        }
      };
    } catch (e) {
      console.error(e); // eslint-disable-line
      return null;
    }
  })
  .filter(Boolean);

export default posts;
