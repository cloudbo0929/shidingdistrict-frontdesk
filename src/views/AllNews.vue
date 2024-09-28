<template>
  <div class="all-news">
    <h1 class="news-title">所有新聞公告</h1>
    <ul class="news-list">
      <li class="news-item" v-for="(item, index) in paginatedNewsItems" :key="index">
        <div class="news-card">
          <span class="news-icon">⭐</span>
          <div class="news-content">
            <!-- 標題靠左 -->
            <a :href="item.link" class="news-title-link">{{ item.title }}</a>
            <!-- 日期靠右 -->
            <span class="news-date">{{ item.date }}</span>
          </div>
        </div>
      </li>
    </ul>

    <!-- 分頁器 -->
    <div class="pagination">
      <button
        class="page-button"
        :disabled="currentPage === 1"
        @click="changePage(currentPage - 1)"
      >
        &lt;
      </button>
      
      <span
        v-for="page in totalPages"
        :key="page"
        class="page-number"
        :class="{ active: currentPage === page }"
        @click="changePage(page)"
      >
        {{ page }}
      </span>

      <button
        class="page-button"
        :disabled="currentPage === totalPages"
        @click="changePage(currentPage + 1)"
      >
        &gt;
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllNews',
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 10,
      newsItems: [
        { title: '2024新北嚴選 🏆恭喜石碇共7個店家獲獎🏆', date: '2024-09-03', link: '/news/1' },
        { title: '深坑x石碇-深情石刻 #2024商圈嬉遊季 ', date: '2024-09-02', link: '/news/2' },
        { title: '113年暑期娛樂營（113.08.05）第一天', date: '2024-09-02', link: '/news/3' },
        { title: '2024山城走走｜9/28秋季社區走讀小旅行培力', date: '2024-09-02', link: '/news/4' },

      ]
    };
  },
  computed: {
    paginatedNewsItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.newsItems.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.newsItems.length / this.itemsPerPage);
    }
  },
  methods: {
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    }
  }
};
</script>
<style scoped src="@/assets/css/appAllNews.css"></style>
