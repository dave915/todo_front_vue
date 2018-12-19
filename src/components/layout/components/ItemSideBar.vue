<template>
  <aside :class="asideClass">
    <!-- Create the tabs -->
    <div style="width: 290px; padding: 10px 5px 10px 10px;">
      <div class="row">
        <div class="col-md-12">
          <span @click.prevent="closeItemSide"><i class="fa fa-arrow-right"></i></span>
        </div>
      </div>
      <div class="row division"></div>
      <div class="row">
        <div class="col-md-12">
          <label>D-Day</label>
          <div>{{dDay}}</div>
        </div>
      </div>
      <div class="row division"></div>
      <div class="row">
        <div class="col-md-12">
          <label>항목</label>
          <input type="text" class="form-control" v-model="item.title" @change="itemInfoChanged">
        </div>
      </div>
      <div class="row division"></div>
      <div class="row">
        <div class="col-md-12">
          <label>목표일</label>
          <div class="row">
            <div class="col-md-6">
              <v-date-picker class="date-picker" v-model="selectDate" popover-visibility="focus" @input="dateUpdate"/>
            </div>
            <div class="col-md-6">
              <el-time-picker v-model="selectTime" size="small" value-format="HH:mm" placeholder="00:00"
                              :picker-options="{format: 'HH:mm'}" @change="dateUpdate"/>
            </div>
          </div>
        </div>
      </div>
      <div class="row division"></div>
      <div class="row">
        <div class="col-md-12">
          <label>반복</label>
          <select type="text" class="form-control" v-model="item.repeatType" @change="itemInfoChanged">
            <option :value="0">없음</option>
            <option :value="1">매일</option>
            <option :value="2">매주</option>
            <option :value="3">매월</option>
            <option :value="4">매년</option>
          </select>
        </div>
      </div>
      <!--<div class="row division"></div>-->
      <!--<div class="row">-->
        <!--<div class="col-md-12">-->
          <!--<label>알림</label>-->
          <!--<select type="text" class="form-control" v-model="item.repeatType">-->
            <!--<option value="0">없음</option>-->
          <!--</select>-->
        <!--</div>-->
      <!--</div>-->
      <div class="row division"></div>
      <div class="row">
        <div class="col-md-12">
          <label>태그</label>
          <input type="text" class="form-control" v-model="item.tag" @change="itemInfoChanged">
        </div>
      </div>
      <div class="row division"></div>
      <div class="row">
        <div class="col-md-12">
          <label>메모</label>
          <textarea class="form-control" rows="8" style="resize: none;" v-model="item.memo" @change="itemInfoChanged"></textarea>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
  import {mapState} from 'vuex'
  import constants from '../../../store/constants'
  import moment from 'moment'
  import _ from 'lodash'

  export default {
    name: "ItemSideBar",
    computed: {
      ...mapState(['itemSidebarOpen', 'currentItem']),
      dDay() {
        const itemDate = moment(new Date(this.selectDate));
        const today = moment(new Date());
        const duration = Math.floor(moment.duration(today.diff(itemDate)).asDays());

        if(duration < 0)
          return `D-${duration * -1}`;
        else if(duration === 0)
          return `D-Day`;
        else if(duration > 0)
          return `D+${duration}`;
        else
          return '없음';
      },
    },
    watch: {
      itemSidebarOpen() {
        if(this.itemSidebarOpen)
         this.asideClass.push('control-sidebar-open');
        else
          this.asideClass = this.asideClass.filter(c => c !== 'control-sidebar-open');
      },
      currentItem() {
        this.item = this.currentItem;
        this.selectDate = new Date(this.item.itemDatetime);
        this.selectTime = new Date(this.item.itemDatetime);
      }
    },
    data() {
      return {
        selectDate: '',
        selectTime: '',
        asideClass: ['control-sidebar', 'item-detail-bar'],
        item: {},
      }
    },
    methods: {
      dateUpdate() {
        this.itemInfoChanged();
      },
      closeItemSide() {
        this.$store.dispatch(constants.ITEM_SIDEBAR_CLOSE)
      },
      itemInfoChanged() {
        this.saveItemInfo();
      },
      saveItemInfo() {
        const updateItem = _.assign({}, this.item);
        updateItem.itemDatetime = this.getItemDatetime();
        this.$store.dispatch(constants.ITEM_SAVE, updateItem);
      },
      getItemDatetime() {
        if(this.selectDate === '' && this.selectTime === '')
          return null;

        const date = moment(new Date(this.selectDate)).format('YYYY.MM.DD');
        const time = this.selectTime.toString().length > 5 ? moment(new Date(this.selectTime)).format('hh:mm:00') : this.selectTime;
        return `${date} ${time}`;
      }
    },
    mounted() {
      this.saveItemInfo = _.debounce(this.saveItemInfo, 3000);
    }

  }
</script>

<style scoped>
  .item-detail-bar {
    width: 300px;
    right: -300px;
    background: #f4f4f4;
  }

  .item-detail-bar.control-sidebar-open {
    right: 0;
  }

  .division {
    border-top: 1px #d2d6de solid;
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>
