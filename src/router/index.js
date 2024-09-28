import { createRouter, createWebHistory } from 'vue-router';
import AppIntroduction from '@/views/AppIntroduction.vue';
import AppHome from '@/views/AppHome.vue';
import AllNews from '@/views/AllNews.vue';
import NewsDetail from '@/views/NewsDetail.vue'; // 引入新的頁面組件
import LuckDisplay from '@/views/LuckDisplay.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AppHome,
    meta: {
      title: '石碇觀光發展協會首頁',
      image: '/images/mascot.png', // 預設分享圖片
    },
  },
  {
    path: '/introduction',
    name: 'Introduction',
    component: AppIntroduction,
    meta: {
      title: '關於集順廟 - 石碇觀光發展協會',
      image: '/images/mascot.png',
    },
  },
  {
    path: '/allnews',
    name: 'AllNews',
    component: AllNews,
    meta: {
      title: '所有新聞公告 - 石碇觀光發展協會',
      image: '/images/mascot.png',
    },
  },
  {
    path: '/news/:id',
    name: 'NewsDetail',
    component: NewsDetail,
    meta: {
      title: '新聞詳情 - 石碇觀光發展協會',
      image: '/images/mascot.png',
    },
  },  
  {
    path: '/luck/:templateName',
    name: 'LuckDisplay',
    component: LuckDisplay,
    props: true, // 啟用 props 傳遞，可以接收 route.params
    meta: {
      title: '運勢詳細頁面 - 石碇觀光發展協會',
      image: '/images/mascot.png',
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '石碇觀光發展協會網站';

  let metaImage = document.querySelector('meta[property="og:image"]');
  if (!metaImage) {
    metaImage = document.createElement('meta');
    metaImage.setAttribute('property', 'og:image');
    document.head.appendChild(metaImage);
  }
  metaImage.setAttribute('content', to.meta.image || '/images/default.jpg');

  next();
});

export default router;
