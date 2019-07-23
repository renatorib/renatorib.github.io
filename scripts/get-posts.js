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

const extract = dir => {
  try {
    const file = readSync("./posts/" + dir + "/index.mdx");

    const tree = remark()
      .use(mdx)
      .parse(file);

    const [, date, slug] = dir.match(/(\d{4}-\d{2}-\d{2})-(.+)/) || [];

    if (!date || !slug) {
      throw new Error(
        `Post folder bad formatted for ${dir}, please use this format: 'YYYY-MM-DD-my-postslug'`
      );
    }

    const meta = {
      title: getTitle(tree),
      date: new Date(date + " GMT-0300").toUTCString(),
      slug,
      dir
    };

    return meta;
  } catch (e) {
    console.error(e); // eslint-disable-line
    return null;
  }
};

const getDirs = () => fs.readdirSync("./posts");

const getPosts = () =>
  getDirs()
    .map(extract)
    .filter(Boolean);

module.exports = {
  getPosts
};
