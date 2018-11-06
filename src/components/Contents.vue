<template>
  <content-title :title="title" :sub-title="subTitle"/>
</template>

<script>
  import ContentTitle from "./ContentsTitle";

  export default {
    name: "Contents",
    components: {
      ContentTitle
    },
    computed: {
      title() {
        return this.$route.meta.title;
      },
      subTitle() {
        return this.$route.meta.subTitle;
      }
    }
  }
</script>

<style scoped>

</style>
