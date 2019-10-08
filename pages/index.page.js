import { endpoints } from "wildcard-api/client";
import index from "./index.vue";
import { route } from "~/util";

export default {
  route: route(__filename),
  view: index,
  async addInitialProps() {
    return {
      time: new Date(),
      greeting: await endpoints.greet(),
    };
  },
  renderToHtml: true,
};
