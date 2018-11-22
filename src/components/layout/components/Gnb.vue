<template>
  <header class="main-header">
    <!-- Logo -->
    <a href="/" class="logo" id="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini">
        <b>WDT</b>
      </span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg">
        <b>우리 오늘 뭐해?</b>
      </span>
    </a>

    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <a href="javascript:void(0)" class="sidebar-toggle" data-toggle="push-menu" role="button" @click="menuToggle">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <!-- Navbar Right Menu -->
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <!-- Notifications: style can be found in dropdown.less -->
          <li>
            <a data-toggle="control-sidebar" @click="logout">
              <i class="fa fa-sign-out"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
  import constatns from '@/store/constants'
  import {isMobile} from "../../../utils/utils";

  export default {
    name: 'Gnb',
    data() {
      return {
        currentUser: {
          name: 'Alexander Pierce',
          position: 'Web Developer',
          state: {
            color: '#3c763d',
            name: 'Online'
          },
          createdAt: new Date()
        }
      }
    },
    methods: {
      menuToggle() {
        const isOpen = isMobile.any() || $('#logo').width() > 250 ?
          true : $('body').attr('class').toString().indexOf('sidebar-collapse') > -1;
        this.$store.dispatch(constatns.SIDEBAR_TOGGLE, isOpen);
      },
      logout() {
        this.$store.dispatch(constatns.AUTH_LOGOUT)
      }
    }
  }

</script>
