<template>
  <div>
    <a href="../">back</a>
    <br/>
    Hello, {{ isReversed ? nameReversed : name }},
    welcome to <code>Goldpage</code>.
    <br/>
    <button @click="toggleReverse">Reverse name</button>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  props: ['name', 'nameReversed'],
  data() {
    return {
      isReversed: false,
      bundler: "Webpack"
    };
  },
  methods: {
    toggleReverse: function() {
      this.isReversed = !this.isReversed;
    },
  },
};
</script>

<style scoped>
  code {
    color: gold;
  }
</style>
