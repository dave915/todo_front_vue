<template>
 <div>
   <div class="modal-header">
     <h4>{{modalInfo.title}}</h4>
   </div>
   <div class="modal-body">
     <div v-if="modalInfo.modalType === 'item'" class="row">
       <div class="row" style="margin-bottom: 5px">
         <div class="col-md-4">
           <select class="form-control" v-model="groupSelect">
             <option :value="defaultGroup.idx">개인</option>
             <option v-for="group in groupList" :value="group.idx">그룹: {{group.name}}</option>
             <option :value="-1">LogBack</option>
           </select>
         </div>
         <div class="col-md-4" v-show="groupSelect !== -1">
           <v-date-picker class="date-picker" v-model="selectDate" popover-visibility="focus"/>
         </div>
         <div class="col-md-4" v-show="groupSelect !== -1">
           <el-time-picker v-model="selectTime" size="small" value-format="HH:mm"
                           :picker-options="{format: 'HH:mm'}"/>
         </div>
       </div>
       <div class="row">
         <div class="col-md-12">
           <input type="text" :placeholder="modalInfo.placeholder" class="form-control col-md-9" v-model="input">
         </div>
       </div>
     </div>
     <div v-else class="row">
       <input type="text" :placeholder="modalInfo.placeholder" class="form-control col-md-12" v-model="input">
     </div>
   </div>
   <div class="modal-footer">
     <div class="col-md-6 pull-right" style="padding-right: 0">
       <button class="btn  btn-default modal-default-button" @click="confirmBtnClicked">
         확인
       </button>
       <button class="btn  btn-default modal-default-button" @click="closeModal()">
         취소
       </button>
     </div>
   </div>
 </div>
</template>

<script>
  import constants from '@/store/constants'
  import {mapState} from 'vuex'
  import moment from 'moment'

  export default {
    name: "AddModal",
    props: ['modalInfo'],
    data() {
      return {
        input: '',
        groupSelect: '',
        selectDate: new Date(),
        selectTime: '00:00',
      }
    },
    methods: {
      closeModal() {
        this.$store.dispatch(constants.INIT_MODAL);
      },
      confirmBtnClicked() {
        if(this.input === '') {
          alert('추가할 내용을 입력해주세요.');
          return;
        }

        if(this.modalInfo.modalType === 'item') {
          let itemDatetime = '';
          let groupIdx = this.groupSelect;
          let type = null;

          if (this.groupSelect === -1) {
            itemDatetime = null;
            groupIdx = this.defaultGroup.idx;
            type = 2;
          } else {
            const date = moment(this.selectedDay).format('YYYY.MM.DD');
            itemDatetime = `${date} ${this.selectTime}:00`;
          }

          const item = {
            title: this.input.trim(),
            groupIdx,
            itemDatetime,
            type
          };
          this.modalInfo.onConfirm(item)
        } else {
          this.modalInfo.onConfirm(this.input.trim())
        }
      }
    },
    computed: {
      ...mapState(['groupList']),
      defaultGroup: {
        get() {
          this.groupSelect = this.$store.state.defaultGroup.idx;
          return this.$store.state.defaultGroup
        }
      }
    }
  }
</script>

<style scoped>
  .modal-header h4 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    margin: 5px 0;
  }

  .modal-default-button {
    float: right;
    margin-left: 10px;
  }
</style>
