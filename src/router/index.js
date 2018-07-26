import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Today from '@/components/Today'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Today
    },
    {
      path: '/hello2',
      name: 'Hello2',
      component: Today
    },
    {
      path: '/logback',
      name: 'logback',
      component: HelloWorld
    },
    {
      path: '/trash',
      name: 'trash',
      component: Today
    },
    {
      path: '/todo',
      name: 'todo',
      component: Today
    }
  ],
  linkActiveClass: 'active'
})
