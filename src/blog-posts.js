const postFileNames =
  preval`
module.exports = require("fs").readdirSync("./src/pages/blog")
` || [];

const posts = postFileNames.map(name => {
  const {
    default: Component,
    meta
  } = require(`./pages/blog/${name}/index.mdx`);

  return {
    route: `/blog/${name}`,
    Component,
    meta
  };
});

export default posts;
