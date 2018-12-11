<template>
  <div @click.prevent="toggleDetail">
    <!-- drag handle -->
    <span class="handle">
      <i class="fa fa-ellipsis-v"></i>
      <i class="fa fa-ellipsis-v"></i>
    </span>
    <span @click.stop="statusClicked"><i :class="getStatusClass()" style="cursor: pointer"></i></span>
    <span class="text">{{item.title}}</span>
    <div class="tools">
      <i class="fa fa-trash-o" @click.stop="deleteItem()"></i>
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
      ...mapState(['searchOption', 'currentItem']),
    },
    methods: {
      deleteItem() {
        this.$store.dispatch(constants.ITEM_DELETE, this.item.idx)
          .then(() => this.$store.dispatch(constants.ITEM_LIST, this.group.idx));
      },
      toggleDetail() {
        if(this.currentItem.idx === this.item.idx)
          this.$store.dispatch(constants.ITEM_SIDEBAR_CLOSE);
        else
          this.$store.dispatch(constants.ITEM_SIDEBAR_OPEN, this.item);
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

        if(currentItem.status === 3) {
          this.$store.dispatch(constants.ITEM_ADD_REPEAT, currentItem)
        }

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
