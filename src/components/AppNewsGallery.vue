<template>
    <div class="news-gallery">
      <div class="news-header">
        <h2>最新消息</h2>
      </div>
      <div class="news-cards">
        <div class="news-card" v-for="(item, index) in newsItems" :key="index">
          <!-- 圖片超連結 -->
          <a :href="item.link">
            <img :src="item.image" alt="news image" class="news-image" />
          </a>
          <div class="news-info">
            <!-- 標題超連結 -->
            <a :href="item.link" class="news-title">{{ item.title }}</a>
            <div class="news-date">{{ item.date }}</div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    export default {
    name: "AppNewsGallery",
    data() {
        return {
        newsItems: [
            {
            image: "/images/S__22667434.jpg",
            title: "2024新北嚴選 🏆恭喜石碇共7個店家獲獎🏆",
            date: "2023-09-02",
            link: "/news/1"
            },
            {
            image: "/images/461179406_969423578321485_7823506902429604030_n.jpg",
            title: "深坑x石碇-深情石刻 2024商圈嬉遊季 ",
            date: "2023-09-02",
            link: "/news/2"
            },
            {
            image: "/images/456657572_500550832601580_1314269210867125923_n.jpg",
            title: "2024山城走走｜9/28秋季社區走讀小旅行培力",
            date: "2023-09-02",
            link: "/news/3"
            },
            {
            image: "/images/459837696_963431302254046_90948405633752073_n.jpg",
            title: "113年暑期娛樂營活動花絮 113.08.05 第一天",
            date: "2023-09-02",
            link: "/news/4"
            }
        ]
        };
    }
    };
  </script>
  
  <style scoped src="@/assets/css/appNews.css">  </style>
  