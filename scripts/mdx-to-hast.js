const { sync: mdxSync } = require("@mdx-js/mdx");

const mdxToHast = rawMdx => {
  let hast = {};

  try {
    const getHast = () => ast => (hast = ast) && ast;
    mdxSync(rawMdx, { rehypePlugins: [getHast] });
  } catch (error) {
    return { error };
  }

  return hast;
};

module.exports = mdxToHast;
