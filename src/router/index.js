import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Today from '@/components/Today'
import Login from '@/components/layout/Login'
import Base from '@/components/layout/Base'
import Register from '@/components/layout/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Base,
      children: [
        {
          path: 'hello',
          name: 'Hello',
          component: Today
        },
        {
          path: 'hello2',
          name: 'Hello2',
          component: Base,
        },
        {
          path: 'logback',
          name: 'logback',
          component: HelloWorld
        },
        {
          path: 'trash',
          name: 'trash',
          component: Today
        },
        {
          path: 'todo',
          name: 'todo',
          component: Today
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
  ],
  linkActiveClass: 'active'
})
