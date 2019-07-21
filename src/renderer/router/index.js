import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Picker',
      component: require('@/pages/Picker').default,
    },
    {
      path: '/dispatch',
      name: 'Dispatch',
      component: require('@/pages/Dispatch').default,
    },
    {
      path: '/portable',
      name: 'portable',
      component: require('@/pages/Portable').default,
    },
    {
      path: '/settings',
      name: 'settings',
      component: require('@/pages/Settings').default,
    },
    {
      path: '/test',
      name: 'test',
      component: require('@/pages/Test').default,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
