<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import constants from "./store/constants";

  export default {
    name: 'App',
    mounted() {
      this.$store.dispatch(constants.AUTH_USERINFO)
        .catch(() => this.$router.push('login'))
    }
  }
</script>

<style>
  .date-picker input {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .date-picker input:focus {
    border-color: #3c8dbc;
    outline: 0;
  }

  .el-date-editor.el-input {
    width: 100%;
    height: 34px;
  }

  .el-date-editor .el-input .el-input__inner {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .el-input--small .el-input__inner {
    height: 34px;
    color: #555;
    border: 1px solid #ccc;
  }

  .el-input--small .el-input__inner:focus {
    border-color: #3c8dbc;
    outline: 0;
  }

  .time-picker-popup {
    z-index: 10000;
  }
</style>
