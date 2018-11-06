<template>
  <div :class="boxClass">
    <div class="box-header with-border" v-if="status">
      <h3 class="box-title">{{status}}</h3>
      <div class="box-tools pull-right">
        <button type="button" class="btn btn-box-tool">
          <i :class="minusBtn" @click="toggleBox"></i>
        </button>
      </div>
    </div>
    <div class="box-body">
      <draggable v-model="itemList" class="todo-list" :options="{handle:'.handle'}">
        <li v-for="(item, index) in itemList" class="item">
          <Item :item="item" :index="index" :group="group"/>
        </li>
      </draggable>
      <div v-if="itemList.length < 1" style="text-align: center">
        일정이 없습니다.
      </div>
    </div>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  import ContentsTitle from './ContentsTitle'
  import Item from "./Item";

  export default {
    name: "ItemList",
    props: ['itemList', 'group', 'status'],
    data() {
      return {
        boxClass: 'box box-info',
        minusBtn: 'fa fa-minus',
      }
    },
    computed: {
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
      }
    }
  }
</script>

<style scoped>
  .item {
    background: #d2d6de;
    border-left: 2px solid #3c8dbc;
  }
</style>
