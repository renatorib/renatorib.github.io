const fsp = require("fs.promises");
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
      await Promise.all(
        STATIC_ROOT_FILES.map(file =>
          fsp.copyFile(join(dir, file), join(outDir, file))
        )
      );
    }

    return {
      ...defaultPathMap,
      "/404.html": { page: "/_error" }
    };
  }
};

module.exports = withPlugins(plugins, config);
