<template>
  <div class="wrapper">
    <gnb></gnb>
    <Lnb></Lnb>
    <Contents style="padding-bottom: 64px;"></Contents>
    <Footer></Footer>
  </div>
</template>

<script>
  import Gnb from './components/Gnb.vue'
  import Lnb from './components/Lnb.vue'
  import Contents from './components/Contents.vue'
  import Footer from './components/Footer'

  export default {
    name: "Base",
    data() {
      return {}
    },
    created() {
    },
    components: {
      Gnb,
      Lnb,
      Contents,
      Footer
    },
    mounted() {
    }
  }
</script>

<style scoped>

</style>
