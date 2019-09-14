import name from './:name.vue';
import util from 'util';

export default {
  route: '/hello/:name',
  addInitialProps,
  view: name,
  title,
  renderToHtml: true,
};

async function addInitialProps(context) {
  const { name } = context;
  
  console.log(context.constructor.name);
  
  // We simulate a network request delay
  await sleep(0.5);

  const nameReversed = name.split('').reverse().join('');
  return {
    nameReversed,
  };
}

function title({name}) {
  return `Hi, ${name}`;
}

function sleep(seconds) {
  let resolve;
  const promise = new Promise(r => resolve=r);
  setTimeout(resolve, seconds*1000);
  return promise;
}
