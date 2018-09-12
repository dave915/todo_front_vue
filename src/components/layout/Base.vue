<template>
  <div class="wrapper">
    <gnb></gnb>
    <Lnb></Lnb>
    <Contents style="padding-bottom: 64px;">
    </Contents>
    <TodoWrite v-if="showModal"  @close="closeModal()" @add="addItem()">
      <h3 slot="header">항목 추가</h3>
    </TodoWrite>
    <Footer/>
  </div>
</template>

<script>
  import Gnb from './components/Gnb.vue'
  import Lnb from './components/Lnb.vue'
  import Contents from './components/Contents.vue'
  import Footer from './components/Footer'
  import TodoWrite from './components/TodoWrite.vue'
  import {mapState} from 'vuex'
  import constants from '@/store/constants'

  export default {
    name: "Base",
    methods: {
      closeModal(){
        this.$store.dispatch(constants.SHOW_MODAL, false);
      },
      addItem(){
        this.$store.dispatch(constants.ADD_TODO, {title: 'Design a nice theme 1111111'});
        this.closeModal();
      }
    },
    created() {
    },
    computed:{
      ...mapState(['showModal'])
    },
    components: {
      Gnb,
      Lnb,
      Contents,
      Footer,
      TodoWrite,
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
