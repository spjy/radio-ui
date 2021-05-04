import { createRouter, createWebHashHistory } from 'vue-router';

import Picker from '@/pages/Picker.vue';
import Dispatch from '@/pages/Dispatch.vue';
import Portable from '@/pages/Portable.vue';
import Settings from '@/pages/Settings.vue';
import Test from '@/pages/Test.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Picker',
      component: Picker,
    },
    {
      path: '/dispatch',
      name: 'Dispatch',
      component: Dispatch,
    },
    {
      path: '/portable',
      name: 'portable',
      component: Portable,
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/',
    },
  ],
});
