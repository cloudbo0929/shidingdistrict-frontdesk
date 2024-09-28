<template>
  <header :class="['header', { 'header-scroll': isScrolled }]">
    <!-- 插入 LOGO 圖片 -->
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/images/logo.png" alt="LOGO" class="logo-image" />
      </router-link>
    </div>
    <nav class="nav">
      <ul>
        <li><router-link to="/">最新消息</router-link></li>
        <li><router-link to="/introduction">關於集順廟</router-link></li>
        <li><a href="#">抽個籤</a></li>
        <li><a href="#">商品展示</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isScrolled: false, // 用於控制 header 捲動後的樣式
    };
  },
  mounted() {
    // 監聽頁面捲動事件
    window.addEventListener('scroll', this.handleScroll);

    // 動態設置主內容的 margin-top，以避免被 header 擋住
    const headerHeight = document.querySelector('.header').offsetHeight;
    
    // 確認 .main-content 存在後再進行樣式設定
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.style.marginTop = `${headerHeight}px`;
    } else {
      console.warn("'.main-content' element not found. Please check your template structure.");
    }
  },
  beforeUnmount() {
    // 移除捲動事件監聽器，防止記憶體洩漏
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      // 當頁面捲動超過 100px 時，改變 isScrolled 狀態
      this.isScrolled = window.scrollY > 100;
    },
  },
};
</script>

<!-- 引入外部樣式檔 -->
<style src="@/assets/css/appHeader.css"></style>
