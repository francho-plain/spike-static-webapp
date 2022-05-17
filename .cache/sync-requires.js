
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/francho/code/i+d/spike-static-webapp/.cache/dev-404-page.js")),
  "component---src-pages-404-tsx": preferDefault(require("/home/francho/code/i+d/spike-static-webapp/src/pages/404.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/home/francho/code/i+d/spike-static-webapp/src/pages/index.tsx"))
}

