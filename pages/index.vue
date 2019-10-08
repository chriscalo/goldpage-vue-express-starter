<script>
  import Navigation from "~/components/Navigation.vue";
  
  const components = {
    Navigation,
  };
  
  export default {
    components,
    props: {
      time: Date,
      greeting: String,
    },
  };
</script>

<template>
  <div>
    <Navigation/>
    {{ greeting }} at {{ time }}
  </div>
</template>
