<template>
  <div>
    <content-title title="Today" subTitle="Todo's Todo"></content-title>
    <section class="content">
      <draggable v-model="itemList" class="todo-list" :options="{handle:'.handle'}">
        <li v-for="(item, index) in itemList" class="item">
          <todo-item :item="item" :index="index"></todo-item>
        </li>
      </draggable>
    </section>
  </div>
</template>

<script>

  import draggable from 'vuedraggable'
  import constants from '@/store/constants'
  import ContentTitle from './layout/components/ContentTitle'
  import TodoItem from "./TodoItem";

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
    computed: {
      itemList: {
        get() {
          return this.$store.state.itemList
        },
        set(value) {
          this.$store.commit(constants.DRAG_ITEM, value)
        }
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>
  .item {
    background: #d2d6de;
    border-left: 2px solid #3c8dbc;
  }
</style>
