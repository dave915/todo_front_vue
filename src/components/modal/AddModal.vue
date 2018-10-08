<template>
 <div>
   <div class="modal-header">
     <h4>{{modalInfo.title}}</h4>
   </div>
   <div class="modal-body">
     <div v-if="modalInfo.modalType === 'item'" class="row">
       <div class="col-md-3">
         <select class="form-control" v-model="groupSelect">
           <option :value="defaultGroup.idx">기본</option>
           <option v-for="group in groupList" :value="group.idx">{{group.name}}</option>
         </select>
       </div>
       <div class="col-lg-9">
         <input type="text" :placeholder="modalInfo.placeholder" class="form-control col-lg-9" v-model="input">
       </div>
     </div>
     <div v-else class="row">
       <input type="text" :placeholder="modalInfo.placeholder" class="form-control col-lg-12" v-model="input">
     </div>
   </div>
   <div class="modal-footer">
     <div class="col-md-6 pull-right" style="padding-right: 0">
         <button class="btn  btn-default modal-default-button" @click="closeModal()">
           취소
         </button>
         <button class="btn  btn-default modal-default-button" @click="confirmBtnClicked">
           OK
         </button>
     </div>
   </div>
 </div>
</template>

<script>
  import constants from '@/store/constants'
  import {mapState} from 'vuex'

  export default {
    name: "AddModal",
    props: ['modalInfo'],
    data() {
      return {
        input: '',
        groupSelect: '',
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
          this.modalInfo.onConfirm(this.groupSelect, this.input.trim())
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

<style>
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
