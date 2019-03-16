const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/renatorib/p/renato/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/renatorib/p/renato/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/renatorib/p/renato/src/pages/index.js"))),
  "component---src-pages-posts-hello-world-mdx": hot(preferDefault(require("/home/renatorib/p/renato/src/pages/posts/hello-world.mdx")))
}

