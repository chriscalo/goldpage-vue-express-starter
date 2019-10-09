import index from "./index.vue";
import { fileroute } from "~/util/goldpage";

export default {
  route: fileroute(__filename),
  view: index,
  addInitialProps() {
    return {
      time: new Date(),
    };
  },
  renderToHtml: true,
};
