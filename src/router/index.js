import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Sample from '@/components/Sample'

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
      component: Sample
    },
    {
      path: '/hello2',
      name: 'Hello2',
      component: HelloWorld
    },
    {
      path: '/logback',
      name: 'logback',
      component: Sample
    },
    {
      path: '/trash',
      name: 'trash',
      component: Sample
    },
    {
      path: '/todo',
      name: 'todo',
      component: Sample
    }
  ],
  linkActiveClass: 'active'
})
