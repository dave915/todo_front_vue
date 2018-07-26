<template>
  <footer class="main-footer footer">
    <div class="pull-left">
      <span style="font-size:24px;" @click="addItem"><i class="fa fa-plus-circle"></i></span>
    </div>
    <input class="form-control search" type="text" placeholder="Search">
  </footer>
</template>

<script>
  import constants from '@/store/constants'
  export default {
    name: "Footer",
    methods: {
      addItem() {
        this.$store.dispatch(constants.ADD_TODO, {title: 'Design a nice theme 1111111'});
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
