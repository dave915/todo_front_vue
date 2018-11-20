<template>
  <div class="login-box">
    <div class="login-logo">
      <a href="/">
        <b>우리 오늘 뭐해?</b>
      </a>
    </div>
    <div class="login-box-body">
      <p class="login-box-msg">임시 비밀번호 발급</p>
      <form>
        <div class="form-group has-feedback">
          <input type="email" class="form-control" placeholder="Email" >
          <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
        </div>
        <div class="row">
          <!-- /.col -->
          <div class="col-xs-4 pull-right">
            <button class="btn btn-primary btn-block btn-flat" @click="">발급</button>
          </div>
          <!-- /.col -->
        </div>
      </form>
      <router-link to="/changePassword" class="text-center">비밀번호 변경</router-link>
      <br>
      <router-link to="/login" class="text-center">뒤로가기</router-link>
    </div>
  </div>
</template>

<script>
  import constants from "../../store/constants";

  export default {
    name: "NewPassword",
    data() {
      return {
        result: ''
      }
    },
    mounted() {

    },
    methods: {
      goToMain() {
        this.$router.push("login")
      }
    }
  }
</script>

<style scoped>

</style>
