import Vue from 'vue'
import Router from 'vue-router'
import Contents from '@/components/Contents'
import Login from '@/components/layout/Login'
import Base from '@/components/layout/Base'
import Register from '@/components/layout/Register'
import InviteGroup from '@/components/layout/InviteGroup'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/today',
      name: 'index',
      component: Base,
      children: [
        {
          path: 'today',
          name: 'today',
          component: Contents,
          meta: {title: 'Today', subTitle: '오늘의 할 일'}
        },
        {
          path: 'status/all',
          name: 'status/all',
          component: Contents,
          meta: {title: 'All', subTitle: '전체 상태'}
        },
        {
          path: 'status/todo',
          name: 'status/todo',
          component: Contents,
          meta: {title: 'Todo', subTitle: '할 일'}
        },
        {
          path: 'status/doing',
          name: 'status/doing',
          component: Contents,
          meta: {title: 'Doing', subTitle: '진행중'}
        },
        {
          path: 'status/done',
          name: 'status/done',
          component: Contents,
          meta: {title: 'Done', subTitle: '완료'}
        },
        {
          path: 'group/:idx',
          name: 'group',
          component: Contents,
          meta: {title: 'Group', subTitle: ''}
        },
        {
          path: 'logback',
          name: 'logback',
          component: Contents,
          meta: {title: 'LogBack', subTitle: '언젠가 할일'}
        },
        // {
        //   path: 'trash',
        //   name: 'trash',
        //   component: Contents,
        //   meta: {title: 'Trash', subTitle: '삭제된 항목'}
        // }
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
    {
      path: '/invite/group/:inviteCode',
      name: 'InviteGroup',
      component: InviteGroup
    },
  ],
  linkActiveClass: 'active'
})
