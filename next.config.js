const fs = require("fs");
const { join } = require("path");
const { promisify } = require("util");

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
          promisify(fs.copyFile)(join(dir, file), join(outDir, file))
        )
      );
    }

    return {
      "/404.html": { page: "/_error" },
      "/": { page: "/" },
      "/hello-world": { page: "/posts/hello-world" },
      "/hello-world-2": { page: "/posts/hello-world2" }
    };
  }
};

module.exports = module.exports = withPlugins(plugins, config);
