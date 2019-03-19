const fsp = require("fs.promises");
const path = require("path");
const { join } = require("path");

const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const nextMDX = require("@zeit/next-mdx");

const plugins = [
  withImages,
  nextMDX({
    extension: /\.(md|mdx)$/
  })
];

const config = {
  pageExtensions: ["js", "jsx", "mdx"],

  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
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
      "/404.html": { page: "/_error" },
      "/": { page: "/" }
    };
  }
};

module.exports = withPlugins(plugins, config);
