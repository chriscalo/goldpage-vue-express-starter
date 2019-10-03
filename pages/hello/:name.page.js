import name from './:name.vue';
import { route } from "~/util";

export default {
  route: '/hello/:name',
  addInitialProps,
  view: name,
  title,
  renderToHtml: true,
};

async function addInitialProps({name}) {
  // name is undefined in the browser. why?
  // Because `__filename==='pages/hello/:name.page.js'` is Node.js BUT `__filename==='/index.js'.
  // (That's because of Webpack doesn't properly replace __filename.)
  // See:
  console.log((typeof window==='undefined'?'Server':'Browser')+'-side __filename value: '+__filename);
  console.log(name);
  
  const nameReversed = name.split('').reverse().join('');
  return {
    name,
    nameReversed,
  };
}

function title({name}) {
  return `Hi, ${name}`;
}
