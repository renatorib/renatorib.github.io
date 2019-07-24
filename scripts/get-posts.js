const fs = require("fs");
const mdxToHast = require("./mdx-to-hast");

const getTitle = tree => {
  const h1 = tree.children.find(n => n.tagName === "h1");
  const text = h1 && h1.children.find(n => n.type === "text");

  return text ? text.value : null;
};

const extract = dir => {
  try {
    const tree = mdxToHast(fs.readFileSync("./posts/" + dir + "/index.mdx"));

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

const getPosts = () =>
  fs
    .readdirSync("./posts")
    .map(extract)
    .filter(Boolean);

module.exports = {
  getPosts,
  extract
};
