// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/home/renatorib/p/renato/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/home/renatorib/p/renato/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/home/renatorib/p/renato/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-posts-hello-world-mdx": () => import("/home/renatorib/p/renato/src/pages/posts/hello-world.mdx" /* webpackChunkName: "component---src-pages-posts-hello-world-mdx" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/home/renatorib/p/renato/.cache/data.json")

