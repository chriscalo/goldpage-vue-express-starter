import { endpoints } from "wildcard-api/client";
import index from "./index.vue";
import { route } from "~/util";

export default {
  route: route(__filename),
  view: index,
  async addInitialProps({isNodejs, headers}) {
    let {greet} = endpoints;
    if( isNodejs ) {
      // When we use the Wildcard client in Node.js
      // we have to use `bind` and manually provide the `requestProps`.
      const requestProps = {headers, requestPropsFromSSR: true};
      greet = greet.bind(requestProps);
    }

    return {
      time: new Date(),
      greeting: await greet(),
    };
  },
  renderToHtml: true,
};
