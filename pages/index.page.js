import index from './index.vue';
import { route } from "~/util";

export default {
  route: route(__filename),
  view: index,
  addInitialProps() {
    return {
      time: new Date(),
    };
  },
  renderToHtml: true,
};
