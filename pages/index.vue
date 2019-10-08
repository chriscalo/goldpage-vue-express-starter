<script>
  import Navigation from "~/components/Navigation.vue";
  
  const components = {
    Navigation,
  };
  
  export default {
    components,
    props: {
      time: {
        type: Date,
        default: "default",
      },
    },
  };
</script>

<template>
  <div>
    <Navigation/>
    Time from server when loaded: <br/>
    {{ time }}
  </div>
</template>
