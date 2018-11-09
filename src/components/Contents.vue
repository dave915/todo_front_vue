<template>
  <div>
    <content-title :title="title" :sub-title="subTitle"/>
    <section class="content">
      <div v-if="isNotStatusContent">
        <item-list :item-list="itemList" :group="group"/>
      </div>
      <div v-else>
        <item-list :item-list="itemList.filter(i => i.status === 1)" :group="group" status="Todo"/>
        <item-list :item-list="itemList.filter(i => i.status === 2)" :group="group" status="Doing"/>
        <item-list :item-list="itemList.filter(i => i.status === 3)" :group="group" status="Done"/>
      </div>
    </section>
  </div>
</template>

<script>
  import ContentTitle from "./ContentsTitle";
  import ItemList from "./ItemList";
  import {mapState} from 'vuex';
  import constants from "../store/constants";
  import moment from 'moment';

  export default {
    name: "Contents",
    components: {
      ItemList,
      ContentTitle
    },
    watch: {
      path() {
        this.getItemList();
      },
      defaultGroup() {
        if(this.group.idx === undefined) {
          this.group = this.defaultGroup;
          this.getItemList();
        }
      },
    },
    computed: {
      ...mapState(['defaultGroup', 'selectedDay']),
      itemList: {
        get() {
          return this.$store.state.itemList
        },
        set(value) {
          this.$stroe.commit(constants.DRAG_ITEM, value);
        }
      },
      title() {
        return this.$route.meta.title;
      },
      subTitle() {
        return this.$route.meta.subTitle;
      },
      path() {
        return this.$route.path;
      },
      isNotStatusContent() {
        return !this.isAllStatus() || this.$route.meta.title === 'LogBack'
      }
    },
    methods: {
      isAllStatus() {
        const menuTitle = this.$route.meta.title.toLowerCase();
        return !(menuTitle === 'todo' || menuTitle === 'doing' || menuTitle === 'done');
      },
      setCalender() {
        if(this.path.startsWith('/today') || this.path.startsWith('/group')) {
          this.$store.dispatch(constants.CALENDER_INIT, {start: this.today, end: this.today});
        } else {
          this.$store.dispatch(constants.CALENDER_INIT, {start: null, end: null});
        }
      },
      getItemList() {
        this.setCalender();
        const searchOption = this.getSearchOption();
        this.$store.dispatch(constants.SEARCH_OPTION_SET, searchOption);
        this.$store.dispatch(constants.ITEM_LIST, searchOption);
      },
      getSearchOption() {
        let searchOption;

        if (this.path.startsWith('/today'))
          searchOption = {startDate: this.selectedDay.start, endDate: this.selectedDay.end, status: null};
        else if (this.path.startsWith('/status/all'))
          searchOption = {};
        else if (this.path.startsWith('/status/todo'))
          searchOption = {status: 1};
        else if (this.path.startsWith('/status/doing'))
          searchOption = {status: 2};
        else if (this.path.startsWith('/status/done'))
          searchOption = {status: 3};
        else if (this.path.startsWith('/group'))
          searchOption = {groupIdx: this.path.split('/')[2]};
        else if (this.path.startsWith('/logback'))
          searchOption = {groupIdx: this.group.idx, itemType: 2};

        return searchOption;
      }
    },
    data() {
      return {
        today: moment(new Date()).format('YYYY.MM.DD 00:00:00'),
        group: {},
      }
    },
    mounted() {
      this.getItemList();
    }
  }
</script>

<style scoped>

</style>
