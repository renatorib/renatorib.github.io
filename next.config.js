const fs = require("fs");
const { join } = require("path");

const withPlugins = require("next-compose-plugins");
const withOptimizedImages = require("next-optimized-images");
const nextMDX = require("@zeit/next-mdx");

const plugins = [
  withOptimizedImages,
  nextMDX({
    extension: /\.(md|mdx)$/
  })
];

const config = {
  pageExtensions: ["js", "jsx", "mdx"],

  exportPathMap: async function(defaultPathMap, { dev, dir, outDir }) {
    const STATIC_ROOT_FILES = ["CNAME", "README.md", ".nojekyll"];

    if (!dev) {
      // copy static root files
      STATIC_ROOT_FILES.forEach(file =>
        fs.copyFileSync(join(dir, file), join(outDir, file))
      );
    }

    delete defaultPathMap["/blog/[slug]"];

    const postsPathMap = fs.readdirSync("./posts").reduce(
      (acc, slug) => ({
        ...acc,
        [`/blog/${slug}`]: { page: "/blog/[slug]" }
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
