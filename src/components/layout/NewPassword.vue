<template>
  <div class="login-box">
    <div class="login-logo">
      <a href="/">
        <b>우리 오늘 뭐해?</b>
      </a>
    </div>
    <div class="login-box-body">
      <p class="login-box-msg">비밀번호 재설정</p>
      <form>
        <div class="form-group has-feedback">
          <input type="email" class="form-control" placeholder="Email" v-model="mail">
          <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
        </div>
        <div class="row">
          <!-- /.col -->
          <div class="col-xs-4 pull-right">
            <button class="btn btn-primary btn-block btn-flat" @click="sendMail">재설정</button>
          </div>
          <!-- /.col -->
        </div>
      </form>
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
        mail: '',
      }
    },
    mounted() {

    },
    methods: {
      goToMain() {
        this.$router.push("login")
      },
      sendMail() {
        if(this.mail.length < 1)
          return;
        this.$store.dispatch(constants.CHANGE_PASSWORD_MAIL, this.mail);
      }
    }
  }
</script>

<style scoped>

</style>
