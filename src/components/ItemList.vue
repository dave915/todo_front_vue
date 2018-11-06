<template>
  <div>
    <contents-title :title="title" :subTitle="subTitle"/>
    <section class="content">
      <draggable v-model="itemList" class="todo-list" :options="{handle:'.handle'}">
        <li v-for="(item, index) in itemList" class="item">
          <Item :item="item" :index="index" :group="group"/>
        </li>
      </draggable>
      <div v-if="itemList.length < 1" style="text-align: center">
        일정이 없습니다.
      </div>
    </section>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  import ContentsTitle from './ContentsTitle'
  import Item from "./Item";

  export default {
    name: "ItemList",
    props: ['itemList', 'group', 'title', 'subTitle'],
    data() {
      return {

      }
    },
    components: {
      Item,
      draggable,
      ContentsTitle
    },
  }
</script>

<style scoped>
  .item {
    background: #d2d6de;
    border-left: 2px solid #3c8dbc;
  }
</style>
