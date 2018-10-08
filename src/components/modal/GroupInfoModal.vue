<template>
 <div>
   <div class="modal-header">
     <h4>{{'그룹명 수정'}}</h4>
   </div>
   <div class="modal-body">
     <div class="row">
       <div class="col-lg-10">
         <input type="text" placeholder="그룹명" class="form-control" v-model="groupName">
       </div>
       <div class="col-md-2">
         <button class="btn btn-default" v-if="groupName !== modalInfo.data.groupInfo.name"> 수정 </button>
         <button class="btn btn-default" disabled v-else> 수정 </button>
       </div>
     </div>
     <div class="row">
     </div>
   </div>
   <div class="modal-header">
     <h4>{{'그룹 참여자 목록'}}</h4>
   </div>
   <div class="modal-body">
     <div class="row">
       <div class="col-lg-10">
         <input type="text" placeholder="유저 이메일 또는 아이디" class="form-control" v-model="searchUser">
       </div>
       <div class="col-md-2">
         <button class="btn btn-default"> 초대 </button>
       </div>
     </div>
     <div class="row" style="margin-top: 10px">
       <div class="user-box col-lg-12">
         <div class="user-list col-lg-12" v-for="i in 20">
           <span>dave.th@kakaocorp.com 한태현</span>
           <label class="label bg-red label-btn">삭제</label>
           <label class="label bg-green label-btn" v-if="i%2 === 0">소유권 넘기기</label>
         </div>
       </div>
     </div>
   </div>
   <div class="modal-footer">
     <div class="col-md-6 pull-right" style="padding-right: 0">
         <button class="btn btn-default modal-default-button" @click="closeModal()">
           닫기
         </button>
     </div>
   </div>
 </div>
</template>

<script>
  import constants from '@/store/constants'
  import {mapState} from 'vuex'

  export default {
    name: "GroupInfoModal",
    props: ['modalInfo'],
    data() {
      return {
        groupName: '',
        searchUser: '',
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
    },
    mounted() {
      this.groupName = this.modalInfo.data.groupInfo.name
    }
  }
</script>

<style>
  .modal-header h4 {
    margin-top: 0;
    color: #42b983;
    text-align: center;
  }

  .modal-body {
    margin: 5px 0;
  }

  .modal-default-button {
    float: right;
    margin-left: 10px;
  }

  .user-box {
    max-height: 100px;
    overflow-y:scroll;
    /*padding-right: 35px;*/
    /*padding-left: 25px;*/
  }
  .user-list {
    height: 20px;
    display: block;
  }

  .label-btn {
    float: right;
    margin-top: 3px;
    margin-bottom: 2px;
    margin-left: 5px;
  }
</style>
