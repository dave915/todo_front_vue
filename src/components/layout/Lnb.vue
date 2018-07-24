<template>
  <aside id="slider" class="main-sidebar" @resize>
    <section class="sidebar" style="padding-bottom: 0">
      <ul data-widget="tree" class="sidebar-menu" style="height: calc(100% - 282px); overflow-y: scroll;">
        <slide-item
          v-for="(item,index) in slideMenuItems"
          :data="item"
          :key="index"
          :type="item.type"
          :isHeader="item.isHeader"
          :icon="item.icon"
          :name="item.name"
          :badge="item.badge"
          :items="item.items"
          :router="item.router"
          :link="item.link"
        >
        </slide-item>
      </ul>
      <div class="user-panel" style="padding: 0" v-show="sidebarOpen">
        <div class="pull-left ">
          <router-link tag="div" to="/calender" style="padding: 1px; background: #374d56">
            <h4 style="color: white; text-align: center">Calender</h4>
          </router-link>
          <v-calendar :pane-width="228" :pane-height="243"></v-calendar>
        </div>
      </div>
    </section>
  </aside>
</template>

<script>
  import slideMenuItemList from '../../constants/slideMenuItems.js'
  import SlideItem from '../SlideItem'
  import {mapState} from 'vuex'

  export default {
    name: 'Lnb',
    computed: {
      ...mapState(['sidebarOpen'])
    },
    created() {

    },
    data() {
      return {
        slideMenuItems: slideMenuItemList
      }
    },
    components: {
      SlideItem
    },
    methods: {
      test(a) {
        console.log(a)
      }
    }
  }
</script>

<style>

</style>
