// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'vue2-admin-lte/src/lib/css'
import 'vue2-admin-lte/src/lib/script'
import VCalendar from 'v-calendar';
import 'v-calendar/lib/v-calendar.min.css';
import { TimePicker } from 'element-ui';
import lang from 'element-ui/lib/locale/lang/ko'
import locale from 'element-ui/lib/locale'

locale.use(lang);

Vue.use(VCalendar);
Vue.use(TimePicker);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});

router.beforeEach((to, from, next) => {
  if (!passAuthCheckPath(to) && store.state.auth.idx === 0) {
    next({path: 'login'});
    return;
  }

  if(to.name === 'group') {
    const groupIdx = to.params.idx;
    const list = store.state.groupList.filter(g => g.idx === parseInt(groupIdx))
    if(list.length > 0)
      to.meta.subTitle = list[0].name;
  }

  next();
});

const passAuthCheckPath = (router) => {
  const path = router.path;
  return path === '/login' || path === '/register'
};
