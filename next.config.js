// next.config.js
const fs = require("fs");
const { join } = require("path");
const { promisify } = require("util");
const copyFile = promisify(fs.copyFile);

const STATIC_ROOT_FILES = ["CNAME", "README.md", ".nojekyll"];

module.exports = {
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    if (!dev) {
      // copy static root files
      await Promise.all(
        STATIC_ROOT_FILES.map(file =>
          copyFile(join(dir, file), join(outDir, file))
        )
      );
    }

    return {
      "/404.html": { page: "/_error" },
      "/": { page: "/" },
      "/hello-world": { page: "/posts/hello-world" }
    };
  }
};
