<template>
  <div @click="openDetail">
    <!-- drag handle -->
    <span class="handle">
      <i class="fa fa-ellipsis-v"></i>
      <i class="fa fa-ellipsis-v"></i>
    </span>
    <!-- checkbox -->
    <!--<input type="checkbox" v-model="item.status">-->
    <span @click.stop="statusClicked"><i :class="getStatusClass()" style="cursor: pointer"></i></span>
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
  import _ from 'lodash'
  import {mapState} from 'vuex'

  export default {
    name: "TodoItem",
    props: ['item', 'index', 'group'],
    computed: {
      ...mapState(['searchOption']),
    },
    methods: {
      deleteItem(index) {
        this.$store.dispatch(constants.ITEM_DELETE, this.item.idx)
          .then(() => this.$store.dispatch(constants.ITEM_LIST, this.group.idx));
      },
      openDetail() {
        this.$store.dispatch(constants.ITEM_SIDEBAR_OPEN, this.item)
      },
      getStatusClass() {
        if(this.item.status === 1)
          return 'fa fa-hourglass-start';
        else if(this.item.status === 2)
          return 'fa fa-hourglass-half';
        else if(this.item.status === 3)
          return 'fa fa-hourglass-end';

        return '';
      },
      statusClicked() {
        let currentItem = _.assign({}, this.item);
        currentItem.status = this.getNextStatus(currentItem.status);
        this.$store.dispatch(constants.ITEM_SAVE, currentItem)
          .then(() => this.$store.dispatch(constants.ITEM_LIST, this.searchOption))
      },
      getNextStatus(currentStatus) {
        let nextStatus = currentStatus + 1;
        if(nextStatus > 3)
          nextStatus = 1;

        return nextStatus;
      }
    },
  }
</script>

<style scoped>

</style>
