import { createRouter, createWebHistory } from 'vue-router';
import AppIntroduction from '@/views/AppIntroduction.vue';
import AppHome from '@/views/AppHome.vue';
import AllNews from '@/views/AllNews.vue';
import NewsDetail from '@/views/NewsDetail.vue'; // 引入新的頁面組件

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
    component: NewsDetail, // 使用 NewsDetail 組件
    meta: {
      title: '新聞詳情 - 石碇觀光發展協會',
      image: '/images/mascot.png',
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// 當路由變更時更新瀏覽器標題與 og:image
router.beforeEach((to, from, next) => {
  // 更新瀏覽器標題
  document.title = to.meta.title || '石碇觀光發展協會網站';

  // 更新 og:image 的屬性
  let metaImage = document.querySelector('meta[property="og:image"]');
  if (!metaImage) {
    metaImage = document.createElement('meta');
    metaImage.setAttribute('property', 'og:image');
    document.head.appendChild(metaImage);
  }
  // 確保 `to.meta.image` 為可訪問的圖片 URL，或使用 `public` 資料夾中的相對路徑
  metaImage.setAttribute('content', to.meta.image || '/images/default.jpg');

  next();
});

export default router;
