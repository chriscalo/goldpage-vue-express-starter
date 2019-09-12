import index from './index.vue';

export default {
  route: '/',
  view: index,
  addInitialProps() {
    return {
      time: new Date(),
    };
  },
  renderToHtml: true,
};
