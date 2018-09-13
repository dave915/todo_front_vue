<template>
  <footer class="main-footer footer">
    <div class="pull-left">
      <button class="form-control" style="border-radius: 50px" @click="showAddItemModal()"><i class="fa fa-plus"></i></button>
    </div>
    <input class="form-control search" type="text" placeholder="Search">
  </footer>
</template>

<script>
  import constants from '@/store/constants'
  import {mapState} from 'vuex'
  export default {
    name: "Footer",
    computed: {
      ...mapState(['defaultGroup'])
    },
    methods: {
      showAddItemModal() {
        const modalInfo = {
          isShow: true,
          title: '항목 추가',
          placeholder: '항목명',
          modalName: 'addModal',
          modalType: 'item',
          onConfirm: this.addItem
        };
        this.$store.dispatch(constants.SHOW_MODAL, modalInfo)
      },
      addItem(groupIdx, title) {
        this.$store.dispatch(constants.ITEM_ADD, {groupIdx, title})
          .then(() => this.$store.dispatch(constants.ITEM_LIST, this.defaultGroup.idx));
        this.$store.dispatch(constants.INIT_MODAL)
      }
    },
  }
</script>

<style scoped>
  .footer {
    position: fixed;
    bottom: 0;
  }
  .search {
    position: fixed;
    right: 15px;
    bottom: 15px;
    width: 200px;
    height: 34px;
  }
</style>
