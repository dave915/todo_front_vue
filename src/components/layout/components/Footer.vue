<template>
  <footer class="main-footer footer">
    <div class="pull-left">
      <button class="form-control" style="border-radius: 50px" @click="showAddItemModal()"><i class="fa fa-plus"></i></button>
    </div>
    <div class="search">
      <div class="row">
        <div class="col-md-4" style="padding: 0">
          <select type="text" class="form-control" v-model="searchType">
            <option :value="1">전체</option>
            <option :value="2">태그</option>
            <option :value="3">항목 + 상세</option>
          </select>
        </div>
        <div class="col-md-8">
          <input class="form-control" type="text" placeholder="Search" v-model="searchKeyword">
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import constants from '@/store/constants'
  import {mapState} from 'vuex'
  import _ from 'lodash'

  export default {
    name: "Footer",
    computed: {
      ...mapState(['defaultGroup', 'searchOption'])
    },
    data() {
      return {
        searchType: 1,
        searchKeyword: '',
      }
    },
    watch: {
      searchKeyword() {
        this.searchKeywordChanged();
      },
      searchType() {
        this.searchKeywordChanged();
      }
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
      addItem(item) {
        this.$store.dispatch(constants.ITEM_ADD, item)
          .then(() => this.$store.dispatch(constants.ITEM_LIST, this.searchOption));
        this.$store.dispatch(constants.INIT_MODAL)
      },
      searchKeywordChanged() {
        const searchOption = this.searchOption;
        searchOption.keyword = this.searchKeyword;
        searchOption.keywordType = this.searchType;
        this.$store.dispatch(constants.ITEM_LIST, searchOption)
      }
    },
    mounted() {
      this.searchKeywordChanged = _.debounce(this.searchKeywordChanged, 500);
    }
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
    width: 300px;
    height: 34px;
  }
</style>
