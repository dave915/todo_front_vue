<template>
  <div @click="openDetail">
    <!-- drag handle -->
    <span class="handle">
      <i class="fa fa-ellipsis-v"></i>
      <i class="fa fa-ellipsis-v"></i>
    </span>
    <!-- checkbox -->
    <input type="checkbox" v-model="item.status">
    <!-- todo text -->
    <span class="text">{{item.title}}</span>
    <!-- Emphasis label -->
    <!--<small class="label label-danger">-->
      <!--<i class="fa fa-clock-o"></i>-->
      <!--2 mins-->
    <!--</small>-->
    <!-- General tools such as edit or delete-->
    <div class="tools">
      <i class="fa fa-trash-o" @click.stop="deleteItem(index)"></i>
    </div>
  </div>
</template>

<script>
  import constants from '@/store/constants'
  export default {
    name: "TodoItem",
    props: ['item', 'index', 'defaultGroup'],
    methods: {
      deleteItem(index) {
        this.$store.dispatch(constants.ITEM_DELETE, this.item.idx)
          .then(() => this.$store.dispatch(constants.ITEM_LIST, this.defaultGroup.idx));
      },
      openDetail() {
        this.$store.dispatch(constants.ITEM_SIDEBAR_OPEN, this.item)
      }
    },
  }
</script>

<style scoped>

</style>
