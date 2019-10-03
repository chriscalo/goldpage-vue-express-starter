import path from "path";

// convert *.page.js file path into route string
export function route(filename) {
  const route = String(filename)
    // web server routes are relative to pages dir
    .replace("pages/", "/")
    // use parent folder name for index pages
    .replace("index.page.js", "/")
    // use page name
    .replace(".page.js", "")
    // fix double slashes
    .replace("//", "/");
  
  return route;
};
