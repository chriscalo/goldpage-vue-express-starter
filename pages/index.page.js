import { endpoints } from "wildcard-api/client";
import index from "./index.vue";
import { fileroute } from "~/util/goldpage";

export default {
  route: fileroute(__filename),
  view: index,
  async addInitialProps(context) {
    return {
      time: new Date(),
      greeting: await endpoints.greet.call(context),
    };
  },
  renderToHtml: true,
};
