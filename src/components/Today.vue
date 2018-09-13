<template>
  <div>
    <content-title title="Today" subTitle="Todo's Todo"></content-title>
    <section class="content">
      <draggable v-model="itemList" class="todo-list" :options="{handle:'.handle'}">
        <li v-for="(item, index) in itemList" class="item">
          <todo-item :item="item" :index="index" :defaultGroup="defaultGroup"></todo-item>
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
  import constants from '@/store/constants'
  import ContentTitle from './layout/components/ContentTitle'
  import TodoItem from "./TodoItem";
  import {mapState} from 'vuex'

  export default {
    name: "Sample",
    components: {
      TodoItem,
      draggable,
      ContentTitle
    },
    data() {
      return {};
    },
    watch: {
      defaultGroup() {
        if(this.defaultGroup.idx !== '')
          this.$store.dispatch(constants.ITEM_LIST, this.defaultGroup.idx);
      }
    },
    computed: {
      ...mapState(['defaultGroup']),
      itemList: {
        get() {
          return this.$store.state.itemList
        },
        set(value) {
          this.$store.commit(constants.DRAG_ITEM, value)
        }
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
