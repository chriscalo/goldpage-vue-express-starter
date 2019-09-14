import index from './index.vue';

export default {
  // FIXME: Possible to supply a relative route? Express subapps work this way
  // and it makes composition (and refactoring) much simpler.
  route: '/foo',
  view: index,
  addInitialProps() {
    return {
      time: new Date(),
    };
  },
  renderToHtml: true,
};
