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
        <li><router-link to="/luck">抽個籤</router-link></li>
        <li><router-link to="/SpiritualPage">心靈小語</router-link></li>
        <li><router-link to="/IncompletePage">商品展示</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isScrolled: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);

    const headerHeight = document.querySelector('.header').offsetHeight;
    
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.style.marginTop = `${headerHeight}px`;
    } else {
      console.warn("'.main-content' element not found. Please check your template structure.");
    }
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 100;
    },
  },
};
</script>

<style src="@/assets/css/appHeader.css"></style>
