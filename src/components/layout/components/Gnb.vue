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
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button" @click="menuToggle">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <!-- Navbar Right Menu -->
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <!-- Notifications: style can be found in dropdown.less -->
          <li class="dropdown notifications-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-bell-o"></i>
              <span class="label label-warning">{{ 3 }}</span>
            </a>
            <ul class="dropdown-menu">
              <li class="header">You have {{ 3 }} notifications</li>
              <li>
                <!-- inner menu: contains the actual data -->
                <ul class="menu">
                  <li>
                    <a href="#">
                      <i class="fa fa-users text-aqua"></i>
                      5 new members joined today
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-warning text-yellow"></i>
                      Very long description here that may not fit into the
                      page and may cause design problems
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-users text-red"></i>
                      5 new members joined
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-shopping-cart text-green"></i>
                      25 sales made
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-user text-red"></i>
                      You changed your username
                    </a>
                  </li>
                </ul>
              </li>
              <li class="footer">
                <a href="#">View all</a>
              </li>
            </ul>
          </li>
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
        this.$router.push({name: 'login'})
      }
    }
  }

</script>
