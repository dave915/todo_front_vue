<template>
  <div>
    <item-list :item-list="itemList" :group="defaultGroup" title="Today" sub-title="Today's Todo"/>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import ItemList from "./ItemList";
  import constants from "../store/constants";


  export default {
    name: "Today",
    components: {
      ItemList
    },
    data() {
      return {};
    },
    watch: {
      defaultGroup() {
        if(this.defaultGroup.idx !== 0)
          this.$store.dispatch(constants.ITEM_LIST, {groupIdx: this.defaultGroup.idx});
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
    },
    mounted() {
      console.log(this.$route)
    }
  }
</script>

<style scoped>

</style>
