<template>
  <div id="app">
    <div class="wrapper">
      <gnb></gnb>
      <Lnb></Lnb>
      <Contents style="padding-bottom: 64px;"></Contents>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
  import Gnb from './components/layout/Gnb.vue'
  import Lnb from './components/layout/Lnb.vue'
  import Contents from './components/layout/Contents.vue'
  import Footer from './components/layout/Footer'


  export default {
    name: 'App',
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

<style>
</style>
