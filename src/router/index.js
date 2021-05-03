import { createRouter, createWebHashHistory } from 'vue-router'

import Picker from '@/pages/Picker'
import Dispatch from '@/pages/Dispatch'
import Portable from '@/pages/Portable'
import Settings from '@/pages/Settings'
import Test from '@/pages/Test'

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
