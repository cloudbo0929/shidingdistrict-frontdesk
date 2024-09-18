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
            title: "賀 本協會獲選新北嚴選特色商品",
            date: "2023-09-01",
            link: "/news/1"
            },
            {
            image: "https://via.placeholder.com/200x150",
            title: "title",
            date: "2023-09-02",
            link: "/news/2"
            },
            {
            image: "https://via.placeholder.com/200x150",
            title: "title",
            date: "2023-09-03",
            link: "/news/3"
            },
            {
            image: "https://via.placeholder.com/200x150",
            title: "title",
            date: "2023-09-04",
            link: "/news/4"
            }
        ]
        };
    }
    };
  </script>
  
  <style scoped src="@/assets/css/appNews.css">  </style>
  