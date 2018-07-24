<template>
  <div id="app">
    <div class="wrapper">
      <gnb></gnb>
      <Lnb></Lnb>
      <va-content-wrap></va-content-wrap>
      <footer class="main-footer">
        fdsafdsadfsa
      </footer>
    </div>
  </div>
</template>

<script>
  import Gnb from './components/layout/Gnb.vue'
  import Lnb from './components/layout/Lnb.vue'
  import VAContentWrap from './components/layout/ContentWrap.vue'


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
      'va-content-wrap': VAContentWrap,
    },
}
</script>

<style>

</style>
