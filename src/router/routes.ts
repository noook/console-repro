import { RouteRecordRaw } from 'vue-router';
import Unauthenticated from '@/layouts/Unauthenticated.vue';
import Authenticated from '@/layouts/Authenticated.vue';
import useAuthStore from '@/store/auth';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'unauthenticated',
    component: Unauthenticated,
    beforeEnter(to, from, next) {
      if (useAuthStore().isAuthenticated) {
        return next({ name: 'projects' });
      }

      return next();
    },
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/Auth/Login.vue'),
      },
    ],
  },
  {
    path: '/',
    name: 'authenticated',
    component: Authenticated,
    redirect: { name: 'projects' },
    beforeEnter(to, from, next) {
      if (useAuthStore().isAuthenticated === false) {
        return next({ name: 'login' });
      }

      return next();
    },
    children: [
      {
        path: 'projects',
        name: 'projects',
        component: () => import('@/views/Projects/ProjectsList.vue'),
      },
    ],
  },
];

export default routes;
