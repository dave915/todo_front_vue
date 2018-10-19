<template>
 <div>
   <div v-if="isOwner">
     <div class="modal-header">
       <h4>{{'그룹명 수정'}}</h4>
     </div>
     <div class="modal-body">
       <div class="row">
         <div class="col-lg-10" style="padding-left: 0;padding-right: 0;">
           <input type="text" placeholder="그룹명" class="form-control" v-model="groupName">
         </div>
         <div class="col-md-2">
           <button class="btn btn-default" v-if="groupName !== groupInfo.name" @click="updateGroup"> 수정 </button>
           <button class="btn btn-default" disabled v-else> 수정 </button>
         </div>
       </div>
       <div class="row">
       </div>
     </div>
   </div>
   <div class="modal-header">
     <h4>{{'그룹 참여자 목록'}}</h4>
   </div>
   <div class="modal-body">
     <div class="row" v-if="isOwner">
       <div class="col-lg-10" style="padding-left: 0;padding-right: 0;">
         <input type="text" placeholder="유저 이메일 또는 유저명" class="form-control" id="searchUser" data-toggle="dropdown" v-model="searchKeyword">
         <ul class="dropdown-menu col-lg-12" role="menu" aria-labelledby="searchUser" v-if="searchUsers.length > 0">
           <li role="presentation" v-for="user in searchUsers">
             <a role="menuitem" tabindex="-1" href="javascript:void(0)" @click="userSelected(user)"> {{user.email}} ({{user.userName}})</a>
           </li>
         </ul>
       </div>
       <div class="col-md-2">
         <button class="btn btn-default" @click="inviteUser"> 초대 </button>
       </div>
     </div>
     <div class="row" style="margin-top: 10px">
       <div class="user-box col-lg-12">
         <div class="user-list col-lg-12" v-for="user in groupJoinUserList">
           <span>{{user.email}} {{user.userName}} </span>
           <label class="label bg-red label-btn" v-if="isOwner && auth.idx !== user.idx" @click="banishGroupUser(user)">삭제</label>
           <label class="label bg-green label-btn" v-if="isOwner && auth.idx !== user.idx" @click="changeOwner(user)">소유권 넘기기</label>
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
  import api from '@/api/index'
  import {mapState} from 'vuex'

  export default {
    name: "GroupInfoModal",
    props: ['modalInfo'],
    data() {
      return {
        groupName: '',
        searchKeyword: '',
        searchUsers: [],
        selectedUser: {},
      }
    },
    watch: {
      searchKeyword() {
        if (this.searchKeyword.length === 0) {
          this.searchUsers = [];
          this.selectedUser = {};
          return;
        }

        if (this.searchKeyword.length < 2)
          return;

        api.user.searchUsers(this.searchKeyword)
          .then((res) => {
            this.searchUsers = res.data;
          })
      }
    },
    methods: {
      updateGroup() {
        this.$store.dispatch(constants.GROUP_UPDATE, {...this.groupInfo, name: this.groupName})
          .then(() => this.$store.dispatch(constants.GROUP_LIST))
      },
      closeModal() {
        this.$store.dispatch(constants.INIT_MODAL);
        this.$store.dispatch(constants.GROUP_USER_LIST_RESET);
      },
      userSelected(user) {
        this.selectedUser = user;
        this.searchKeyword = user.email;
      },
      inviteUser() {
        this.$store.dispatch(constants.GROUP_INVITE, {groupIdx: this.groupInfo.idx, userIdx: this.selectedUser.idx})
          .then(() => this.$store.dispatch(constants.GROUP_USER_LIST, this.groupInfo.idx))
      },
      changeOwner(user) {
        this.$store.dispatch(constants.GROUP_PASS, {groupIdx: this.groupInfo.idx, userIdx: user.idx})
          .then(() => this.$store.dispatch(constants.GROUP_LIST))
      },
      banishGroupUser(user) {
        this.$store.dispatch(constants.GROUP_BANISH, {groupIdx: this.groupInfo.idx, userIdx: user.idx})
          .then(() => this.$store.dispatch(constants.GROUP_USER_LIST, this.groupInfo.idx))
      }
    },
    computed: {
      ...mapState(['groupList', 'groupJoinUserList', 'auth']),
      defaultGroup: {
        get() {
          this.groupSelect = this.$store.state.defaultGroup.idx;
          return this.$store.state.defaultGroup
        }
      },
      groupInfo: {
        get() {
          return this.groupList.filter(g => g.idx === this.modalInfo.data.groupIdx)[0];
        }
      },
      isOwner: function () {
        return this.groupInfo.role === 1
      }
    },
    mounted() {
      this.groupName = this.groupInfo.name;
      this.$store.dispatch(constants.GROUP_USER_LIST, this.groupInfo.idx);
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
    overflow-y: auto;
    padding-left: 0px;
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
    cursor: pointer;
  }
</style>
