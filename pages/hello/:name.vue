<template>
  <div>
    <Navigation/>
    <p>
      Hello, {{ isReversed ? nameReversed : name }},
      welcome to <code>Goldpage</code>.
    </p>
    <div>
      <button @click="toggleReverse">Reverse name</button>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import Navigation from "~/components/Navigation.vue";
  
  const components = {
    Navigation,
  };
  
  export default {
    props: ["name", "nameReversed"],
    components,
    data() {
      return {
        isReversed: false,
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
