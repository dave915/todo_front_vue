<template>
  <div class="register-box">
    <div class="register-logo">
      <a href="../../index2.html">우리 오늘 뭐해?</a>
    </div>

    <div class="register-box-body">
      <form>
        <div class="form-group has-feedback">
          <input type="text" class="form-control" placeholder="Full name" v-model="userInfo.userName">
          <span class="glyphicon glyphicon-user form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <input type="email" class="form-control" placeholder="Email" v-model="userInfo.email">
          <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <input type="password" class="form-control" placeholder="Password" v-model="userInfo.password">
          <span class="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <input type="password" class="form-control" placeholder="Retype password" v-model="confirmPassword">
          <span class="glyphicon glyphicon-log-in form-control-feedback"></span>
        </div>
        <div class="row">
          <div class="col-xs-8">
            <div class="checkbox icheck">
              <label>
                <router-link to="/login" class="text-center">로그인</router-link>
              </label>
            </div>
          </div>
          <!-- /.col -->
          <div class="col-xs-4">
            <button class="btn btn-primary btn-block btn-flat" @click="register">Register</button>
          </div>
          <!-- /.col -->
        </div>
      </form>
    </div>
    <!-- /.form-box -->
  </div>
</template>


<script>
  import constants from "../../store/constants";

  export default {
    name: "Register",
    data() {
      return {
        userInfo: {
          userName: '',
          email: '',
          password: '',
        },
        confirmPassword: ''
      }
    },
    methods: {
      register() {
        if (this.userInfo.userName === '' || this.userInfo.email === '' || this.userInfo.password === '' ){
          alert('모든 정보를 입력해주세요.');
          return;
        }

        if (this.userInfo.password !== this.confirmPassword) {
          alert('비밀번호가 일치하지 않습니다.');
          return;
        }

        this.trimData();
        this.$store.dispatch(constants.AUTH_SIGNUP, this.userInfo)
      },
      trimData() {
        this.userInfo.userName = this.userInfo.userName.trim();
        this.userInfo.email = this.userInfo.email.trim();
        this.userInfo.password = this.userInfo.password.trim();
      }
    }
  }
</script>

<style scoped>
  .register-logo {
    font-weight: bold;
  }
</style>
