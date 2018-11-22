<template>
    <div class="login-box">
      <div class="login-logo">
        <a href="/">
          <b>우리 오늘 뭐해?</b>
        </a>
      </div>
      <!-- /.login-logo -->
      <div class="login-box-body">
        <p class="login-box-msg">[{{user.email}}] 비밀번호 변경</p>
        <form>
          <div class="form-group has-feedback">
            <input type="password" class="form-control" placeholder="Password" v-model="password">
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          <div class="form-group has-feedback">
            <input type="password" class="form-control" placeholder="Retype password" v-model="confirmPassword">
            <span class="glyphicon glyphicon-log-in form-control-feedback"></span>
          </div>
          <div class="row">
            <!-- /.col -->
            <div class="col-xs-4 pull-right">
              <button class="btn btn-primary btn-block btn-flat" @click="changePassword">변경</button>
            </div>
            <!-- /.col -->
          </div>
        </form>
        <router-link to="/login" class="text-center">메인으로 가기</router-link>
      </div>
      <!-- /.login-box-body -->
    </div>
</template>

<script>
  import constants from '../../store/constants';

  export default {
    name: "ChangePassword",
    data() {
      return {
        password: '',
        confirmPassword: '',
        user: {
          email: ''
        }
      }
    },
    methods: {
      changeUser(user) {
        this.user = user
      },
      changePassword() {
        if(this.password !== this.confirmPassword) {
          alert('비밀번호를 다시 확인해주세요');
          return;
        }
        this.user.password = this.password.trim()
        this.$store.dispatch(constants.USER_SAVE, this.user);
      }
    },
    mounted() {
      this.$store.dispatch(constants.CHANGE_PASSWORD_USER, {
        changeCode: this.$route.params.passwordChangeCode,
        callBack: this.changeUser
      });
    }
  }
</script>

<style scoped>

</style>
