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
</style>
