import path from "path";

// convert *.page.js file path into route string
export function fileroute(filename) {
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

// better names for the useful parts of the Goldpage context object passed to
// `addInitialProps()`
export function contextAdapter(context) {
  const {
    __sources: {
      requestObject: req,
      urlProps: url,
      routeArguments: params,
      isNodejs,
    },
  } = context;
  const { res, next } = req;
  
  return {
    req,
    res,
    next,
    url,
    params,
    isNodejs,
  };
}
