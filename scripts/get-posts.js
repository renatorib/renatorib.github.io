const fs = require("fs");
const { readSync } = require("to-vfile");
const remark = require("remark");
const mdx = require("remark-mdx");

const getTitle = tree => {
  const titleNode = tree.children.find(
    ({ type, depth }) => type === "heading" && depth === 1
  );

  return titleNode
    ? titleNode.children.find(({ type }) => type === "text").value
    : null;
};

const extract = path => {
  const file = readSync(path);
  const tree = remark()
    .use(mdx)
    .parse(file);

  const meta = {
    title: getTitle(tree)
  };

  return meta;
};

const getSlugs = () => fs.readdirSync("./posts");

const getPosts = () =>
  getSlugs().map(slug => {
    const meta = extract("./posts/" + slug + "/index.mdx", "utf8");

    return {
      slug,
      ...meta
    };
  });

module.exports = {
  getSlugs,
  getPosts
};
