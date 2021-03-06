<template>
  <aside id="slider" :class="classObject">
    <section class="sidebar test" style="padding-bottom: 0;">
      <ul data-widget="tree" class="sidebar-menu scrollbar" :style="ulStyle">
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
      <div class="user-panel lnb-footer" style="padding: 0" v-show="sidebarOpen">
        <div class="pull-left">
          <router-link tag="div" to="/calender" style="padding: 1px; background: #374d56">
            <h4 style="color: white; text-align: center">Calender</h4>
          </router-link>
          <v-calendar
            :pane-width="228"
            :pane-height="243"
            :attributes="attrs"
            @dayclick='dayClicked'
          ></v-calendar>
        </div>
      </div>
    </section>
  </aside>
</template>

<script>
  import slideMenuItemList from '../../../constants/slideMenuItems.js'
  import SlideItem from '../../SlideItem'
  import {mapState} from 'vuex'
  import constants from "../../../store/constants";
  import moment from 'moment';

  export default {
    name: 'Lnb',
    computed: {
      ...mapState(['sidebarOpen', 'groupList', 'selectedDay', 'searchOption']),
      classObject() {
        return {
          'main-sidebar' : true,
          'sidebar-close' : !this.sidebarOpen
        }
      },
      attrs() {
        return [
          {
            highlight: {
              backgroundColor: '#00b7e6',
            },
            // Just use a normal style
            contentStyle: {
              color: '#fafafa',
            },
            dates: this.dates
          },
          ...testDate
        ]
      },
      dates() {
        if(this.selectedDay.start === null && this.selectedDay.end === null)
          return null;

        if(this.selectedDay.end === null)
          return {start: this.selectedDay.start, end: this.selectedDay.start};

        return this.selectedDay;
      },
    },
    watch: {
      groupList() {
        this.slideMenuItems
          .filter(i => i.name === 'Group')
          .forEach(i => {
            i.items = [];
            this.groupList.forEach(g => {
              const groupItem = {
                type: 'item',
                icon: 'fa fa-circle-o',
                router: {
                  path: '/group/' + g.idx,
                  params: {groupName: g.name}
                },
                name: g.name,
                groupInfo: g
              };
              i.items.push(groupItem);
            });
          });
      }
    },
    data() {
      return {
        slideMenuItems: slideMenuItemList,
        windowHeight: document.body.clientHeight,
        ulStyle: {
          overflowY: 'scroll',
          height: 0,
        },
      }
    },
    components: {
      SlideItem
    },
    methods: {
      dayClicked(day) {
        let start = this.selectedDay.start;
        let end = this.selectedDay.end;

        if(end != null) {
          start = moment(day.date).format('YYYY.MM.DD 00:00:00');
          this.$store.dispatch(constants.CALENDER_INIT, {start: start, end: null});
          return;
        }

        if(start === null) {
          start = moment(day.date).format('YYYY.MM.DD 00:00:00')
        }
        else
          end = moment(day.date).format('YYYY.MM.DD 00:00:00');

        if(end !== null && start > end) {
          const temp = end;
          end = start;
          start = temp;
        }

        this.$store.dispatch(constants.CALENDER_INIT, {start: start, end: end});

        if(end !== null) {
          this.$store.dispatch(constants.ITEM_LIST, {...this.searchOption, startDate: start, endDate: end});
          this.$store.dispatch(constants.SEARCH_OPTION_SET, {...this.searchOption, startDate: start, endDate: end})
        }
      },
      heightSize() {
        return document.body.clientHeight - 334 + 'px';
      },
      handleResize() {
        this.ulStyle.height = this.heightSize()
      }
    },
    mounted() {
      this.$store.dispatch(constants.GROUP_LIST);
    },
    created() {
      this.handleResize();
      window.addEventListener('resize', this.handleResize);
    },
    destroyed() {
      window.removeEventListener('resize', this.handleResize);
    },
  }

  const testDate = [
    {
      dot: {
        backgroundColor: '#398fac', // Turquoise dot
      },
      dates: [
        new Date(2018, 6, 4),           // Jan 4th
        new Date(2018, 6, 10),          // Jan 10th
        new Date(2018, 6, 15),          // Jan 15th
        new Date(2018, 7, 1),           // Feb 1st
        new Date(2018, 7, 12),          // Feb 12th
      ],
    },
    {
      dot: {
        backgroundColor: '#ff4d4d', // Turquoise dot
      },
      dates: [
        new Date(2018, 6, 4),           // Jan 4th
        new Date(2018, 6, 10),          // Jan 10th
        new Date(2018, 6, 15),          // Jan 15th
        new Date(2018, 7, 1),           // Feb 1st
        new Date(2018, 7, 12),
        new Date(2018, 7, 12),
        new Date(2018, 7, 12),
        new Date(2018, 7, 12),
        new Date(2018, 7, 12), new Date(2018, 1, 12),
        // Feb 12th
        {
          start: new Date(2018, 7, 20), // Feb 20th
          end: new Date(2018, 7, 25),   // - Feb 25th
        },
      ],
    },
    {
      dot: {
        backgroundColor: '#ff4d4d', // Turquoise dot
      },
      dates: [
        new Date(2018, 0, 4),           // Jan 4th
        new Date(2018, 0, 10),          // Jan 10th
        new Date(2018, 0, 15),          // Jan 15th
        new Date(2018, 7, 1),           // Feb 1st
        new Date(2018, 1, 1),           // Feb 1st
        new Date(2018, 1, 12),          // Feb 12th
        {
          start: new Date(2018, 1, 20), // Feb 20th
          end: new Date(2018, 1, 25),   // - Feb 25th
        },
      ],
    }
  ]
</script>

<style>
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
  }
  .test {
    min-height: 100%;
  }
  .scrollbar {
    overflow: -moz-scrollbars-none;
  }
  ul::-webkit-scrollbar {
    display: none;
  }
  .sidebar-close {
    z-index: 900;
  }
</style>
