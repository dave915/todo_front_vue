<template>
  <div :class="boxClass">
    <div class="box-header with-border" v-if="status">
      <h3 class="box-title">{{getStatusName(status)}}</h3>
      <div class="box-tools pull-right">
        <button type="button" class="btn btn-box-tool">
          <i :class="minusBtn" @click="toggleBox"></i>
        </button>
      </div>
    </div>
    <div class="box-body">
      <draggable v-model="list" class="todo-list" :options="{handle:'.handle', group:'todo'}" @add="addItem">
        <li v-for="(item, index) in list" class="item">
          <Item :item="item" :index="index" :group="group"/>
        </li>
      </draggable>
      <div v-if="list !== null && list.length < 1 " style="text-align: center; margin-bottom: 10px">
        일정이 없습니다.
      </div>
    </div>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  import ContentsTitle from './ContentsTitle'
  import Item from "./Item";
  import constants from "../store/constants";
  import {mapState} from 'vuex';

  export default {
    name: "ItemList",
    props: ['itemList', 'group', 'status'],
    data() {
      return {
        boxClass: 'box box-info',
        minusBtn: 'fa fa-minus',
        list: null
      }
    },
    computed: {
      ...mapState(['searchOption']),
    },
    watch: {
      itemList() {
        if(this.list === null && this.itemList.length > 0)
          this.list = this.itemList;
      }
    },
    components: {
      Item,
      draggable,
      ContentsTitle
    },
    methods: {
      toggleBox() {
        this.minusBtn = this.minusBtn.includes('fa-minus') ? 'fa fa-plus' : 'fa fa-minus';
        this.boxClass = this.boxClass.includes('collapsed-box') ? 'box box-info' : 'box box-info collapsed-box';
      },
      addItem(element) {
        const addedItem = this.list[element.newIndex];
        addedItem.status = parseInt(this.status);
        this.$store.dispatch(constants.ITEM_SAVE, addedItem)
          .then(() => this.$store.dispatch(constants.ITEM_LIST, this.searchOption))
      },
      getStatusName(status) {
        let statusName = '';
        const statusNum = parseInt(status);

        if(statusNum === 1)
          statusName = 'Todo';
        else if(statusNum === 2)
          statusName = 'Doing';
        else if(statusNum === 3)
          statusName = 'Done';

        return statusName;
      }
    }
  }
</script>

<style scoped>
  .item {
    background: #d2d6de;
    border-left: 2px solid #3c8dbc;
  }

  .todo-list {
    min-height: 10px;
  }
</style>
