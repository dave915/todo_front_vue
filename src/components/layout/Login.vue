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
            <input type="email" class="form-control" placeholder="Email">
            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
          </div>
          <div class="form-group has-feedback">
            <input type="password" class="form-control" placeholder="Password">
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
        <a href="#">I forgot my password</a>
        <br>
        <a href="register.html" class="text-center">Register a new membership</a>

      </div>
      <!-- /.login-box-body -->
    </div>
</template>

<script>
  export default {
    name: "login",
    methods: {
      login() {
        this.$router.push({path: 'hello'});
      }
    }
  }
</script>

<style scoped>

</style>
