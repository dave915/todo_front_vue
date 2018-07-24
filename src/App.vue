<template>
  <div id="app">
    <div class="wrapper">
      <gnb></gnb>
      <Lnb></Lnb>
      <contents style="padding-bottom: 30px;"></contents>
      <footer class="main-footer footer">
        fdsafdsadfsa
      </footer>
    </div>
  </div>
</template>

<script>
  import Gnb from './components/layout/Gnb.vue'
  import Lnb from './components/layout/Lnb.vue'
  import Contents from './components/layout/Contents.vue'


  export default {
  name: 'App',
    data () {
      return {
      }
    },
    created () {
    },
    components: {
      Gnb,
      Lnb,
      Contents,
    },
}
</script>

<style>
  .footer {
    position: fixed;
    bottom: 0;
  }
</style>
