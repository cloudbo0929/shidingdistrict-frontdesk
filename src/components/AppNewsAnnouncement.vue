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
      <router-link to="allnews"><button class="more-button">More &gt;</button></router-link>
    </div>
  </div>
</template>
  
  <script>
  export default {
    name: 'NewsAnnouncement',
    data() {
      return {
        newsItems: [
        { title: '2024新北嚴選 🏆恭喜石碇共7個店家獲獎🏆', date: '2024-09-03', link: '/news/1' },
        { title: '深坑x石碇-深情石刻 2024商圈嬉遊季 ', date: '2024-09-02', link: '/news/2' },
        { title: '2024山城走走｜9/28秋季社區走讀小旅行培力', date: '2024-09-02', link: '/news/3' },
        { title: '113年暑期娛樂營活動花絮 113.08.05 第一天', date: '2024-09-02', link: '/news/4' },
      ]
      };
    }
  };
  </script>
  
  <style scoped src="@/assets/css/appAnnouncement.css"></style>