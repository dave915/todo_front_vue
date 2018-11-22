<template>
  <div class="login-box">
    <div class="login-logo">
      <a href="/">
        <b>우리 오늘 뭐해?</b>
      </a>
    </div>
    <div class="login-box-body">
      <p class="login-box-msg" v-if="result === 'success'"><b>그룹 초대가 완료되었습니다.</b></p>
      <p class="login-box-msg" v-if="result === 'fail'"><b>오류가 발생하였거나, 만료된 링크입니다.</b></p>
      <a href="javascript:void(0)" @click="goToMain">메인으로 이동하기</a>
    </div>
  </div>
</template>

<script>
  import constants from "../../store/constants";

  export default {
    name: "InviteGroup",
    data() {
      return {
        result: ''
      }
    },
    mounted() {
      this.$store.dispatch(constants.GROUP_INVITE_CHECK, {
        inviteCode: this.$route.params.inviteCode,
        callBack: this.updateResult
      })
    },
    methods: {
      updateResult(res) {
        this.result = res;
      },
      goToMain() {
        location.href = '/'
      }
    }
  }
</script>

<style scoped>

</style>
