<template>
  <div>
    <content-title :title="title" :sub-title="subTitle"/>
    <section class="content">
      <div v-if="isNotStatusContent">
        <item-list :item-list="itemList" :group="group"/>
      </div>
      <div v-else>
        <item-list :item-list="itemList" :group="group" status="Todo"/>
        <item-list :item-list="itemList" :group="group" status="Doing"/>
        <item-list :item-list="itemList" :group="group" status="Done"/>
      </div>
    </section>
  </div>
</template>

<script>
  import ContentTitle from "./ContentsTitle";
  import ItemList from "./ItemList";
  import {mapState} from 'vuex';
  import constants from "../store/constants";

  export default {
    name: "Contents",
    components: {
      ItemList,
      ContentTitle
    },
    watch: {
      title() {
        this.$store.dispatch(constants.ITEM_LIST, {groupIdx: this.group.idx});
      },
      defaultGroup() {
        if(this.group.idx === undefined) {
          this.group = this.defaultGroup;
          this.$store.dispatch(constants.ITEM_LIST, {groupIdx: this.group.idx});
        }
      }
    },
    computed: {
      ...mapState(['defaultGroup']),
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
      isNotStatusContent() {
        return !this.isAllStatus() || this.$route.meta.title === 'LogBack'
      }
    },
    methods: {
      isAllStatus() {
        const menuTitle = this.$route.meta.title.toLowerCase();
        return !(menuTitle === 'todo' || menuTitle === 'doing' || menuTitle === 'done');
      },
    },
    data() {
      return {
        group: {},
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>

</style>
