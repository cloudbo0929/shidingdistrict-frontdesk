<template>
  <div class="news-announcement">
    <div class="news-header">
      <h2>更多消息或公告</h2>
    </div>
    <ul class="news-list">
      <li class="news-item" v-for="(item, index) in newsItems" :key="index">
        <span class="news-icon">⭐</span>
        <a :href="item.link" class="news-title">{{ item.title }}</a>
        <span class="news-date">{{ item.date }}</span>
      </li>
    </ul>
    <div class="news-footer">
      <button class="more-button">More &gt;</button>
    </div>
  </div>
</template>
  
  <script>
  export default {
    name: 'NewsAnnouncement',
    data() {
      return {
        newsItems: [
        { title: '恭賀 - 2024新北嚴選獲獎名單公告', date: '2024-09-02', link: '/news/1' },
        { title: '恭賀 - 2024新北嚴選獲獎名單公告', date: '2024-09-02', link: '/news/2' },
        { title: '恭賀 - 2024新北嚴選獲獎名單公告', date: '2024-09-02', link: '/news/3' },
        { title: '恭賀 - 2024新北嚴選獲獎名單公告', date: '2024-09-02', link: '/news/4' },
        { title: '恭賀 - 2024新北嚴選獲獎名單公告', date: '2024-09-02', link: '/news/5' }
      ]
      };
    }
  };
  </script>
  
  <style scoped src="@/assets/css/appAnnouncement.css"></style>