import path from "path";

// converts *.page.js into route string
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
  
  console.log(`route = ${route}`);
  
  return route;
};
