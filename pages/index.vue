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
    <a href="/hello/chris">/hello/chris</a>
    <br/>
    <a href="/foo">foo</a>
    <br/>
    {{ time }}
  </div>
</template>
