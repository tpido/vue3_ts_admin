import Cache from '@/utils/Cache';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },

  {
    path: '/login',
    component: () => import('@/views/Login/index.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/main/main.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = Cache.getCache('token');
    if (!token) return { path: '/login' };
  }
});

export default router;
