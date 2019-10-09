import name from "./:name.vue";
import { fileroute } from "~/util/goldpage";

export default {
  route: fileroute(__filename),
  addInitialProps,
  view: name,
  title,
  renderToHtml: true,
};

async function addInitialProps({name}) {
  const nameReversed = name.split("").reverse().join("");
  return {
    name,
    nameReversed,
  };
}

function title({name}) {
  return `Hi, ${name}`;
}
