const fs = require("fs");
const slugify = require("@sindresorhus/slugify");
const mdxToHast = require("./mdx-to-hast");

const getTitle = tree => {
  const h1 = tree.children.find(n => n.tagName === "h1");
  const text = h1 && h1.children.find(n => n.type === "text");

  return text ? text.value : null;
};

const getToC = tree => {
  const headings = tree.children.filter(n =>
    ["h1", "h2", "h3", "h4", "h5", "h6"].includes(n.tagName)
  );

  const levels = {
    h1: 2, // h1 always point to the "Introduction" section, that have same level as other top topics
    h2: 2,
    h3: 3,
    h4: 4,
    h5: 5,
    h6: 6
  };

  return headings.map(heading => {
    const text = heading.children.find(n => n.type === "text").value;
    return {
      text: heading.tagName === "h1" ? "Introduction" : text,
      level: levels[heading.tagName],
      slug: slugify(text)
    };
  });
};

const extract = dir => {
  try {
    const tree = mdxToHast(fs.readFileSync("./posts/" + dir + "/index.mdx"));

    const [, datestring, slug] = dir.match(/(\d{4}-\d{2}-\d{2})-(.+)/) || [];

    if (!datestring || !slug) {
      throw new Error(
        `Post folder bad formatted for ${dir}, please use this format: 'YYYY-MM-DD-my-post-slug'`
      );
    }

    const date = new Date(datestring + " GMT-0300");

    const defaultMeta = {
      title: getTitle(tree),
      toc: getToC(tree),
      date: date.toUTCString(),
      datetime: date.getTime(),
      slug,
      dir
    };

    return defaultMeta;
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
