import { createRouter, createWebHistory } from 'vue-router';
import AppIntroduction from '@/views/AppIntroduction.vue';

const routes = [
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
