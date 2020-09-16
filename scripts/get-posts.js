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

    const [, datestring, slug] = dir.match(/(\d{4}-\d{2}-\d{2})-(.+)/) || [];

    if (!datestring || !slug) {
      throw new Error(
        `Post folder bad formatted for ${dir}, please use this format: 'YYYY-MM-DD-my-postslug'`
      );
    }

    const date = new Date(datestring + " GMT-0300");

    const meta = {
      title: getTitle(tree),
      date: date.toUTCString(),
      datetime: date.getTime(),
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
    .sort((a, b) => b.datetime - a.datetime)
    .filter(Boolean);

module.exports = {
  getPosts,
  extract
};
