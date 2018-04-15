import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '@/views/Home';
import Create from '@/views/Create';
import Agent from '@/views/Agent';

const router = new VueRouter({
  pageRouting: true,
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/create',
      component: Create,
      meta: {
        title: 'Create Game',
      },
    },
    {
      path: '/agent',
      component: Agent,
      meta: {
        title: 'Agent',
      },
    },
    {path: '*', redirect: '/home'},
  ],
});

router.replace('/home');

module.exports = router;
