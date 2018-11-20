<template>
    <div class="login-box">
      <div class="login-logo">
        <a href="/">
          <b>우리 오늘 뭐해?</b>
        </a>
      </div>
      <!-- /.login-logo -->
      <div class="login-box-body">
        <p class="login-box-msg">비밀번호 변경</p>
        <form>
          <div class="form-group has-feedback">
            <input type="email" class="form-control" placeholder="Email" >
            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
          </div>
          <div class="form-group has-feedback">
            <input type="password" class="form-control" placeholder="Current Password" >
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          <div class="form-group has-feedback">
            <input type="password" class="form-control" placeholder="Password" >
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          <div class="form-group has-feedback">
            <input type="password" class="form-control" placeholder="Retype password" v-model="confirmPassword">
            <span class="glyphicon glyphicon-log-in form-control-feedback"></span>
          </div>
          <div class="row">
            <!-- /.col -->
            <div class="col-xs-4 pull-right">
              <button class="btn btn-primary btn-block btn-flat" @click="login">Sign In</button>
            </div>
            <!-- /.col -->
          </div>
        </form>
        <router-link to="/register" class="text-center">회원가입</router-link>
        <br>
        <router-link to="/newPassword" class="text-center">비밀번호를 잊었습니다</router-link>
      </div>
      <!-- /.login-box-body -->
    </div>
</template>

<script>
  import constants from '../../store/constants';
  import {mapState} from 'vuex';

  export default {
    name: "ChangePassword",
    data() {
      return {
        authInfo: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      login() {
        this.$store.dispatch(constants.AUTH_LOGIN, this.authInfo)
          .catch(e => alert('로그인 실패'))

      }
    },
  }
</script>

<style scoped>

</style>
