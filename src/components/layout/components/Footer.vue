<template>
  <footer class="main-footer footer">
    <div class="pull-left">
      <button class="form-control" style="border-radius: 50px" @click="addItem()"><i class="fa fa-plus"></i></button>
    </div>
    <input class="form-control search" type="text" placeholder="Search">
  </footer>
</template>

<script>
  import constants from '@/store/constants'
  import {mapState} from 'vuex'
  export default {
    name: "Footer",
    methods: {
      addItem() {

        this.$store.dispatch(constants.SHOW_MODAL, true)
      }
    },
  }
</script>

<style scoped>
  .footer {
    position: fixed;
    bottom: 0;
  }
  .search {
    position: fixed;
    right: 15px;
    bottom: 15px;
    width: 200px;
    height: 34px;
  }
</style>
