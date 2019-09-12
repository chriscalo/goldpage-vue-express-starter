<script>
  export default {
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
    <a href="/hello/jon">/hello/jon</a>
    <br/>
    {{ time }}
  </div>
</template>
