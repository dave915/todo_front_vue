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
      // 빈페이지 다녀오고 트리메뉴가 동작 안하는 문제 때문에 임시로 넣음
      $(document).ready(() => {
        const trees = $('[data-widget="tree"]');
        trees.tree();
      });
    }
  }
</script>

<style scoped>

</style>
