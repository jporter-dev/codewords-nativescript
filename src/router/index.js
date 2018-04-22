import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '@/views/Home';
import Create from '@/views/Create';
import Player from '@/views/Player';

const router = new VueRouter({
  pageRouting: true,
  routes: [
    {
      path: '/home',
      component: Home,
      name: 'Home',
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/create',
      component: Create,
      name: 'Create',
      meta: {
        title: 'Create Game',
      },
    },
    {
      path: '/:room/agent',
      component: Player,
      name: 'Agent',
      meta: {
        title: 'Agent',
      },
    },
    {
      path: '/:room/spymaster',
      component: Player,
      name: 'Spymaster',
      meta: {
        title: 'Spymaster',
      },
    },
    {path: '*', redirect: '/home'},
  ],
});

router.replace('/home');

module.exports = router;
