<template>
  <section class="content-header">
    <h1>
      {{title}}
      <small>{{subTitle}}</small>
    </h1>
  </section>
</template>

<script>
  export default {
    name: "ContentTitle",
    props: ['title', 'subTitle']
  }
</script>

<style scoped>

</style>
