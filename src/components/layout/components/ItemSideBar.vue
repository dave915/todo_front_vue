<template>
  <aside :class="asideClass">
    <!-- Create the tabs -->
    <div style="width: 290px; padding: 10px 5px 10px 10px;">
      <div class="row">
        <div class="col-lg-12">
          <span @click="closeItemSide"><i class="fa fa-arrow-right"></i></span>
        </div>
      </div>
      <div class="row division"></div>
      <div class="row">
        <div class="col-lg-12">
          <label>항목</label>
          <input type="text" class="form-control" v-model="item.title">
        </div>
      </div>
      <div class="row division"></div>
      <div class="row">
        <div class="col-lg-12">
          <label>D-Day</label>
          <input type="text" class="form-control" v-model="item.title">
        </div>
      </div>
      <div class="row division"></div>
      <div class="row">
        <div class="col-lg-12">
          <label>목표일</label>
          <input type="text" class="form-control" v-model="item.title">
        </div>
      </div>
      <div class="row division"></div>
      <div class="row">
        <div class="col-lg-12">
          <label>반복</label>
          <input type="text" class="form-control" v-model="item.title">
        </div>
      </div>
      <div class="row division"></div>
      <div class="row">
        <div class="col-lg-12">
          <label>알림</label>
          <input type="text" class="form-control" v-model="item.title">
        </div>
      </div>
      <div class="row division"></div>
      <div class="row">
        <div class="col-lg-12">
          <label>태그</label>
          <input type="text" class="form-control" v-model="item.title">
        </div>
      </div>
      <div class="row division"></div>
      <div class="row">
        <div class="col-lg-12">
          <label>메모</label>
          <textarea class="form-control" rows="8" style="resize: none;"></textarea>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
  import {mapState} from 'vuex'
  import constants from "../../../store/constants";

  export default {
    name: "ItemSideBar",
    computed: {
      ...mapState(['itemSidebarOpen', 'currentItem']),
    },
    watch: {
      itemSidebarOpen() {
        if(this.itemSidebarOpen)
         this.asideClass.push('control-sidebar-open');
        else
          this.asideClass = this.asideClass.filter(c => c !== 'control-sidebar-open');
      },
      currentItem() {
        console.log(this.currentItem)
        this.item = this.currentItem
      }
    },
    data() {
      return {
        asideClass: ['control-sidebar', 'item-detail-bar'],
        item: {
          title: '333'
        },
      }
    },
    methods: {
      closeItemSide() {
        this.$store.dispatch(constants.ITEM_SIDEBAR_CLOSE)
      }
    },
    mounted() {
    }

  }
</script>

<style scoped>
  .item-detail-bar {
    width: 300px;
    right: -300px;
    background: #dfdfdf;
  }

  .item-detail-bar.control-sidebar-open {
    right: 0;
  }

  .division {
    border-top: 1px #f4f4f4 solid;
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>
