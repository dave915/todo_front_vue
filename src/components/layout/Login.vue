<template>
    <div class="login-box">
      <div class="login-logo">
        <a href="/">
          <b>우리 오늘 뭐해?</b>
        </a>
      </div>
      <!-- /.login-logo -->
      <div class="login-box-body">
        <p class="login-box-msg">Sign in to start your session</p>

        <form>
          <div class="form-group has-feedback">
            <input type="email" class="form-control" placeholder="Email" v-model="authInfo.email">
            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
          </div>
          <div class="form-group has-feedback">
            <input type="password" class="form-control" placeholder="Password" v-model="authInfo.password">
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          <div class="row">
            <!-- /.col -->
            <div class="col-xs-4 pull-right">
              <button class="btn btn-primary btn-block btn-flat" @click="login">Sign In</button>
            </div>
            <!-- /.col -->
          </div>
        </form>
        <a href="javascript:void(0)" @click="findPassword">I forgot my password</a>
        <br>
        <router-link to="/register" class="text-center">Register a new membership</router-link>

      </div>
      <!-- /.login-box-body -->
    </div>
</template>

<script>
  import constants from '../../store/constants';
  import {mapState} from 'vuex';

  export default {
    name: "login",
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

      },
      findPassword() {
        alert('비밀번호 찾기 준비중.')
      }
    },
  }
</script>

<style scoped>

</style>
