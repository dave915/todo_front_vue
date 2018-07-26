<template>
  <div>
    <content-title title="Today" subTitle="Todo's Todo"></content-title>
    <section class="content">
      <draggable v-model="itemList" class="todo-list" :options="{handle:'.handle'}">
        <li v-for="(item, index) in itemList" class="item">
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
          <small class="label label-danger"><i class="fa fa-clock-o"></i> 2 mins</small>
          <!-- General tools such as edit or delete-->
          <div class="tools">
            <i class="fa fa-edit"></i>
            <i class="fa fa-trash-o" @click="deleteItem(index)"></i>
          </div>
        </li>
      </draggable>
    </section>
  </div>
</template>

<script>

  import draggable from 'vuedraggable'
  import {mapState} from 'vuex'
  import constants from '@/store/constants'
  import ContentTitle from './layout/ContentTitle'

  export default {
    name: "Sample",
    components: {
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
      },
      ...mapState({
        sidebarOpen: state => state.sidebarOpen
      })
    },
    methods: {
      deleteItem(index) {
        this.$store.dispatch(constants.DELETE_TODO, index);
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
