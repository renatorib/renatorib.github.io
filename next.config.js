const fs = require("fs");
const { join } = require("path");

const withPlugins = require("next-compose-plugins");
const withOptimizedImages = require("next-optimized-images");
const nextMDX = require("@zeit/next-mdx");
const { getPosts } = require("./scripts/get-posts");

const plugins = [
  withOptimizedImages,
  nextMDX({
    extension: /\.(md|mdx)$/
  })
];

const config = {
  pageExtensions: ["js", "jsx", "mdx"],

  exportPathMap: async function(defaultPathMap, { dev, dir, outDir }) {
    const STATIC_ROOT_FILES = ["CNAME", ".nojekyll"];

    if (!dev) {
      // copy static root files
      STATIC_ROOT_FILES.forEach(file =>
        fs.copyFileSync(join(dir, file), join(outDir, file))
      );

      fs.writeFileSync(
        join(outDir, "README.md"),
        "The `master` branch contains build source for gh-pages." +
          "If you're looking for source code, switch to `src` branch"
      );
    }

    delete defaultPathMap["/blog/[slug]"];

    const postsPathMap = getPosts().reduce(
      (acc, post) => ({
        ...acc,
        [`/blog/${post.slug}`]: {
          page: "/blog/[slug]",
          query: { slug: post.slug }
        }
      }),
      {}
    );

    return {
      ...defaultPathMap,
      ...postsPathMap,
      "/404.html": { page: "/_error" }
    };
  }
};

module.exports = withPlugins(plugins, config);
