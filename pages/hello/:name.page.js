import name from "./:name.vue";
import { route } from "~/util";

export default {
  route: route(__filename),
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
