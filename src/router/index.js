import { createRouter, createWebHistory } from 'vue-router';
import AppIntroduction from '@/views/AppIntroduction.vue';
import AppHome from '@/views/AppHome.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AppHome,
  },
  {
    path: '/introduction',
    name: 'Introduction',
    component: AppIntroduction,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
